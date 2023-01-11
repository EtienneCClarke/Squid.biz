import useContract from "./useContract";
import kollab_share from "./contracts/Factory.json";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

export default function useKollabShare() {

    const { chainId } = useWeb3React();

    return useContract(
        chainId === 1 ? process.env.REACT_APP_CONTRACT_ADDRESS_ETHEREUM :
        chainId === 137 ? process.env.REACT_APP_CONTRACT_ADDRESS_POLYGON :
        chainId === 5 ? process.env.REACT_APP_CONTRACT_ADDRESS_GOERLI :
        chainId === 80001 ? process.env.REACT_APP_CONTRACT_ADDRESS_MUMBAI : '',
        kollab_share
    );

}