"use client";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return ( <nav className="fixed top-0 left-0 w-full bg-blue-950 shadow-md z-50"> 

    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">

        <Link href={"/"}>
        <img src="/logo.avif" alt="logo" height={200} width={200} />
        </Link>

        <div className="flex items-center gap-6">
            <Link href={"/"} className="text-lg font-medium text-white hover:text-purple-400 transition">Home</Link>
            <Link href={"/show"} className="text-lg font-medium text-white hover:text-purple-400 transition">Schools</Link>
        </div>

    </div>
  
  </nav>
   
  );
}
