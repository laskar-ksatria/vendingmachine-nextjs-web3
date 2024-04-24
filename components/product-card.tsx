"use client";

import Image from "next/image";

const sampleImage =
  "https://www.thespruceeats.com/thmb/X_JGM04VusvkuGqTVan4QmBRqjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg";

export default function ProductCard() {
  return (
    <div className="sm:w-[288px] w-full rounded-t-[20px] bg-[#23232d] shadow-default mb-10">
      <img
        src={sampleImage}
        alt={`foods`}
        className="w-full h-[230px] object-cover rounded-t-[20px]"
      />
      <div className="flex flex-col px-4 py-3">
        <div className="flex flex-row items-center mb-1">
          <p className="mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            Foods
          </p>
        </div>
        <div className="block mt-1">
          <h3 className="font-epilogue font-semibold text-lg text-white text-left leading-[26px] truncate ">
            French Fries
          </h3>
          <p className="mt-1 font-epilogue font-normal text-sm line-clamp-2 text-[#808191] text-left leading-[18px]">
            Side dish or snack typically made from deep-fried potatoes that have
            been cut into various shapes, especially thin strips.
          </p>
        </div>
        <div className="flex justify-between flex-wrap mt-3 gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue flex items-center font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              Price 0.0015
              <span className="ml-1">
                <Image src={"/img/eth.png"} width={12} height={12} alt="eth" />
              </span>
            </h4>
            <p className="mt-[3px] flex items-center font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
              Stock 20
            </p>
          </div>
        </div>
        <div className="mt-5 mb-2">
          <button className="w-full bg-green-600 py-[10px] uppercase hover:bg-green-700 cursor-pointer rounded-md text-white">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}
