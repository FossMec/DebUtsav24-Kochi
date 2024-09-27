import Image from "next/image";
import FossLogo from "@/assets/logos/fossunited-white.svg";
const Sponsors = () => {
  return (
    <div className="flex flex-col px-4 py-8 mx-auto lg:gap-8 justify-centre items-center">
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold mb-4'>Our<span className='text-red'> Sponsors</span></h4>
      <div className="flex max-md:flex-col gap-4">
        <Image src={FossLogo} alt="true" className="w-40 my-auto" />
      </div>
    </div>
  );
};

export default Sponsors;
