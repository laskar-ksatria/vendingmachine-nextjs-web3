"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import FormField from "@/components/form-field";
import CustomButton from "@/components/custom-button";
import UpdateProductCard from "@/components/update-product-card";
import { useStateContext } from "@/context/context";
import { toast } from "react-toastify";
import Image from "next/image";

export default function AddProductPage() {
  const { ownerAddProduct, getProducts, contract, getTotalBalance } =
    useStateContext();
  const [loadingPage, setLoadingPage] = useState(false);
  const [formData, setFormData] = useState({
    category: "0",
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const [category, setCategory] = useState("0");

  const [state, setState] = useState({
    pageLoading: true,
    products: [],
    ownerBalance: "Calling...",
    widthdrawLoading: false,
  });

  const handleFormFieldChange = async (
    name: string,
    e: { target: { value: any } }
  ) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmitProduct = async (e: { preventDefault: () => void }) => {};

  const handleGetProduct = async () => {};

  const handleChangeCategory = async (id: string) => {};

  const handleGetBalance = async () => {};

  const handleWidthdrawBalance = async () => {};

  useEffect(() => {
    if (contract) {
      handleGetBalance();
      handleGetProduct();
    }
  }, [contract]);

  return (
    <section className="flex flex-col rounded-[10px] sm:p-5 py-2">
      {loadingPage ? <Loader /> : null}

      <div className="w-full flex justify-center items-center mb-10">
        <div>
          <p className="text-center font-semibold text-base mb-3">
            Owner Balance
          </p>
          <p className="text-center font-semibold text-3xl">
            {state.ownerBalance} ETH
          </p>
          <div className="flex justify-center items-center mt-5">
            <button
              onClick={() => handleWidthdrawBalance()}
              className="bg-red-500 text-white uppercase hover:bg-red-700 px-3 py-2 font-semibold rounded-md"
            >
              {state.widthdrawLoading ? "Processing..." : "Widthdraw"}
            </button>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmitProduct}
        className="w-full bg-[#1c1c24] p-10 flex flex-col rounded-2xl gap-[30px]"
      >
        <h2 className="text-2xl">Add Product</h2>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Categories *"
            placeholder="Product Categories"
            inputType="select"
            value={formData.category}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("category", e)}
          />
          <FormField
            labelName="Product Name *"
            placeholder="Product Name"
            inputType="text"
            value={formData.name}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("name", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Description *"
            placeholder="Product Description"
            inputType="text"
            value={formData.description}
            disable={false}
            isTextArea={true}
            handleChange={(e: any) => handleFormFieldChange("description", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Price *"
            placeholder="0.5 ETH"
            inputType="text"
            value={formData.price}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("price", e)}
          />
          <FormField
            labelName="Product Stock *"
            placeholder="Product Stock"
            inputType="number"
            value={formData.stock}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("stock", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Image *"
            placeholder="https://sample.com/image.jpg"
            inputType="text"
            value={formData.image}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("image", e)}
          />
        </div>
        <div className="flex justify-center items-center mt-3">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="w-full"
            handleClick={() => {}}
          />
        </div>
      </form>

      <div className="w-full bg-[#1c1c24] mt-10 p-10 rounded-2xl">
        <h2 className="text-2xl">Update Price & Stock</h2>
        <div className="w-full flex justify-center">
          <select
            name="category"
            className="bg-[#13131a] w-[200px] outline-none p-2 font-semibold uppercase"
            id="category-update"
            value={category}
            onChange={(e: any) => handleChangeCategory(e.target.value)}
          >
            <option value="0">Foods</option>
            <option value="1">Drinks</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-8">
          {state.products?.map((item: any, i) => (
            <UpdateProductCard
              category={category}
              key={`${i}-update-price`}
              name={item.name}
              price={item.price}
              pid={item.pid}
              stock={item.stock}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
