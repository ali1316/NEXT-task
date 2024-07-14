import Image from "next/image";

export default function Organizations() {
  let width = 150;
  let height = 120;
  return (
    <>
      <p className="text-black font-bold text-center text-2xl mb-4 content-center">
        Trusted and used by many organizations worldwide
      </p>
      <div className="items-center container size-44 grid grid-cols-4 gap-2 md:grid-cols-6 md:w-full md:pl-24 md:gap-36 mx-auto mb-6">
        <Image
          src="/AlAtrega 1.png"
          width={width}
          height={height}
          alt="AlAtrega"
        ></Image>
        <Image
          src="/Delta international schools 1.png"
          width={width}
          height={height}
          alt="Delta international schools"
        ></Image>
        <Image
          src="/Sphinx University 2.png"
          width={width}
          height={height}
          alt="Sphinx University"
        ></Image>
        <Image
          src="/Delta institute 1.png"
          width={width}
          height={height}
          alt="Delta institute"
        ></Image>
        <Image
          src="/Ayatu Rahman 1.png"
          width={width}
          height={height}
          alt="Ayatu Rahman"
        ></Image>
        <Image
          src="/Resala 2.png"
          width={width}
          height={height}
          alt="Resala"
        ></Image>
      </div>
    </>
  );
}
