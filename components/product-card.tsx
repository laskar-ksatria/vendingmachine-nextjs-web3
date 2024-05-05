"use client";
import { useState } from "react";
import Image from "next/image";

import { useStateContext } from "@/context/context";
import { toast } from "react-toastify";

type ProductCardType = {
  pid: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
  category: string;
  isBag?: boolean;
};

export default function ProductCard({
  pid,
  name,
  description,
  price,
  stock,
  image,
  category,
  isBag,
}: ProductCardType) {
  const { customerBuyProduct } = useStateContext();

  const [loading, setLoading] = useState(false);

  const handleBuyProduct = async () => {
    setLoading(true);
    const { errors } = await customerBuyProduct({ category, pid, price });
    setLoading(false);
    if (errors) return toast.error("Oops, Something wrong");
    toast.success(`${name} already buy`);
  };

  return (
    <div className="sm:w-[288px] w-full rounded-t-[15px] bg-[#23232d] shadow-default mb-10">
      <img
        src={image}
        alt={`foods`}
        className="w-full h-[230px] object-cover rounded-t-[15px]"
      />
      <div className="flex flex-col px-4 py-3">
        <div className="flex flex-row items-center mb-1">
          <p className="mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            {category == "0" ? "Foods" : "Drinks"}
          </p>
        </div>
        <div className="block mt-1">
          <h3 className="font-epilogue font-semibold text-lg text-white text-left leading-[26px] truncate ">
            {name}
          </h3>
          <p className="mt-1 font-epilogue font-normal text-sm line-clamp-2 text-[#808191] text-left leading-[18px]">
            {description}
          </p>
        </div>
        <div className="flex justify-between flex-wrap mt-3 gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue flex items-center font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              Price {price}
              <span className="ml-1">
                <Image src={"/img/eth.png"} width={12} height={12} alt="eth" />
              </span>
            </h4>
            <p className="mt-[3px] flex items-center font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
              Stock {stock}
            </p>
          </div>
        </div>
        <div className="mt-5 mb-2">
          <button
            onClick={() => handleBuyProduct()}
            className="w-full bg-green-600 py-[10px] uppercase hover:bg-green-700 cursor-pointer rounded-md text-white"
          >
            {loading ? "Processing..." : "BUY"}
          </button>
        </div>
      </div>
    </div>
  );
}
