import React from "react";
import { useWeb3React } from "@web3-react/core";


export default function NetworkSwitcher() {

    const { chainId, library } = useWeb3React();

    const changeNetwork = async (event) => {
        let hexString = '0x' + parseInt(event.target.value).toString(16);

        try {
            await library.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexString }],
            });
            window.location.reload();
        } catch (e) {
            alert("Could not make switch. Make sure target chain has been added to your wallet.");
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
                    {/* <option value="43114" selected={chainId == 43114 ? 'selected' : ''}>Avalanche</option> */}
                </optgroup>
                <optgroup label="Testnets">
                    <option value="5" selected={chainId == 5 ? 'selected' : ''}>Goerli</option>
                    <option value="80001" selected={chainId == 80001 ? 'selected' : ''}>Mumbai</option>
                    <option value="43113" selected={chainId == 43113 ? 'selected' : ''}>Fuji</option>
                </optgroup>
            </select>
            <span></span>
        </div>
    )

}