"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (<footer className="bg-blue-950 text-white py-10 ">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex items-center md:items-start gap-4">
                <img src="/logo.avif" alt="" height={200} width={200} />
            </div>
            <div className="flex flex-col items-start">
                <Link href={"/"} className="hover:text-purple-400 transition">Home</Link>
                 <Link href={"/show"} className="hover:text-purple-400 transition">Schools</Link>
                  <Link href={"/"} className="hover:text-purple-400 transition">Privacy policy</Link>
                  <Link href={"/"} className="hover:text-purple-400">Terms and Conditions</Link>
            </div> 

        </div>

    </footer>

    );
}
