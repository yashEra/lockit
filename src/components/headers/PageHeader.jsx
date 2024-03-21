import BG from "../../assets/images/hero-background.png";


const links = [
    { name: "Get Start", href: "login" },
    { name: "FAQ", href: "faq" },
    { name: "help", href: "help" },
  ];
  
  const PageHeader = (title) => {
    return (
      <div className="">
        <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-black">
          <img
            src={BG}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-[1140px] px-6 lg:px-8 flex justify-center items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
                {title.heading}
              </h2>
              {/* <p className="mt-6 text-lg leading-8 text-gray-300">{title.des}</p> */}
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PageHeader;