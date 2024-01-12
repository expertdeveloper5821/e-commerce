import { useState } from 'react';

const HomeCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-1 border relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[20rem] w-[15rem] relative">
        <img
          className={`object-cover object-top w-full h-full transition duration-300 ease-in-out ${
            isHovered ?  'opacity-75' : 'opacity-100'
          }`}
          src={product.thumbnail}
          alt="kurta"
        />
        <button
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } bg-white text-black py-2 px-4 rounded-md hover:bg-gray-400`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
