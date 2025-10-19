import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Signup successful!");
      window.location.href = "/login";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded-2xl p-8 w-96 border"
      >
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="border w-full mb-3 p-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border w-full mb-3 p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full mb-3 p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
}
