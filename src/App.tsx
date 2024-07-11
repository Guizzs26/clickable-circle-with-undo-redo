import styles from "./App.module.css";

import { useState } from "react";

import { Circle } from "./components/Circle";

export default function App() {
  const [coordinates, setCoordinates] = useState<
    Array<{ x: number; y: number }>
  >([]);

  const handleClickGetCoordinates = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(x, y);

    const newCoordinates = [...coordinates, { x, y }];

    setCoordinates(newCoordinates);
  };

  return (
    <div onClick={handleClickGetCoordinates} className={styles.appContainer}>
      {coordinates.map((coordinate, index) => (
        <Circle x={coordinate.x} y={coordinate.y} key={index} />
      ))}
    </div>
  );
}
