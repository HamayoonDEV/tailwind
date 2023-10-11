import React from "react";

const Button = ({ lable, iconUrl }) => {
  return (
    <div className="w-15 h-6 bg-red-300 text-black flex flex-row justify-center px-3 border font-montserrat  cursor-pointer rounded-full hover:bg-red-500 ">
      {lable}
      {iconUrl}
    </div>
  );
};

export default Button;
