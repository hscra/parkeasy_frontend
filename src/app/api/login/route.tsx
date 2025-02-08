import { NextResponse } from 'next/server';
import { login } from "@/app/lib";

export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js 14 API!' });
}

export async function POST(request: Request) {
//   console.log("helo", request);

  const body = await request.json();
  console.log("body", body);

//   return NextResponse.json({ received: body });

  fetch(process.env.SERVER_DOMAIN + "/member/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: 'include'
  })
    .then(async response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) })
      }
      console.log("successful login, api/login/POST", response)
      // setLoggedIn(true)
      // router.push("/")
    })
    .catch((error) => {
      console.log("/login", error);
    })

    return NextResponse.json({ received: body });
}
