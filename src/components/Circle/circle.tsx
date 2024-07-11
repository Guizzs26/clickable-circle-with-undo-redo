import styles from "./circle.module.css";

export type CircleProps = {
  x: number;
  y: number;
};

export function Circle({ x, y }: CircleProps) {
  return <div style={{ top: y, left: x }} className={styles.circle}></div>;
}
