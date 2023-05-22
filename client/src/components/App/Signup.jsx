import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../.././utils/mutation";
import Auth from "../.././utils/auth";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { email, password },
      });
      Auth.login(data.addUser.token);
      console.log(data);
      console.log(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(255, 248, 214)" }} className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 style={{ color: "rgb(97, 122, 85)" }} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign up for an account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                style={{ color: "rgb(97, 122, 85)" }}
                className="block text-lg font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  style={{ color: "rgb(97, 122, 85)" }}
                  className="block text-lg font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                style={{ backgroundColor: "rgb(164, 208, 164)", color: "rgb(97, 122, 85)" }}
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Register
              </button>
            </div>
          </form>
          <p style={{ color: "rgb(97, 122, 85)" }} className="mt-10 text-center text-sm">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-gray-400 hover:text-gray-200"
            >
              Sign in here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
