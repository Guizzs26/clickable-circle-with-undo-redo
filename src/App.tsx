import styles from "./App.module.css";

import { useState } from "react";

import { Circle } from "./components/Circle";

export default function App() {
  const [coordinates, setCoordinates] = useState<
    Array<{ x: number; y: number }>
  >([]);

  const [undoStack, setUndoStack] = useState<
    Array<Array<{ x: number; y: number }>>
  >([]);

  const [redoStack, setRedoStack] = useState<
    Array<Array<{ x: number; y: number }>>
  >([]);

  const handleClickGetCoordinates = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const x = e.clientX;
    const y = e.clientY;

    const newCoordinates = [...coordinates, { x, y }];

    setCoordinates(newCoordinates);
    setUndoStack((undoStack) => [...undoStack, coordinates]);
    setRedoStack([]);
  };

  const handleUndo = (): void => {
    if (undoStack.length > 0) {
      const previousCoordinates = undoStack[undoStack.length - 1];
      const newUndoStack = undoStack.slice(0, undoStack.length - 1);

      setCoordinates(previousCoordinates);
      setUndoStack(newUndoStack);
      setRedoStack((redoStack) => [...redoStack, coordinates]);
    }
  };

  const handleRedo = (): void => {
    if (redoStack.length > 0) {
      const nextCoordinates = redoStack[redoStack.length - 1];
      const newRedoStack = redoStack.slice(0, redoStack.length - 1);

      setCoordinates(nextCoordinates);
      setRedoStack(newRedoStack);
      setUndoStack((undoStack) => [...undoStack, coordinates]);
    }
  };

  return (
    <div onClick={handleClickGetCoordinates} className={styles.appContainer}>
      {coordinates.map((coordinate, index) => (
        <Circle x={coordinate.x} y={coordinate.y} key={index} />
      ))}

      <div className={styles.btnUndoRedo}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleUndo();
          }}
          disabled={undoStack.length === 0}
        >
          Undoing
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRedo();
          }}
          disabled={redoStack.length === 0}
        >
          Redoing
        </button>
      </div>
    </div>
  );
}
