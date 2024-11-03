import LoginForm from "@/components/loginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center align-middle">
      <div className="w-[30rem]">
        <LoginForm />
      </div>
    </div>
  );
}
