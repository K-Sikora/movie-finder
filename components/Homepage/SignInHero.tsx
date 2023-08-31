"use client";
import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
export default function SignInHero() {
  const { user } = useUser();
  if (user) {
    return;
  }
  return (
    <SignInButton
      afterSignInUrl="/"
      afterSignUpUrl="/"
      mode="modal"
    >
      <Button
        size="lg"
        className="bg-transparent border border-white"
      >
        Sign in
      </Button>
    </SignInButton>
  );
}
