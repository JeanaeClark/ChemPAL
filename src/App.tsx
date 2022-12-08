/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ElementList from "./components/ElementList";
import InstructionsModal from "./InstructionsModal";

import "./App.css";
//import Container from "./components/Container";
function App(): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <InstructionsModal></InstructionsModal>
                <ElementList></ElementList>
            </div>
        </DndProvider>
    );
}

export default App;
