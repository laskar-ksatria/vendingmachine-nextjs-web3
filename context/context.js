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

  const ownerAddProduct = async (formData) => {};

  const ownerUpdateStock = async ({ pid, newStock, category }) => {};

  const ownerUpdatePrice = async ({ pid, newPrice, category }) => {};

  const ownerWidthdraw = async () => {};

  const customerBuyProduct = async ({ category, pid, price }) => {};

  const getProducts = async (id) => {};

  const getCustomerBags = async () => {};

  const getTransactions = async () => {};

  const getTotalBalance = async () => {
    try {
      const balance = await contract.call("ownerBalance");
      console.log(balance);
    } catch (error) {}
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
        getTotalBalance,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
