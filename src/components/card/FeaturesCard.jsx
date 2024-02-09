const FeaturesCard = (props) => {
    return (
      <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
        <a href="#">
          <img
            className="h-72 md:h-[172px] w-full object-center rounded-lg"
            src={`http://localhost:3000/images/${props.icon}`}
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
  