import Image from "next/image";
import card from "@material-tailwind/react/theme/components/card";
let widthbig = 384;
let heightbig =396;
let widthsmall = 384;
let heightsmall = 228;
export default function Get_to_know_about(){
    return(
       <>
           <div className="mb-8">
            <div className="container m-auto my-16">
                <h1 className="text-bold text-5xl font-sans text-center text-black">Get to Know V.Connct Webinar</h1>
                <p className="p-2 text-center text-lg mt-2">Explore the seamless flow of V.connct webinars, ensuring a smooth experience for both hosts and participants.</p>
            </div>
        <div className="container m-auto h-auto grid grid-cols-3 gap-8 w-9/12 content-center">
            <div className="items-center justify-between gap-4 p-2" >
            <div className=" border border-black row-span-2 p-2 rounded-md">
                <h2 className="text-bold text-3xl font-sans text-center	">Webinar Schedule</h2>
                <p className="p-2 text-center">
                    Plan your events with precision, ensuring that your audience knows when to tune in.
                </p><Image
            src='/firstdivbig.png'
            width={widthbig}
            height={heightbig}
            className="items-center mx-auto"
            /></div>
            <div class="grid grid-cols-subgrid gap-4 row-span-1 mt-6 mx-auto">
                <div className=" border border-black rounded-md p-2">
                    <p className="text-bold text-3xl font-sans text-center">Brand Identity</p><Image
                src="/firstdivsmall.png"
                width={widthsmall}
                height={heightsmall}
                className="mx-auto py-3.5"
                /></div>
            </div>
            </div>
            <div>
            <div className=" border border-black h-auto row-span-3 rounded-md my-2 py-2">
                <div>
                    <Image src="/middletop.png" width={widthbig} height={heightbig} alt="middletop" className="mx-auto pt-3"/>
                </div>
                <div>
                    <p className="text-bold text-3xl font-sans text-center">Register form</p>
                    <p className="p-2 text-center">
                        Easily collect participant information with our user-friendly registration forms.
                    </p>
                </div>
                <div>
                <Image src="/middlebottom.png" width={widthbig} height={heightbig} className="mx-auto pt-3 pb-3.5"/>
                </div>
            </div>
            </div>
            <div>
            <div className=" border border-black row-span-1 mt-2 rounded-md py-2">
                <p className="text-bold text-3xl font-sans text-center">Shareable Card</p>
                <Image src="/card.png" alt={"card"} width={widthsmall} height={heightsmall} className="mx-auto pt-3"/>
            </div>

            <div class="grid grid-cols-subgrid gap-4 row-span-2 mt-6 rounded-md">
                <div className=" border border-black rounded-md ">
                    <p className="text-bold text-3xl font-sans text-center pt-2">Email Notifications</p>
                    <p className="p-2 text-center">Keep participants informed with emails for registration confirmation, webinar start & end.
                    </p>
                    <Image src="/inbox.png" alt={"inbox"} width={widthsmall} height={heightbig} className="mx-auto pt-3 pb-3"/>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="container mx-auto text-white align-center text-center m-6">
            <button className=" bg-[#1B1B1B] w-52 p-4 rounded-md" >Plans & Pricing</button>
        </div>
           {/*why choose variance*/}
       <div className="text-white text-center  bg-black w-full  max-h-[836px]">
            <div className=" grid grid-col-3 items-center justify-between gap-4">
                <div className="col-span-1 border border-indigo w-18 h-16">
                    <div className="row-span-1">
                        <Image src={""} width={50} height={50}/>
                        <h2>User-Friendly Interface</h2>
                        <p>Navigate effortlessly through our user-friendly interface.</p>
                    </div>
                    <div className="row-span-1">
                        <Image src={""} width={50} height={50}/>
                        <h2>Live Stream Capabilities</h2>
                        <p>Connect with participants globally in real-time with our live streaming option.</p>
                    </div>
                </div>
                <div className="col-span-1 border border-indigo w-18 h-16">
                    <div className="row-span-1">
                        <Image src={""} width={50} height={50}/>
                        <h2>Comprehensive Features</h2>
                        <p>Enjoy a wide array of features. Tailor each webinar to your unique needs.</p>
                    </div>
                    <div className="row-span-1">
                        <Image src={""} width={50} height={50}/>
                        <h2>30-Hour Webinar Duration</h2>
                        <p>Enjoy webinar durations for those in-depth discussions and comprehensive sessions.</p>
                    </div>
                </div>
                <div className="col-span-1 border border-indigo w-18 h-16">
                    <div className="row-span-1">
                        <Image src={""} width={50} height={50}/>
                        <h2>Up to 5000 Participants</h2>
                        <p>Host anything from intimate seminars to grand conferences.</p>
                    </div>
                    <div className="row-span-1">
                        <Image src={""} width={50} height={50}/>
                        <h2>Cloud Recording Storage</h2>
                        <p>Benefit from our cloud recording to ensuring you never miss a crucial detail.</p>
                    </div>
                </div>
            </div>
       </div>
    </>
            )
}