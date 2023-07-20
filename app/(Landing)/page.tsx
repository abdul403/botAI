import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <div className="text-3xl text-gray-900"> Landing Page (Unprotected)</div>
      <Link href="/sign-in">
        {" "}
        <Button>Sign in</Button>
      </Link>
      <Link href={"/sign-up"}>
        {" "}
        <Button>Register</Button>
      </Link>
    </>
  );
};

export default LandingPage;
