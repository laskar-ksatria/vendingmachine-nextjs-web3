"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { useStateContext } from "@/context/context";

export default function Navbar() {
  const { address } = useStateContext();
  return (
    <div className="w-full py-5 flex flex-row-reverse sticky justify-between items-center">
      <div className="flex-row justify-end hidden gap-4 sm:flex items-center">
        <ConnectWallet
          modalSize="wide"
          btnTitle="Connect"
          className="connect"
        />
        {address ? (
          <Link
            href={
              address === process.env.OWNER_ADDRESS
                ? "/add-update-product"
                : "/customer-bag"
            }
            className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer"
          >
            <img
              src="https://pbs.twimg.com/media/F2YGo49aQAAa7hW.jpg"
              alt="user"
              className="w-[52px] h-[52px] object-contain rounded-full"
            />
          </Link>
        ) : null}
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-sm cursor-pointer hover:text-gray-500 uppercase font-semibold text-white"
        >
          Home
        </Link>
        {address === process.env.OWNER_ADDRESS ? (
          <Link
            href="/add-update-product"
            className="text-sm cursor-pointer uppercase hover:text-gray-500 font-semibold text-white"
          >
            Add Product
          </Link>
        ) : (
          <Link
            href="/customer-bag"
            className="text-sm cursor-pointer uppercase hover:text-gray-500 font-semibold text-white"
          >
            Customer Bag
          </Link>
        )}
        <Link
          href="/transactions"
          className="text-sm uppercase cursor-pointer hover:text-gray-500 font-semibold text-white"
        >
          Transactions
        </Link>
      </div>
    </div>
  );
}
