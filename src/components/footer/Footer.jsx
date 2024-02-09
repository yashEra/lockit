import ButtonTwo from "../button/ButtonTwo";

const Footer = () => {
  return (
    <div className="bg-[#00A5AF]">
      <div className=" text-white w-full py-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left px-6 md:px-[10%]">
        <div className="flex flex-col items-start pt-8">
          <h2 className="font-bold text-xl py-4t text-center">Lockit Team</h2>
          <span className="text-[#8EF2EC] font-medium text-justify pt-2">
            At Lockit, we're passionate about enhancing the safety and security
            of cyclists everywhere. Our mission is to provide innovative
            solutions that protect your bicycle and give you peace of mind,
            whether you're commuting to work, cruising through the city, or
            embarking on an epic adventure.
          </span>
          <div className="flex flex-row items-start pt-4"></div>
        </div>
        {/* <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Company info</h2>
        <ul className="flex flex-col items-start font-medium">
          <li className="text-[#8EF2EC]">
            <a href="about">About</a>
          </li>
          <li className="text-[#8EF2EC]">
            <a href="contact">Contact</a>
          </li>
          <li className="text-[#8EF2EC]">
            <a href="faq">FaQ</a>
          </li>
          <li className="text-[#8EF2EC]">
            <a href="help">Help</a>
          </li>
        </ul>
      </div> */}
      <div className="flex flex-col items-start lg:items-center">
        <div className="flex flex-col items-start lg:pt-8">
          <h2 className="font-bold text-xl py-4">Quick Links</h2>
          <ul className="flex flex-col items-start font-medium">
            <li className="text-[#8EF2EC] py-2">
              <a href="#">About Us</a>
            </li>
            <li className="text-[#8EF2EC] py-2">
              <a href="#">Services</a>
            </li>
            <li className="text-[#8EF2EC] py-2">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="flex flex-col items-start pt-8">
          <ButtonTwo />
        </div>
      </div>
      <div className="flex flex-row justify-center py-8 px-[5%] md:px-[10%]">
        <span className="text-md text-white font-bold">
          Made With 💗 By Team Lockit. All Right Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
