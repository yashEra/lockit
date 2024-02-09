import React from "react";

const FeaturesCard = (props) => {
    return (
      <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
        <a href="#" className="flex flex-col items-center">
          <img
            className="h-[172px] w-[172px] object-center rounded-lg pt-4"
            src={props.icon}
            alt="Product Image"
          />
  
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium text-gray-900">
              {props.title}
            </h2>
            <p className="mb-2 text-base text-gray-700 text-justify">
            {props.description}
            </p>
          </div>
        </a>
      </div>
    );
  };
  
  export default FeaturesCard;
  