"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
export default function User() {
  const { user } = useUser();
  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          <Link
            className={`${buttonVariants({ size: "sm" })} text-sm`}
            style={{ height: "32px" }}
            href="/list"
          >
            My list
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
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
