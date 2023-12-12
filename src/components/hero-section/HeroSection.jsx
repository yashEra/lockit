import recat from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10 z-[-1]"
        src="http://localhost:3001/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white text-center">
        <h1 className="py-2">HELLO HI HI HELLO</h1>
        <h1 className="py-2">Pradee | Hasan | Nusnan</h1>
        <p className="text-al py-4">your trusted Security solution partner</p>
        <div>
            <button className="mx-2">Get Start</button>
            <button className="mx-2">Help</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
