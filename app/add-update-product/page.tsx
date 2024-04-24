"use client";

import Loader from "@/components/loader";
import FormField from "@/components/form-field";
import CustomButton from "@/components/custom-button";
import UpdateProductCard from "@/components/update-product-card";

export default function AddProductPage() {
  const handleFormFieldChange = async (
    name: string,
    e: { target: { value: any } }
  ) => {};

  return (
    <section className="flex flex-col rounded-[10px] sm:p-5 py-2">
      {/* INPUT PRODUCT FORM ********* */}
      <form className="w-full bg-[#1c1c24] p-10 flex flex-col rounded-2xl gap-[30px]">
        <h2 className="text-2xl">Add Product</h2>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Categories *"
            placeholder="Product Categories"
            inputType="select"
            value={""}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("title", e)}
          />
          <FormField
            labelName="Product Name *"
            placeholder="Product Name"
            inputType="text"
            value={""}
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
            value={""}
            disable={false}
            isTextArea={true}
            handleChange={(e: any) => handleFormFieldChange("name", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Price *"
            placeholder="0.5 ETH"
            inputType="text"
            value={""}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Product Stock *"
            placeholder="Product Stock"
            inputType="number"
            value={""}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("name", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Product Image *"
            placeholder="https://sample.com/image.jpg"
            inputType="text"
            value={""}
            disable={false}
            isTextArea={false}
            handleChange={(e: any) => handleFormFieldChange("name", e)}
          />
        </div>
        <div className="flex justify-center items-center mt-3">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071] w-full bg-[#1dc079]"
            handleClick={() => {}}
          />
        </div>
      </form>

      <div className="w-full bg-[#1c1c24] mt-10 p-10 rounded-2xl">
        <h2 className="text-2xl">Update Price & Stock</h2>
        <div className="w-full flex justify-center">
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
        <div className="grid grid-cols-4 gap-5 mt-8">
          <UpdateProductCard />
        </div>
      </div>
    </section>
  );
}
