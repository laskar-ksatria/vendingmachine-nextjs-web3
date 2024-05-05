"use client";

import { useState, useEffect } from "react";
import { useStateContext } from "@/context/context";
import Loader from "@/components/loader";
import ProductCard from "@/components/product-card";

export default function HomePage() {
  const { contract, getProducts } = useStateContext();

  const [category, setCategory] = useState("0");

  const [state, setState] = useState({
    pageLoading: true,
    products: [],
  });

  const handleGetProduct = async () => {
    setState((prev) => ({ ...prev, pageLoading: true }));
    const { data } = await getProducts(category);
    if (data) setState((prev) => ({ ...prev, products: data }));
    setState((prev) => ({ ...prev, pageLoading: false }));
  };

  const handleChangeCategory = async (id: string) => {
    setState((prev) => ({ ...prev, pageLoading: true }));
    const { data } = await getProducts(id);
    if (data) setState((prev) => ({ ...prev, products: data }));
    setCategory(id);
    setState((prev) => ({ ...prev, pageLoading: false }));
  };

  useEffect(() => {
    if (contract) {
      handleGetProduct();
    }
  }, [contract]);

  return (
    <section className="py-10">
      {state.pageLoading ? <Loader title="Call Data" subtitle="" /> : null}
      <div className="flex justify-center">
        <select
          name="vending"
          className="bg-[#13131a] w-[200px] outline-none p-2 font-semibold uppercase"
          id="vending"
          value={category}
          onChange={(e) => handleChangeCategory(e.target.value)}
        >
          <option value="0">Foods</option>
          <option value="1">Drinks</option>
        </select>
      </div>
      <hr className=" my-14 border-[1.2px] border-gray-700" />
      <div className="grid grid-cols-4">
        {state.products.map((item: any) => (
          <ProductCard
            name={item.name}
            price={item.price}
            pid={item.pid}
            stock={item.stock}
            description={item.description}
            image={item.image}
            category={category}
            key={`${item.pid}-products`}
          />
        ))}
      </div>
    </section>
  );
}
