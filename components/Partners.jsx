import Image from "next/image";
import Link from "next/link";
import { PartnersData } from "@/constants";

const Partners = () => {
  return (
    <div className="flex flex-col px-4 py-8 mx-auto lg:gap-8 justify-centre items-center">
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold mb-4'>Community<span className='text-red'> Partners</span></h4>
      <div className="flex max-md:flex-col gap-4">
        {PartnersData.map((item,index) => (
          <Link href={item.link} key={index} className="my-auto">
            <Image src={item.image} alt="true" className="w-40 my-auto" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
