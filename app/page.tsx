import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-100 h-screen">
      <Button>Get Stared</Button>
      <UserButton />
    </div>
  );
}
