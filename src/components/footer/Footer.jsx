const Footer = () => {
  return (
    <div className="bg-[#00A5AF]">
    <div
      className=" text-white w-full py-[60px] grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left px-[5%] md:px-[10%]"
    >
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Get In Touch</h2>
        <span className="text-left text-[#8EC2F2] font-medium">
          Some text goes here | BidWiz 2.0 New Version
        </span>
        <div className="flex flex-row items-start pt-4">
          
        </div>
      </div>
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Company info</h2>
        <ul className="flex flex-col items-start font-medium">
          <li className="text-[#8EC2F2]">
            <a href="about">About</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="contact">Contact</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="faq">FaQ</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="help">Help</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Categories</h2>
        <ul className="flex flex-col items-start font-medium">
          <li className="text-[#8EC2F2]">
            <a href="#">Desktop and Mobile Accessories</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Computers</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Cameras</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Mobile Phones</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">BidWIz Group</h2>
        <ul className="flex flex-col items-start font-medium">
          <li className="text-[#8EC2F2]">
            <a href="#">BidWiz is an online auction website that provides a platform for users to bid on a wide range of products and items.</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-row justify-center py-8 px-[5%] md:px-[10%]"><span className="text-md text-white font-bold">Made With 💗 By BidWiz Team. All Right Reserved.</span></div>
    </div>
  );
};

export default Footer;
