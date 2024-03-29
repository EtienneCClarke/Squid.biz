import useContract from "./useContract";
import factory from "./contracts/Factory.json";
import { useWeb3React } from "@web3-react/core";

export default function useSquid() {

    const { chainId } = useWeb3React();

    return useContract(
        chainId === 1 ? process.env.REACT_APP_CONTRACT_ADDRESS_ETHEREUM :
        chainId === 137 ? process.env.REACT_APP_CONTRACT_ADDRESS_POLYGON :
        chainId === 5 ? process.env.REACT_APP_CONTRACT_ADDRESS_GOERLI :
        chainId === 80001 ? process.env.REACT_APP_CONTRACT_ADDRESS_MUMBAI : 
        chainId === 43114 ? process.env.REACT_APP_CONTRACT_ADDRESS_AVALANCHE :
        chainId === 43113 ? process.env.REACT_APP_CONTRACT_ADDRESS_FUJI :
        '',
        factory
    );

}