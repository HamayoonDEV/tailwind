import React from "react";
import Button from "./Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constant";
import ShoeCard from "./ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <div className="w-full gap-10 max-container border-2 border-red-500 p-2 flex xl:flex-row flex-col min-h-screen justify-center">
      <div className="relative xl:w-2/4 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm-max-w-sm">
          Discover stylish Nike Arrivals, quality comfort,and innovation for
          your active life.
        </p>
        <Button lable="shop now" iconUrl={<ArrowRightIcon />} />
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="show collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
      <div className="flex sm:gap-6 gap-4 absolute  sm:left-[10%] max-sm:px-6 ">
        {shoes.map((shoe) => (
          <div>
            <ShoeCard
              imgUrl={shoe}
              changeBigShoeImage={(shoe) => setBigShoe(shoe)}
              bigShoeImage={bigShoe}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
