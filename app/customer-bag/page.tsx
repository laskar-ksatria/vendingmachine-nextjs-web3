"use client";

import BagCard from "@/components/bag-card";
import { useStateContext } from "@/context/context";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function CustomerBagPage() {
  const { getCustomerBags, contract } = useStateContext();

  const [state, setState] = useState({
    products: [],
    pageLoading: true,
  });

  const handleGetProducts = async () => {
    const products = await getCustomerBags();
    setState((prev) => ({ ...prev, pageLoading: false, products }));
  };

  useEffect(() => {
    if (contract) {
      handleGetProducts();
    }
  }, [contract]);

  return (
    <section className="">
      {state.pageLoading ? <Loader title="Calling data" /> : null}
      <h2 className="text-2xl">Customer Bag</h2>
      <div className="mt-10 grid grid-cols-4">
        {state.products?.map((product: any, i) => (
          <BagCard
            key={`${i}-bag-customer`}
            name={product.name}
            buyDate={product.buyDate}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
