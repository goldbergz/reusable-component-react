import React from "react";
import styles from "./Chip.module.css";

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick
}) => {
  return (
    <button
      className={`${styles.chip} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};