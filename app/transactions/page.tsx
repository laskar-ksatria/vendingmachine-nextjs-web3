"use client";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { useStateContext } from "@/context/context";
import Loader from "@/components/loader";

export default function TransactionsPage() {
  const { getTransactions, contract } = useStateContext();

  const [state, setState] = useState({
    transactions: [],
    pageLoading: true,
  });

  const handleGetTransactions = async () => {};

  useEffect(() => {
    if (contract) {
      handleGetTransactions();
    }
  }, [contract]);

  return (
    <section className="bg-[#1c1c24] w-full h-full rounded-2xl p-10">
      {state.pageLoading ? (
        <Loader title="Calling data..." subtitle="" />
      ) : null}
      <table className="w-full text-left p-5">
        <tr className=" border-b-2 border-grey-700 py-5 w-full">
          <th>ADDRESS</th>
          <th>PRODUCT NAME</th>
          <th>PRICE</th>
        </tr>
        {state.transactions?.map((item: any, i) => (
          <tr className=" h-16 text-slate-500" key={`${i}-transactions`}>
            <td>{item.address}</td>
            <td>{item.productName}</td>
            <td>{item.price} ETH</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
