/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { compounds } from "../compoundList";

import "./HelpModal.css";

function HelpModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="HelpButton" onClick={handleShow}>
                Need Help?
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Need Help?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Possible compounds are: </h1>
                    <h2> (✅ = found)</h2>
                    {compounds.map((compound) => (
                        <div>
                            <div
                                key={compound.name}
                                className="elementcontainer"
                            >
                                <li>
                                    {compound.shown == true
                                        ? compound.name + "✅"
                                        : compound.name}
                                </li>
                            </div>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default HelpModal;
