import React from "react";
import { Compound } from "../interfaces/Compound";

import "./ElementObject.css";

function CompoundObjectSidebar({
    compound
}: {
    compound: Compound;
}): JSX.Element {
    // Returns the Compound Object that is seen on the left task bar
    return (
        <div>
            <img
                id={compound.id.toString()}
                src={compound.image}
                alt={"compound"}
            />
        </div>
    );
}

export default CompoundObjectSidebar;
