import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
   //  console.log("email is ", email);
   //  console.log("password", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col  items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // setEmail("")
            }}
            required
            className="border-2 border-emerald-600 px-5 py-3 text-xl text-black outline-none bg-transparent placeholder:text-gray-400 rounded-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // setPassword("")
            }}
            required
            className="border-2 border-emerald-600 px-5 py-3 text-xl mt-3 text-black outline-none bg-transparent placeholder:text-gray-400 rounded-full"
            type="password"
            placeholder="Enter Password"
          />
          <button className="border-2 border-none bg-emerald-600 px-5 py-3 text-xl text-white outline-none placeholder:text-white rounded-full mt-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
