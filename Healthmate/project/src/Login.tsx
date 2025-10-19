import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-2xl p-8 w-96 border"
      >
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
}
