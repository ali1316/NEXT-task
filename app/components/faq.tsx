'use client';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "./chevron-down.svg";
import Link from "next/link";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
            header={({ state: { isEnter } }) => (
            <>
                {header}
                <img
                    className={`ml-auto transition-transform duration-200 ease-out w-5 ${
                        isEnter && "rotate-180"
                    }`}
                    src={"/down.png"}
                    alt="Chevron"
                />
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left ${
                    isEnter
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{ className: "p-4" }}
    />
);

export default function Accordion_comp() {
    return (
        <>
            <div className="text-white text-center mx-auto bg-[#FFF4E5] w-full  md:h-[440px] p-4 pt-8">
                <div className="container mx-auto bg-white border border-black mt-9 rounded-md sm:h-[280px] p-6 ">
                    <h1 className="text-black font-black pt-6 text-left ml-7 text-4xl"> Need Help! Webinar Documentation</h1>
                    <p className="text-lg text-black text-left ml-7 pt-6">Need production help? Webinar Documentation  has you covered. We can help ensure you next webinar goes off without a hitch.</p>
                    <div className="border-b-2 border-black w-32 ml-7">

                       <Link href="#" ><p className="w-auto text-black text-center font-bold text-lg pt-9">Help Center -></p></Link>
                    </div>
                </div>

            </div>
            <div className="container mx-auto text-center text-xl my-10 sm:my-16 font-extrabold sm:text-7xl">
            FAQ'S
        </div>
        <div className="mx-16 my-4 border-b">
            {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
            <Accordion transition transitionTimeout={200} className="p-6">
                <AccordionItem header="How many participants can I host in a webinar?" >
                    <div className="text-xs	">V.connct supports up to 5000 participants, offering scalability for events of any size.</div>
                </AccordionItem>

                <AccordionItem header="Can I live stream my webinars?">
                    <div className="text-xs	">Absolutely! Enjoy the benefits of reaching a wider audience in real-time.</div>
                </AccordionItem>

                <AccordionItem header="How long can a webinar last?">
                    <div className="text-xs	">Webinars can extend up to 30 hours, providing flexibility for various event durations.</div>
                </AccordionItem>
                <AccordionItem header="Are email notifications automated?">
                    <div className="text-xs	">Yes, V.connct sends automated emails for registration, start, and end times.</div>
                </AccordionItem>
            </Accordion>
        </div>
            <div className="text-white text-center mx-auto bg-black w-full  h-[340px] pt-4 lg:pb-4 md:pt-8">
                <p className="text-[#FFF4E5] text-center text-xl mt-7 sm:my-16 font-extrabold sm:text-7xl">Ready to Elevate Your Webinars?</p>
                <div className="container mx-auto text-white align-center text-center m-3 gap-6">
                    <button className=" p-2 mt-6 bg-[#F8B517] w-52 lg:p-4 rounded-md text-black py-auto items-center">Buy Now</button>
                </div>
            </div>
        </>
    );
}
