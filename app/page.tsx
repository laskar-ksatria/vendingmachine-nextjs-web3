"use client";

import { useState } from "react";
import { useStateContext } from "@/context/context";
import DisplayProducts from "@/components/display-products";
import Loader from "@/components/loader";

export default function HomePage() {
  const { contract } = useStateContext();

  const [state, setState] = useState({
    pageLoading: true,
  });

  return (
    <section className="py-10">
      {/* <Loader title="Call Data" subtitle="" /> */}
      <div className="flex justify-center">
        <select
          name="vending"
          className="bg-[#13131a] w-[200px] outline-none p-2 font-semibold uppercase"
          id="vending"
          defaultValue="0"
        >
          <option value="0">Foods</option>
          <option value="1">Drinks</option>
        </select>
      </div>
      <hr className=" my-14 border-[1.2px] border-gray-700" />
      <div>
        <DisplayProducts />
      </div>
    </section>
  );
}
