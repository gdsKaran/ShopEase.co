"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/users";
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

  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/");
  } catch (err) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "This email already exists!",
        },
      };
    }
    throw err;
  }
}

export async function Login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: "Email or password entered is wrong",
      },
    };
  }

  const isValidPass = verifyPassword(existingUser.password, password);

  if (!isValidPass) {
    return {
      errors: {
        password: "Email or password entered is wrong",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/");
}

export async function auth({ mode, prevState, formData }) {
  console.log(mode);
  if (mode === "signin") {
    return Login(prevState, formData);
  }
  return Signup(prevState, formData);
}

export async function logout() {
  await destroySession();
  redirect("/");
}
