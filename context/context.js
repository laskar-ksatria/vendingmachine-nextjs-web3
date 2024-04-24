import { useContext, createContext } from "react";
import { ethers } from "ethers";
import { useContract, useAddress, useContractWrite } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(`${process.env.CONTRACT_ADDRESS}`);
  const address = useAddress();

  // Mutate
  const { mutateAsync: addProduct } = useContractWrite(contract, "addProduct");
  const { mutateAsync: buyProduct } = useContractWrite(contract, "buyProduct");
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

  const ownerAddProduct = async () => {};

  const ownerUpdateStock = async () => {};

  const ownerUpdatePrice = async () => {};

  const ownerWidthdraw = async () => {};

  const customerBuyProduct = async () => {};

  const getProducts = async () => {};

  const getCustomerBags = async () => {};

  const getTransactions = async () => {};

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
