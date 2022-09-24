import React from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import "../css/style.css";

export default function SplitterModal({ isOpen, closeModal, data}) {

    return(
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            size={"xl"}
            isCentered
        >
            <ModalOverlay
                bg='blackAlpha.50'
                backdropFilter='blur(2px)'
            />
            <ModalContent>
                <ModalBody className="modal">
                    <div className="balance-container">
                        <h2>
                            {data.personal_balance}
                        </h2>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

}