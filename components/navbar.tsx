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
      <div>
        <Link
          href="/"
          className="text-xl cursor-pointer font-semibold uppercase text-white"
        >
          Web3 Vending Machine
        </Link>
      </div>
    </div>
  );
}
