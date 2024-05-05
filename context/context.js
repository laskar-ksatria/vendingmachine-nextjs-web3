import { useContext, createContext } from "react";
import { ethers } from "ethers";
import {
  useContract,
  useAddress,
  useContractWrite,
  useReadContract,
} from "@thirdweb-dev/react";
import { resolveMethod, readContract } from "thirdweb";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(`${process.env.CONTRACT_ADDRESS}`);
  const address = useAddress();

  // Mutate
  const { mutateAsync: addProduct } = useContractWrite(contract, "addProduct");
  const { mutateAsync: updatePrice } = useContractWrite(
    contract,
    "updatePrice"
  );
  const { mutateAsync: updateStock } = useContractWrite(
    contract,
    "updateStock"
  );
  const { mutateAsync: widthdrawBalance } = useContractWrite(
    contract,
    "widthdrawBalance"
  );

  const ownerAddProduct = async (formData) => {
    try {
      const args = [
        formData.category,
        formData.name,
        formData.description,
        ethers.utils.parseEther(formData.price.toString()),
        formData.stock,
        formData.image,
      ];
      const data = await addProduct({
        args,
      });
      if (data) return { data: true };
      return { data: true, errors: false };
    } catch (error) {
      console.log(error);
      return { errors: error };
    }
  };

  const ownerUpdateStock = async ({ pid, newStock, category }) => {
    try {
      const args = [category, pid, Number(newStock)];
      const data = await updateStock({ args });
      if (data) return { data: data };
    } catch (error) {
      return { errors: error };
    }
  };

  const ownerUpdatePrice = async ({ pid, newPrice, category }) => {
    try {
      const args = [
        category,
        pid,
        ethers.utils.parseEther(newPrice.toString()),
      ];
      const data = await updatePrice({ args });
      console.log(data);
      return { data: data };
    } catch (error) {
      return { errors: error };
    }
  };

  const ownerWidthdraw = async () => {};

  const customerBuyProduct = async ({ category, pid, price }) => {
    try {
      const data = await contract.call(
        "buyProduct",
        [`${category}`, `${pid}`],
        {
          value: ethers.utils.parseEther(price),
        }
      );
      console.log(data);
      return { data };
    } catch (error) {
      console.log(error);
      return { errors: error };
    }
  };

  const getProducts = async (id) => {
    try {
      const products = await contract.call("getProducts", [id]);
      const parsedProducts = products.map((product, i) => ({
        name: product.name,
        description: product.description,
        price: ethers.utils.formatEther(product.price.toString()),
        stock: ethers.BigNumber.from(product.stock).toNumber(),
        image: product.image,
        pid: i,
      }));
      return { data: parsedProducts };
    } catch (error) {
      return { errors: error };
    }
  };

  const getCustomerBags = async () => {
    const products = await contract.call("getCustomerBag", [address]);
    const parsedProducts = products.map((product, i) => ({
      name: product.productName,
      price: ethers.utils.formatEther(product.price.toString()),
      buyDate: ethers.BigNumber.from(product.buyDate).toNumber(),
      image: product.image,
    }));
    return parsedProducts;
  };

  const getTransactions = async () => {
    try {
      const transactions = await contract.call("getTransactions");
      console.log(transactions);
      const parseTransactions = transactions.map((transac, i) => ({
        address: transac.buyer,
        productName: transac.productName,
        price: ethers.utils.formatEther(transac.price.toString()),
      }));
      console.log(parseTransactions);
      return { data: parseTransactions };
    } catch (error) {
      console.log(error);
      return { errors: error };
    }
  };

  return (
    <StateContext.Provider
      value={{
        contract,
        address,
        ownerAddProduct,
        ownerUpdatePrice,
        ownerUpdateStock,
        ownerWidthdraw,
        customerBuyProduct,
        getProducts,
        getCustomerBags,
        getTransactions,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

/**
 [
  {
    uint16 roomNo;
    bool isRent;
  }
 ]
 
 */
