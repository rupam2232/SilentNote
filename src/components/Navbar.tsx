"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "./ui/button";
import { Github, Loader2, MessageSquare } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Navbar = () => {
  const { data: session } = useSession();
  const user: User = session?.user;

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b-2 border-gray-700/50">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 shadow-md text-white">
        <div className="container mx-auto flex md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-purple-500" />
            <Link href="#" className="text-xl font-bold">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>
          </div>
          {session ? (
            <>
              <span className="hidden md:inline">
                {`Welcome, ${user?.username || user?.email}`}
              </span>
              <div className="flex items-center gap-2">
              <a className="items-center gap-2 hidden md:flex" href="https://github.com/rupam2232/SilentNote" target="_blank" rel="noopener noreferrer" title="Star on Github" aria-label="Star on Github">
              <Button className="bg-white text-black cursor-pointer hover:bg-gray-200 [&_svg]:!size-5">
                <Github className="bg-black text-white fill-white p-0.5 pb-0 rounded-full" />Star on GitHub
                </Button>
              </a>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-auto bg-white text-black cursor-pointer hover:bg-gray-200">
                    Sign Out
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will Sign you out of this website.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => signOut()}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
            <a className="items-center gap-2 hidden md:flex" href="https://github.com/rupam2232/SilentNote" target="_blank" rel="noopener noreferrer" title="Star on Github" aria-label="Star on Github">
              <Button className="bg-white text-black cursor-pointer hover:bg-gray-200 [&_svg]:!size-5">
                <Github className="bg-black text-white fill-white p-0.5 pb-0 rounded-full" />Star on GitHub
                </Button>
              </a>
              <Link href="/signin">
                <Button className="relative overflow-hidden bg-purple-600 transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  {typeof session === "undefined" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <span className="relative z-10">Sign In</span>
                      <span className="absolute inset-0 -z-10 translate-y-[100%] bg-purple-500 transition-transform duration-300 hover:translate-y-0"></span>
                    </>
                  )}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
