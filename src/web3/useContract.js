import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";

const useContract = (address = undefined, ABI) => {

    const { library } = useWeb3React();

    return useMemo(() => {
        if(!address || !ABI || !library) return null;
        try {
            const signer = library.getSigner();
            const contractInstance = new ethers.Contract(address, ABI, signer);
            return contractInstance;
        } catch (error) {
            console.error("Failed to get contract", error);
            return null;
        }
    }, [library]);
};

export default useContract;