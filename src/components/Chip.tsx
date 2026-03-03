import React from "react";
import styles from "./Chip.module.css";

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick: () => void;
}

export const Chip = ({
  label,
  selected = false,
  onClick
}: ChipProps) => {
  return (
    <button
      className={`${styles.chip} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};