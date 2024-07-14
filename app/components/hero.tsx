import Image from "next/image";
import Link from "next/link";
export default function Hero ()  {
    return(
        //
        <div className="container mx-auto xl:m-auto p-6 text-center items-center pt-2 mt-12 ">
            <p className="font-sans p-8 gap-4 text-7xl font-bold">All-in-One Solution for
                Effortless Webinar Hosting</p>
            <p className="font-sans p-8 gap-4 text-xl">Create immersive live Webinar experiences with everything you
                need. Join industry experts for a transformative learning experience and gain the audience you need.</p>
            <div className="flex m-2 inline-flex items-center justify-center w-full">
                <Link href="#" className="h-12 w-44	p-2  bg-[#F8B517] border rounded-lg mr-6 text-center">Price & Plans</Link>
                <Link href="#" className="h-12 w-44 p-2  border-[#785A28] border size-full rounded-lg text-center">Contact Us</Link>
            </div>
            <Image src="/hero-section-one-web.png" width={1200} height={750} />
        </div>
    )
}