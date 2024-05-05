"use client";
import { useState } from "react";
import Image from "next/image";

import { useStateContext } from "@/context/context";
import { toast } from "react-toastify";
import moment from "moment";

type ProductCardType = {
  name: string;
  price: string;
  buyDate: number;
  image: string;
};

export default function BagCard({
  name,
  price,
  buyDate,
  image,
}: ProductCardType) {
  return (
    <div className="sm:w-[288px] w-full rounded-t-[15px] bg-[#23232d] shadow-default mb-10">
      <img
        src={image}
        alt={`foods`}
        className="w-full h-[230px] object-cover rounded-t-[15px]"
      />
      <div className="flex flex-col px-4 py-3">
        <div className="block mt-1">
          <h3 className="font-epilogue font-semibold text-lg text-white text-left leading-[26px] truncate ">
            {name}
          </h3>
        </div>
        <div className="flex justify-between flex-wrap mt-3 gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue flex items-center font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              Price {price}
              <span className="ml-1">
                <Image src={"/img/eth.png"} width={12} height={12} alt="eth" />
              </span>
            </h4>
            <p className="mt-[3px] flex items-center font-epilogue font-normal text-[12px] leading-[18px] text-[#808191]">
              {moment.unix(buyDate).format("LL")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
