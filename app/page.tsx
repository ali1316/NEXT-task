import Image from "next/image";
// import Navbar from "./components/Navbar"
import Example from "./components/Navbar";
import Hero from "@/app/components/hero";
import Navbar from "./components/Navbar";
import Organizations from "./components/organizations_comp";
import Get_to_know_about from "@/app/components/get_to_know_about";
export default function Home() {
  return (
    <body>
      {/* <Navbar/> */}
      <Hero />
      <Organizations />
      <Get_to_know_about />
    </body>
  );
}
