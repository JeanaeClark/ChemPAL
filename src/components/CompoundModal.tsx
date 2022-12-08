import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Compound } from "../interfaces/Compound";

import "./Modal.css";

function CompoundModal({ compound }: { compound: Compound }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="InfoButton" onClick={handleShow}></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Let{"'"}s Learn about {compound.name}!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="column">
                            <img className="info-box" src={compound.image} />
                        </div>
                        <div className="column">
                            <h1> {compound.name} </h1>
                            <div>
                                <strong>Chemical Formula: </strong>
                                {compound.chemAbr}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default CompoundModal;
