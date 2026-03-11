import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // call login API, store token
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow w-96 space-y-4">
        <h1 className="text-xl font-semibold">NCIC Admin Login</h1>
        <input className="w-full border p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full border p-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white w-full p-2 rounded" onClick={login}>Login</button>
      </div>
    </div>
  );
}
