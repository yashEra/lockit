import Playstore from "../../assets/images/playstore.png";

const ButtonOne = () => {
  return (
    <div className="m-8">
      <button className="w-[286px] flex justify-center mt-4 font-bold text-white">
        Download App{" "}
        <img
          src={Playstore}
          className="pl-4"
          alt="playstore"
        />
      </button>
    </div>
  );
};

export default ButtonOne;
