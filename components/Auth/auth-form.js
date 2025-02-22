"use client";

import { auth } from "@/actions/auth";
import { useFormState } from "react-dom";
import AuthAlert from "../alerts/AuthAlert";
import Image from "next/image";
import { useFormStatus } from "react-dom";

export default function AuthForm({ mode }) {
  const [formState, formAction] = useFormState(
    (prevState, formData) => auth({ mode, prevState, formData }),
    {}
  );
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <Image
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="Sign Up"
              src="https://cdn3.iconfinder.com/data/icons/simple-toolbar/512/lock_secure_security_password_private_key-512.png"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              {mode === "signin" ? "Sign in to" : "Create"} your account
            </h2>
          </div>

          <form action={formAction} className="space-y-6">
            {formState.errors && (
              <ul id="form-errors">
                {Object.keys(formState.errors).map((error) => (
                  <AuthAlert key={error} alert={formState.errors[error]} />
                ))}
              </ul>
            )}
            <div>
              <div className="col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  autoComplete="email"
                  aria-label="Email address"
                  className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="-mt-px">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                  aria-label="Password"
                  className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="remember-me"
                  className="block text-sm/6 text-gray-900"
                >
                  Remember me
                </label>
              </div>
              {mode === "signin" && (
                <div className="text-sm/6">
                  <a
                    href="/authentication/?mode=register"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    register?
                  </a>
                </div>
              )}
              {mode === "register" && (
                <div className="text-sm/6">
                  <a
                    href="/authentication/?mode=signin"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Login with an existing account?
                  </a>
                </div>
              )}
            </div>

            <div>
              <SubmitButton mode={mode} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function SubmitButton({ mode }) {
  const { pending } = useFormStatus(); // This must be inside a child of <form>

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {pending ? (
        <svg
          className="animate-spin h-5 w-5 text-cyan-400 drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25 stroke-cyan-300"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75 fill-cyan-700"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : mode === "signin" ? (
        "Sign in"
      ) : (
        "Create Account"
      )}
    </button>
  );
}
