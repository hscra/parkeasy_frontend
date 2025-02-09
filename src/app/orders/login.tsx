import { redirect } from "next/navigation";
import { getSession, login, logout } from "../lib";

export default async function Page() {
  // const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          // Extract email and password from the form data
          const memberEmail = formData.get("memberEmail") as string;
          const memberPassword = formData.get("memberPassword") as string;

          // Ensure both email and password are provided
          if (!memberEmail || !memberPassword) {
            throw new Error("Email and Password are required!");
          }

          // Perform the login (calls your custom `login` function)
          const userData = await login({ memberEmail, memberPassword });

          redirect("/orders");
          return userData;
        }}
      >
        <input type="email" name="memberEmail" placeholder="Email" />
        <input type="password" name="memberPassword" placeholder="Password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </section>
  );
}
