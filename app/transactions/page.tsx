import Image from "next/image";

export default function TransactionsPage() {
  return (
    <section className="bg-[#1c1c24] w-full h-full rounded-2xl p-10">
      <table className="w-full text-left p-5">
        <tr className=" border-b-2 border-grey-700 py-5">
          <th>CUSTOMER</th>
          <th>PRODUCT NAME</th>
          <th>PRICE</th>
        </tr>
        <tr className=" h-16 text-slate-500">
          <td>0x000....</td>
          <td>French Fries</td>
          <td>0.002 ETH</td>
        </tr>
      </table>
    </section>
  );
}
