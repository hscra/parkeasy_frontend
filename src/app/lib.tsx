import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Encode the secret key as bytes
const key = new TextEncoder().encode(process.env.JWT_TOKEN);
const expires_after = parseInt(process.env.SESSION_COOKIE_LIFESPAN || '0', 10);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" }) // Set the algorithm for JWT signing
    .setIssuedAt() // Set the issuance time of the JWT
    .setExpirationTime(`${expires_after} sec from now`) // Set the expiration time of the JWT
    .sign(key); // Sign the JWT using the secret key
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"], // Specify the allowed algorithms for JWT verification
  });
  return payload; // Return the decrypted payload
}

export async function login({
  memberEmail,
  memberPassword,
}: {
  memberEmail: string;
  memberPassword: string;
}) {
  // Verify credentials && get the user
  const response = await fetch(process.env.SERVER_DOMAIN + "/member/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // Include cookies for session
    body: JSON.stringify({ memberEmail, memberPassword }),
  });

  console.log("after login from lib.tsx", response)

  if (!response.ok) {
    throw new Error("Login failed!");
  }
  const data = await response.json();
  console.log(data);

  // Create the session
  const expires = new Date(Date.now() + (expires_after * 1000)); // Set session expiration time
  const session = await encrypt({ data, expires }); // Encrypt user data and set expiration time

  // Save the session in a cookie
  (await cookies()).set("session", session, { expires, httpOnly: true }); // Set session cookie with expiration time and HTTP only flag
  return data;
}

export async function logout() {
  // Destroy the session by clearing the session cookie
  (await cookies()).set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  console.log("lib.tsx - getSession");

  const session = (await cookies()).get("session")?.value; // Retrieve the session cookie value
  console.log("lib session", session);
  if (!session) return null; // If session is not found, return null

  const decrypted = decrypt(session);
  console.log("decrypted session", decrypted);

  return await decrypted; // Decrypt and return the session payload
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value; // Retrieve the session cookie value from the request
  if (!session) return; // If session is not found, return

  // Refresh the session expiration time
  //! Here we may need to read only the session.value and not the whole session object
  const parsed = await decrypt(session); // Decrypt the session data
  parsed.expires = new Date(Date.now() + expires_after * 1000); // Set a new expiration time
  const res = NextResponse.next(); // Create a new response
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed), // Encrypt and set the updated session data
    httpOnly: true,
    expires: parsed.expires, // Set the expiration time
  });
  return res; // Return the response
}
