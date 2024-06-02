import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="grid h-screen place-content-center">
      <h1 className="font-bold text-4xl">Login</h1>
      <div className="flex flex-col gap-3 pt-5">
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" className="border-2" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" className="border-2" />
        </div>
      </div>
      <div className="flex justify-center pt-5 gap-4">
        <button className="bg-slate-500 text-white font-bold py-2 px-4 rounded-lg">
          Back
        </button>
        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
