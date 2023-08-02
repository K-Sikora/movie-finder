import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <main className="flex items-center justify-center min-h-screen -mt-20">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
    />
  </main>
);

export default SignInPage;
