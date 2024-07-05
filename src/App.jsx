import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.css";
import { DragDrop } from "./components/DragDrop";

function App() {
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <DragDrop />
      </DndProvider>
    </div>
  );
}

export default App;
