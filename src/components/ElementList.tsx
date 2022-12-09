/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Element } from "../interfaces/Element";
import { elements } from "../elementList";
import ElementObject from "./ElementObject";
import { compounds } from "../compoundList";

import "./ElementList.css";
import Modal from "./Modal";
import CompoundModal from "./CompoundModal";
import HelpModal from "./HelpModal";
import Container from "./Container";
import { Button, Form } from "react-bootstrap";
import Trashbin from "./Trashbin";
import { XYCoord } from "react-dnd";
import { Compound } from "../interfaces/Compound";
import CompoundObject from "./CompoundObject";
import CompoundObjectSidebar from "./CompoundObjectSidebar";

const AlphabeticalAtZFuncAtZ = "1";
const AlphabeticalAtZFuncZtA = "4";
const ByAtomicNumFunc = "2";
const ResetFunc = "3";
const picHeight = 100;
const picWidth = 100;

export const CardContext = createContext({
    putInWorkSpace: (id: number, monitor: any) => {},
    removeElementFromScreen: (id: number) => {},
    removeCompoundFromScreen: (id: number) => {}
});

function ElementList() {
    const [inWorkSpace, addtoWorkSpace] = useState<Element[]>([]);
    const [elementlist, setElementlist] = useState<Element[]>(elements);
    const [numRep, setFunction] = useState<string>();
    const [search, changeSearch] = useState<string>("");
    const [foundCompounds, setfoundCompounds] = useState<Compound[]>([]);
    const [sidebarCompounds] = useState<Compound[]>(compounds);

    function updateFunction(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log(event.target.value);
        setFunction(event.target.value);
        if (event.target.value == AlphabeticalAtZFuncAtZ) {
            AlphabeticalAtZ();
        } else if (event.target.value == ByAtomicNumFunc) {
            ByAtomicNum();
        } else if (event.target.value == ResetFunc) {
            Reset();
        } else if (event.target.value == AlphabeticalAtZFuncZtA) {
            AlphabeticalAtZZtA();
        }
    }

    function Filter() {
        const foundElement = elements.filter((e) => e.name == search);
        if (search == "") {
            setElementlist(elements);
        } else {
            setElementlist(foundElement);
        }
    }

    function AlphabeticalAtZ() {
        const x = elementlist.map((element: Element): Element => element);
        setElementlist(x.sort((a, b) => a.name.localeCompare(b.name)));
    }

    function AlphabeticalAtZZtA() {
        const x = elementlist.map((element: Element): Element => element);
        setElementlist(
            x.sort((a, b) => a.name.localeCompare(b.name)).reverse()
        );
    }

    function ByAtomicNum() {
        const x = elementlist.map((element: Element): Element => element);
        setElementlist(x.sort((a, b) => a.atomicNum - b.atomicNum));
    }

    function Reset() {
        setElementlist(elements);
    }

    function generateList(elements: Element[]) {
        return elements.map((element) => (
            <div>
                <div key={element.name} className="elementcontainer">
                    <ElementObject element={element} />
                    <li>
                        {element.name + "             "}
                        <Modal element={element}></Modal>
                    </li>
                </div>
            </div>
        ));
    }

    function generatecompoundList(compounds: Compound[]) {
        const shownCompounds = compounds.filter((e) => e.shown == true);
        return shownCompounds.map((compound) => (
            <div>
                <div key={compound.name} className="elementcontainer">
                    <CompoundObjectSidebar compound={compound} />
                    <li>
                        {compound.name}
                        <CompoundModal compound={compound}></CompoundModal>
                    </li>
                </div>
            </div>
        ));
    }

    function addCompoundtoWorkspace(compound: Compound, p: Element) {
        compound.left = p.left;
        compound.top = p.top;
        compound.shown = true;
        setfoundCompounds(foundCompounds.concat(compound));
    }

    function combineElements(element: Element) {
        const draggedElement = inWorkSpace
            .filter((e) => e.id != element.id)
            .filter(
                (e) =>
                    element.top < e.top + picHeight &&
                    element.top + picHeight > e.top &&
                    element.left < e.left + picWidth &&
                    element.left + picWidth > e.left
            )[0];
        const p = { ...draggedElement };
        if (element.neededforCompound != undefined) {
            if (element.neededforCompound[p.name]) {
                const x = element.neededforCompound[p.name];
                const foundCompound = compounds.filter(
                    (e: Compound) => e.name === x
                )[0];
                removeElementFromScreen(p.id, element.id);
                addCompoundtoWorkspace(foundCompound, p);
            }
        }
    }

    function moveElement(id: number, left: number, top: number) {
        const draggedElement = inWorkSpace.filter((e) => e.id === id)[0];
        if (draggedElement == undefined) {
            const draggedCompound = foundCompounds.filter(
                (e) => e.id === id
            )[0];
            draggedCompound.left = left;
            draggedCompound.top = top;
        } else {
            draggedElement.left = left;
            draggedElement.top = top;
            combineElements(draggedElement);
        }
    }

    function isElement(obj: Element | Compound): boolean {
        if (obj.id > 50) {
            return false;
        } else {
            return true;
        }
    }

    function putInWorkSpace(id: number, monitor: any) {
        const draggedElement = elementlist.filter((e) => e.id === id)[0];
        const p = { ...draggedElement };
        if (draggedElement == undefined) {
            const draggedElement = inWorkSpace.filter((e) => e.id === id)[0];
            if (draggedElement == undefined) {
                const draggedCompound = foundCompounds.filter(
                    (e) => e.id === id
                )[0];
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(draggedCompound.left + delta.x);
                const top = Math.round(draggedCompound.top + delta.y);
                moveElement(draggedCompound.id, left, top);
            } else {
                const p = { ...draggedElement };
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(p.left + delta.x);
                const top = Math.round(p.top + delta.y);
                moveElement(p.id, left, top);
            }
        } else if (draggedElement.shown == false && isElement(draggedElement)) {
            p.shown = true;
            p.id = Math.random();
            addtoWorkSpace(inWorkSpace.concat(p));
        }
    }

    function removeElementFromScreen(id: number, id2?: number) {
        let draggedElement = inWorkSpace.filter((e) => e.id != id);
        if (id2) {
            draggedElement = draggedElement.filter((e) => e.id != id2);
        }
        addtoWorkSpace(draggedElement);
    }

    function removeCompoundFromScreen(id: number) {
        const draggedCompound = foundCompounds.filter((e) => e.id != id);
        setfoundCompounds(draggedCompound);
    }

    return (
        <CardContext.Provider
            value={{
                putInWorkSpace,
                removeElementFromScreen,
                removeCompoundFromScreen
            }}
        >
            <div>
                <div className="row-adj">
                    <div className="column-sidebar">
                        <p>
                            <strong>Element List</strong>
                        </p>
                        <p>
                            <Form.Group controlId="Sorting/Filtering">
                                <Form.Select
                                    value={numRep}
                                    onChange={updateFunction}
                                >
                                    <option>Sort/Filter</option>
                                    <option value="1">Alphabetical(A-Z)</option>
                                    <option value="4">Alphabetical(Z-A)</option>
                                    <option value="2">By Atomic Number</option>
                                    <option value="3">Reset</option>
                                </Form.Select>
                                <Form.Group controlId="formQuizId">
                                    <Form.Control
                                        placeholder="Search"
                                        value={search}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => changeSearch(e.target.value)}
                                    ></Form.Control>
                                    <Button onClick={() => Filter()}></Button>
                                </Form.Group>
                            </Form.Group>
                        </p>
                        <ul className="scroll-bar">
                            {generateList(elementlist)}
                            <strong className="Seperater">
                                --------------------------
                                <br />
                            </strong>
                            <strong className="Seperater">
                                Found Compounds <br />
                            </strong>
                            <strong className="Seperater">
                                -------------------------
                            </strong>
                            <strong className="Seperater">--</strong>
                            {generatecompoundList(sidebarCompounds)}
                        </ul>
                    </div>
                    <div className="column-center">
                        <img
                            className="logo"
                            src={require("../images/logo.png")}
                        />
                        <div>
                            <Container>
                                <p className="score">
                                    {compounds
                                        .filter((e) => e.shown == true)
                                        .length.toString() +
                                        "/" +
                                        compounds.length.toString()}
                                    <HelpModal></HelpModal>
                                </p>
                                {inWorkSpace
                                    .map((e) => <ElementObject element={e} />)
                                    .concat(
                                        foundCompounds.map((e) => (
                                            <CompoundObject compound={e} />
                                        ))
                                    )}
                            </Container>
                        </div>
                    </div>
                    <div className="column-right">
                        <Trashbin>{}</Trashbin>
                    </div>
                </div>
            </div>
        </CardContext.Provider>
    );
}

export default ElementList;
