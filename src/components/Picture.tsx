import React from "react";
import { Element } from "../interfaces/Element";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";

function Picture({ element }: { element: Element }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.IMAGE, id: element },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <img
            ref={drag}
            src={element.image}
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    );
}

export default Picture;
