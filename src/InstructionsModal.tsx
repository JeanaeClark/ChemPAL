/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function InstructionsModal() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to ChemPAL</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>What is ChemPAL?</h3>
                    <p>
                        ChemPAL is a tool designed for middle school/highschool
                        Chemistry teachers to teach students about creating
                        compounds
                    </p>
                    <h3> How do you play?</h3>
                    <p>
                        On the left hand side of the screen, you will see a list
                        of elements. Drag each element into the center that you
                        would like to combine. To combine, place the first
                        element on top of the second. To delete an element, drag
                        it to the green trashcan. Keep in mind:
                        <ul>
                            <li>
                                You can only make specifc compounds. Use the
                                {" '"}Need Help{"' "} Button for checklist
                            </li>
                            <li>
                                For simplicity sake, we only included some
                                covalent bonds that only require one of each
                                element (i.e. NaCl, not H2O)
                            </li>
                        </ul>
                    </p>
                    <h5>
                        Made by: Jeanae Clark, Nafisa Maryam, and Sara
                        Heintzelman for CISC275: Introduction to Software
                        Engineering
                    </h5>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default InstructionsModal;
