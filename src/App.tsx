import styles from "./App.module.css";

import { useState } from "react";

export default function App() {
  const [coordinates, setCoordinates] = useState<
    Array<{ x: number; y: number }>
  >([]);

  const handleClickGetCoordinates = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const x = e.clientX;
    const y = e.clientY;

    setCoordinates([...coordinates, { x, y }]);
  };

  return (
    <div
      onClick={handleClickGetCoordinates}
      className={styles.appContainer}
    ></div>
  );
}
