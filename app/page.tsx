"use client";
import AddSchool from "@/app/components/addSchool";

export default function Home() {
  return (<div className="min-h-screen w-full bg-gradient-to-b from blue-50 to to-blue-100">
    <section className=" flex flex-col items-center justify-center text-center px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight ">Integrated Institution <br /> Management System</h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">  Streamline your institute&apos;s operations with our powerful,
        all-in-one ERP solution tailored for education.</p>
    </section>

    <section className="px-6 py-16 text-center bg-gradient-to-r from purple-600 to  bg-indigo-600 text-white">
      <h2 className="text-4xl md:text-5xl font-bold pb-6">Ready to Transform your Instituion?</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8"> Join hundreds of institutions already using our system to simplify their daily operations.</p>
      <button className=" px-8 py-3 text-lg font-semibold rounded-full bg-white text-purple-700 shadow-lg hover:bg-gray-100 transition">Get Started Today</button>

    </section>
    <AddSchool />

  </div>

  );
}
