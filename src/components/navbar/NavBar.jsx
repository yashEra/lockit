import recat,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[80px] font-bold">
      <div className="max-w-[1140px] 2xl:max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <img src="http://localhost:3000/images/logo.svg" alt="logo" />
        </div>
        <div>
          <div className="hidden md:flex">
            <ul className="flex text-[#555555] items-center">
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="block md:hidden">
            {nav ? <AiOutlineClose onClick={handleNav} size={30} className="text-[#f9ffff]" /> :  <AiOutlineMenu onClick={handleNav} size={30} className="text-[#f9ffff]" /> }
          </div>
          <div className={nav ? "w-full bg-[#00A5AF] text-[#f9ffff] absolute top-[79px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
            <ul>
              <li className="text-2xl">Services</li>
              <li className="text-2xl">About Us</li>
              <li className="text-2xl">Contact Us</li>
              <button className="m-8">Get Start</button>
            </ul>
          </div>
        </div>
        <div>
          <button className="ml-4 text-white">Get Start</button>
          </div>
      </div>
    </div>
  );
};

export default NavBar;
