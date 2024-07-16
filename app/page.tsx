
import Hero from "@/app/components/hero";
import Organizations from "./components/organizations_comp";
import Get_to_know_about from "@/app/components/get_to_know_about";
import Accordion_comp, {AccordionCustomIcon} from "@/app/components/faq";
export default function Home() {
  return (
    <body>
      {/* <Navbar/> */}
      <Hero />
      <Organizations />
        <Get_to_know_about/>
      <Accordion_comp/>
      {/*<AccordionCustomIcon/>*/}
    </body>
  );
}
