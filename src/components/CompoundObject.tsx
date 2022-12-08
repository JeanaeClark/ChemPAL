import React from "react";
import { Compound } from "../interfaces/Compound";
import { useDrag } from "react-dnd";
import itemTypes from "../interfaces/itemTypes";

import "./ElementObject.css";

function CompoundObject({ compound }: { compound: Compound }): JSX.Element {
    const [, drag] = useDrag({
        item: {
            type: itemTypes.ELEMENT,
            ID: compound.id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div>
            <img
                id={compound.id.toString()}
                src={compound.image}
                alt={"compound"}
                ref={drag}
                style={{
                    ...StyleSheet,
                    top: compound.top,
                    left: compound.left,
                    position: "absolute"
                }}
            />
        </div>
    );
}

export default CompoundObject;
