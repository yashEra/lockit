import PlaystoreTwo from "../../assets/images/playstore-2.svg";

const ButtonTwo = () => {
    return (
      <div className="lg:m-8">
        <button className="w-[286px] flex justify-center mt-4 font-bold text-[#00A5AF] bg-white">
          Download App{" "}
          <img
            src={PlaystoreTwo}
            className="pl-4"
            alt="playstore"
          />
        </button>
      </div>
    );
  };
  
  export default ButtonTwo;
  