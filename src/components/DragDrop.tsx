import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import PropList from "./ElementList";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { element } from "prop-types";

function DragDrop() {
    const [board, setBoard] = useState<Element[]>([]);
    const addImageToBoard = (element: Element) => {};

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.IMAGE,
        drop: () => {
            addImageToBoard(item.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            droppedItem: monitor.getItem()
        })
    }));

    return (
        <>
            <div className="Pictures">
                <PropList></PropList>
            </div>
            <div className="Board" ref={drop}></div>
        </>
    );
}

export default DragDrop;
