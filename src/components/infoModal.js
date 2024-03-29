import React from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";

import "../css/style.css";
import InfoIcon from "../assets/icons/info.png";

export default function InfoModal ({ isOpen, closeModal, Title, Content }) {

    return(
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            size={'sm'}
            isCentered
        >
            <ModalOverlay
                bg='blackAlpha.50'
                backdropFilter='blur(2px)'
            />
            <ModalContent>
                <ModalBody className="modal">
                    <div className="modal-header">
                        <p className="modal-title flex flex-row flex-align-center flex-start">
                            <span className="modal-header-icon">
                                <img src={InfoIcon} alt="info"/>
                            </span>
                            {Title}
                        </p>
                        <ModalCloseButton size={"sm"}/>
                    </div>
                    <div className="modal-body">
                        <div className="modal-content scrollable-y">
                            {Content}
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>

        </Modal>
    )

}