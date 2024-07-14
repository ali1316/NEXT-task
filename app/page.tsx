import Image from "next/image";
// import Navbar from "./components/Navbar"
import Example from "./components/Navbar";
import Hero from "@/app/components/hero";
import Navbar from "./components/Navbar";
import Organizations from "./components/organizations_comp";
export default function Home() {
  return (
    <body>
      {/* <Navbar/> */}
      <Hero />
      <Organizations />
    </body>
  );
}
