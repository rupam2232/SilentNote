"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const user: User = session?.user;
  
  return (
    <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
      <div className="container mx-auto flex md:flex-row justify-between items-center">
        <Link href="#" className="text-xl font-bold md:mb-0">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </Link>
        {session ? (
          <>
            <span className="hidden md:inline">Welcome, {user?.username || user?.email}</span>
            <Button onClick={() => signOut()} className="w-auto bg-slate-100 text-black cursor-pointer" variant='outline'>Logout</Button>
          </>
        ) : (
          <>
            <Link href="/signin">
              <Button className="w-auto bg-slate-100 text-black cursor-pointer" variant={'outline'}>{typeof session === "undefined" ? <Loader2 className="animate-spin" /> :"Sign In"}</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
