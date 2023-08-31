"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
export default function User() {
  const { user } = useUser();
  return (
    <div>
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton
          afterSignInUrl="/"
          afterSignUpUrl="/"
          mode="modal"
        >
          <Button
            size="sm"
            variant="outline"
            className="text-foreground"
          >
            Sign in
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
