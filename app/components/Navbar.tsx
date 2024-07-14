import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="realtive bg-white w-full mx-auto p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div className="pl-12 pr-8 border border-gray-200">
          <Image src="/logo.jpg" width="200" height="50" alt="logo"></Image>
        </div>
        {/*Menu Items*/}
        <div className="hidden md:flex space-x-6 text-black">
          <Link href="/hero" className="hover:text-[#785A28]">
            Landing Page
          </Link>
          <Link href="/organizations" className="hover:text-[#785A28]">
            organizations
          </Link>
          <Link href="#" className="hover:text-[#785A28]">
            AAAAA
          </Link>
          <Link href="#" className="hover:text-[#785A28]">
            AAAAA
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Link
            className="hidden md:block h-12 w-24 p-2 border-[#785A28] border size-full hover:bg-[#F8B517] hover:border-[#F8B517] rounded-lg text-center text-black"
            href="#"
          >
            Login
          </Link>
          <Link
            className="hidden md:block h-12 w-28 p-2 bg-[#F8B517] border rounded-lg mr-2 text-center"
            href="#"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
}
