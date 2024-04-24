import ProductCard from "@/components/product-card";

export default function CustomerBagPage() {
  return (
    <section className="">
      <h2 className="text-2xl">Customer Bag</h2>
      <div className="mt-10 grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
