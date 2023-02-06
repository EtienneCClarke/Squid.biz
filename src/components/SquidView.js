import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import DetailsIcon from "../assets/icons/more-details.png";
import SplitterModal from "./SplitterModal";
import "../css/table.css";

export default function SquidView({data, isCreator}) {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    return(
        <div>
            <img
                className="more-details-button"
                src={DetailsIcon}
                onClick={onOpen}
            />
            <SplitterModal isOpen={isOpen} closeModal={onClose} data={data} isCreator={isCreator}/>
        </div>
    )

}