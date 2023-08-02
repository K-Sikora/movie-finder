import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <main className="flex items-center justify-center min-h-screen -mt-20">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
    />
  </main>
);

export default SignUpPage;
