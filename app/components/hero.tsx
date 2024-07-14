import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    //
    <div className="container mx-auto  p-6 text-center items-center self-center pt-14 mt-16 text-black  font-['Trebuchet_MS']">
      <p className="p-8 gap-4 text-7xl font-bold drop-shadow-2xl">
        All-in-One Solution for
        <br /> Effortless Webinar Hosting
      </p>
      <p className="p-8 gap-4 text-xl w-auto ">
        Create immersive live Webinar experiences with everything you need. Join
        industry experts for a transformative learning experience and
        <br /> gain the audience you need.
      </p>
      <div className="flex m-2 items-center justify-center text-xl">
        <Link
          href="#"
          className="h-14 w-44 content-center bg-[#F8B517] border rounded-lg mr-6 text-center"
        >
          Price & Plans
        </Link>
        <Link
          href="#"
          className="h-14 w-44 content-center border-[#785A28] border size-full rounded-lg text-center text-black"
        >
          Contact Us
        </Link>
      </div>
      <Image
        src="/hero-section-one-web.png"
        width={1200}
        height={750}
        alt="hero-section-one"
        className="m-auto"
      />
    </div>
  );
}
