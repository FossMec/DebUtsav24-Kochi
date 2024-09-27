import Image from "next/image";
import FossMITSLogo from "@/assets/logos/fossmits.svg";
import MuktiLogo from "@/assets/logos/mukti.png"

const Partners = () => {
  return (
    <div className="flex flex-col px-4 py-8 mx-auto lg:gap-8 justify-centre items-center">
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold mb-4'>Our<span className='text-red'> Partners</span></h4>
      <div className="flex max-md:flex-col gap-4">
        <Image src={FossMITSLogo} alt="true" className="w-40 my-auto" />
        <Image src={MuktiLogo} alt="true" className="w-40 my-auto" />
      </div>
    </div>
  );
};

export default Partners;
