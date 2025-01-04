"use server";

import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/users";
import { redirect } from "next/navigation";

export async function Signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Enter valid email address!";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must contain 8 characters!";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPass = hashUserPassword(password);
  try {
    await createUser(email, hashedPass);
  } catch (err) {
    if (err.code === 11000) {
      return {
        errors: {
          email: "This email already exists!",
        },
      };
    }
    throw err;
  }
  redirect("/");
}
