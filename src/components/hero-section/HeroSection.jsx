import recat from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
    <div className="w-full h-[90vh] top-[90px] flex items-center bg-gradient-to-r from-black to-transparent">
      <img
        className="object-cover h-[90vh] w-full absolute -z-10 z-[-1]"
        src="http://localhost:3000/images/hero-background.png"
        autoPlay
        loop
        muted
      />
      <div className="max-w-[1140px] 2xl:max-w-[1240px] mx-auto px-4 h-[90%] flex flex-col justify-center items-left text-white text-left ">
        <h1 className="py-2 font-black text-6xl uppercase">Secure Your Cycle</h1>
        <h4 className="py-2 font-bold text-2xl">Safeguard Your Ride with Smart Bicycle Locks</h4>
        <p className="text-lg py-4 w-[50%]">Welcome to Lockit, where we redefine bicycle security for the modern world. Our smart locks blend cutting-edge technology with sleek design to protect your ride like never before. Explore our innovative solutions and enjoy peace of mind on every journey.</p>
        <div>
            <button className="w-[286px] flex justify-center mt-4 font-bold">Download App <img src="http://localhost:3000/images/playstore.png" className="pl-4" alt="playstore"/></button>
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-auto  opacity-50"></div> */}
      </div>
    </div>
    </div>
  );
};

export default Hero;
