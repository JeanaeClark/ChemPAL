import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Element } from "../interfaces/Element";

import "./Modal.css";

function Moddal({ element }: { element: Element }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="InfoButton" onClick={handleShow}></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Let{"'"}s Learn about {element.name}!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="column">
                            <img className="info-box" src={element.image} />
                        </div>
                        <div className="column">
                            <h1> {element.name} </h1>
                            <div>
                                <strong>Chemical Formula: </strong>
                                {element.chemAbr}
                            </div>
                            <div>
                                <strong>Fun Fact: </strong>
                                {element.fact}
                            </div>
                            <div>
                                <strong>
                                    Common {element.name} compounds are:
                                </strong>
                            </div>
                            <div> 1. {element.compounds[0]}</div>
                            <div> 2. {element.compounds[1]}</div>
                            <div> 3. {element.compounds[2]}</div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Moddal;
