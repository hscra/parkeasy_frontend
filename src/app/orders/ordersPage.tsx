// Server Component
import React from "react";
import Orders from "./page";

// Fetch data on the server
async function fetchData() {
  const reservationRes = await fetch(
    "http://localhost:8080/reservation/getAll",
    {
      method: "GET",
    }
  );
  const reservations = await reservationRes.json();
}

const loginUser = async () => {
  const email = "test@example.com"; // Replace with your hardcoded email
  const password = "password123"; // Replace with your hardcoded password
  try {
    const response = await fetch("http://localhost:8080/member/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberEmail: email,
        memberPassword: password,
      }),
    });

    if (!response.ok) {
      console.error("Login failed", await response.text());
      return;
    }

    const data = await response.json();
    console.log("Login successful, user data:", data);

    // Optional: Store user data or token
    localStorage.setItem("user", JSON.stringify(data));

    // Do something with the data, e.g., update state
  } catch (error) {
    console.error("Error during login:", error);
  }
};
