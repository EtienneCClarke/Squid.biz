import React from "react";
import { useWeb3React } from "@web3-react/core";


export default function NetworkSwitcher() {

    const { chainId, library } = useWeb3React();

    const changeNetwork = async (event) => {
        let hexString = '0x' + parseInt(event.target.value).toString(16);

        let chainData = {
            id: hexString,
            rpc: undefined,
            name: undefined,
            currency: {
                name: undefined,
                symbol: undefined,
            },
            explorers: undefined
        };

        if(chainId == 1) {
            chainData.rpc = ["https://eth.llamarpc.com"];
            chainData.name = "Ethereum Mainnet";
            chainData.currency.name = "ETH";
            chainData.currency.symbol = "ETH";
            chainData.explorers = ["https://etherscan.io"];
        }

        if(chainId == 5) {
            chainData.rpc = ["https://endpoints.omniatech.io/v1/eth/goerli/public"];
            chainData.name = "Goerli";
            chainData.currency.name = "ETH";
            chainData.currency.symbol = "ETH";
            chainData.explorers = ["https://goerli.etherscan.io"];
        }

        if(chainId == 137) {
            chainData.rpc = ["https://polygon-rpc.com"];
            chainData.name = "Polygon Mainnet";
            chainData.currency.name = "MATIC";
            chainData.currency.symbol = "MATIC";
            chainData.explorers = ["https://polygonscan.com"];
        }

        if(chainId == 80001) {
            chainData.rpc = ["https://endpoints.omniatech.io/v1/matic/mumbai/public"];
            chainData.name = "Mumbai";
            chainData.currency.name = "MATIC";
            chainData.currency.symbol = "MATIC";
            chainData.explorers = ["https://mumbai.polygonscan.com"];
        }

        try {
            await library.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexString }],
            });
            window.location.reload();
        } catch (e) {
            window.location.reload();
        }
    }

    return (
        <div className="networkSwitcher-container">
            <select
                id="network-switcher"
                onChange={changeNetwork}
            >
                <optgroup label="Mainnets">
                    <option value="1" selected={chainId == 1 ? 'selected' : ''}>Ethereum</option>
                    <option value="137" selected={chainId == 137 ? 'selected' : ''}>Polygon</option>
                </optgroup>
                <optgroup label="Testnets">
                    <option value="5" selected={chainId == 5 ? 'selected' : ''}>Goerli</option>
                    <option value="80001" selected={chainId == 80001 ? 'selected' : ''}>Mumbai</option>
                </optgroup>
            </select>
            <span></span>
        </div>
    )

}