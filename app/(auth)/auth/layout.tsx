import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex justify-center items-center h-screen flex-col bg-[#0a0a0a]">{children}</main>;
};

export default AuthLayout;