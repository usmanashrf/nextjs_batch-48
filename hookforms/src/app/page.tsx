"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    }
    if (password === "") {
      alert("Password is required");
    }
    // let email: any = document.getElementById("email")?.value;
    console.log(email);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => {
            console.log(e);
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          id="password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
