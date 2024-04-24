"use client";
import { useState } from "react";
import Image from "next/image";
import PureModal from "react-pure-modal";

const sampleImage =
  "https://www.thespruceeats.com/thmb/X_JGM04VusvkuGqTVan4QmBRqjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg";

export default function UpdateProductCard() {
  const [priceValue, setPriceValue] = useState("0");
  const [stockValue, setStockValue] = useState("0");
  const [showStockModal, setShowStockModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const handleUpdatePrice = async () => {};

  const handleUpdateStock = async () => {};

  return (
    <div className="sm:w-[288px] w-full rounded-t-[20px] bg-[#23232d] cursor-pointer shadow-default mb-10">
      {/* UPDATE PRICE MODAL ********************************* */}
      <PureModal
        width="500px"
        footer={
          <div>
            <button className="mr-5" onClick={() => setShowPriceModal(false)}>
              Cancel
            </button>
            <button type="button" onClick={() => handleUpdatePrice()}>
              Save
            </button>
          </div>
        }
        draggable={true}
        className="text-black"
        isOpen={showPriceModal}
        onClose={() => {
          setShowPriceModal(false);
          return true;
        }}
      >
        <div className=" text-black">
          UPDATE PRICE
          <div className="w-full h-full py-10">
            <label htmlFor="stock">Price</label>
            <input
              id="price"
              type="number"
              value={priceValue}
              placeholder={`0.002`}
              className="w-full border border-gray-700"
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </div>
        </div>
      </PureModal>
      {/* UPDATE PRICE MODAL ********************************* */}

      {/* UPDATE STOCK MODAL ********************************* */}
      <PureModal
        width="500px"
        footer={
          <div>
            <button className="mr-5" onClick={() => setShowStockModal(false)}>
              Cancel
            </button>
            <button>Save</button>
          </div>
        }
        draggable={true}
        className="text-black"
        isOpen={showStockModal}
        onClose={() => {
          setShowStockModal(false);
          return true;
        }}
      >
        <div className="">
          UPDATE STOCK
          <div className="w-full h-full py-10">
            <input
              type="number"
              value={stockValue}
              className="w-full border border-gray-700"
              onChange={(e) => setStockValue(e.target.value)}
            />
          </div>
        </div>
      </PureModal>
      {/* UPDATE STOCK MODAL ********************************* */}

      <img
        src={sampleImage}
        alt={`foods`}
        className="w-full h-[230px] object-cover rounded-t-[20px]"
      />
      <div className="flex flex-col px-4 py-3">
        <div className="block mt-1">
          <h3 className="font-epilogue font-semibold text-lg text-white text-left leading-[26px] truncate ">
            French Fries
          </h3>
          <p className="mt-1 font-epilogue font-normal text-sm truncate text-[#808191] text-left leading-[18px]">
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
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button
            onClick={() => setShowPriceModal(true)}
            className="w-full bg-blue-600 text-[0.75rem] py-[5px] uppercase hover:bg-blue-700 cursor-pointer rounded-md text-white"
          >
            UPDATE PRICE
          </button>
          <button
            onClick={() => setShowStockModal(true)}
            className="w-full bg-yellow-600 text-[0.75rem] py-[5px] uppercase hover:bg-yellow-700 cursor-pointer rounded-md text-white"
          >
            UPDATE STOCK
          </button>
        </div>
      </div>
    </div>
  );
}
