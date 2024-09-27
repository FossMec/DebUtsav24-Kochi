import Image from "next/image";
import FossLogo from "@/assets/logos/fossunited-white.svg";
const Sponsors = () => {
  const platinumSponsors = [];
  const goldSponsors = [];
  const silverSponsors = [];

  const renderSponsors = (sponsors, width) =>
    sponsors.map((sponsor) => (
      <div className="p-4 md:p-10 md:mx-10">
        <img src={sponsor} width={width} alt="" srcset="" />
      </div>
    ));

  return (
    <div className="flex flex-col px-4 py-8 mx-auto lg:gap-8 justify-centre items-center">
      {/*<div className="flex flex-col justify-center items-center gap-16">
        <h2 className="text-2xl font-semibold">Platinum</h2>
        <div className="flex flex-col justify-center items-center ">
          {renderSponsors(platinumSponsors, 400)}
        </div>
        <h2 className="text-2xl font-semibold">Gold</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {renderSponsors(goldSponsors, 300)}
        </div>
        <h2 className="text-2xl font-semibold">Silver</h2>
        <div className="grid grid-cols-1  md:grid-cols-2   ">
          {renderSponsors(silverSponsors, 200)}
        </div>
      </div>*/}
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold mb-4'>Our<span className='text-red'> Sponsors</span></h4>
      <Image src={FossLogo} alt="true" className="w-60" />
    </div>
  );
};

export default Sponsors;
