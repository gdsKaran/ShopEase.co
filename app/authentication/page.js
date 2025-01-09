import AuthForm from "@/components/Auth/auth-form";

export default function AuthPage({ searchParams }) {
  const formMode = searchParams.mode || "signin";
  return <AuthForm mode={formMode} />;
}
