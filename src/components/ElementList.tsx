/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Element } from "../interfaces/Element";
import { elements } from "../elementList";
import Prop from "./Object";

import "./ElementList.css";
import Picture from "./Picture";

function PropList() {
    const [proplist, setProplist] = useState<Element[]>(elements);

    function myFunction(d: Element) {
        console.log(d.name);
    }

    function generateList(prop: Element[]) {
        return prop.map((prop) => (
            <div key={prop.name} className="propcontainer">
                <li>
                    {prop.name}{" "}
                    <Button onClick={() => myFunction(prop)}></Button>
                </li>
                <Prop element={prop} />
                <Picture id={prop.id} image={prop.image} />
            </div>
        ));
    }

    return (
        <div>
            {/* <Button onClick={() => resetlist()}>Reset List</Button> */}
            <strong>Element List</strong>
            <ul className="scroll-bar">{generateList(proplist)}</ul>
        </div>
    );
}

export default PropList;
