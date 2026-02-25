import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-0 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
      <div className="relative w-85 h-95">
        <Image
          src="/login.png"
          alt="login-image"
          fill
          className="object-fill"
        />
      </div>
      <div className="w-90 flex bg-transparent justify-center items-center">
        <SignInFormClient />
      </div>
    </div>
  );
};

export default page;
