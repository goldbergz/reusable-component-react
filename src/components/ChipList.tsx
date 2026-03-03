import React, {
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { Chip } from "./Chip";
import styles from "./ChipList.module.css";

interface Item {
  id: string;
  label: string;
}

interface Props {
  items: Item[];
}

export const ChipList: React.FC<Props> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [visibleCount, setVisibleCount] = useState(items.length);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const calculateVisible = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;

    let total = 0;
    let count = 0;

    for (let i = 0; i < items.length; i++) {
      const el = chipsRef.current[i];
      if (!el) continue;

      total += el.offsetWidth + 8;

      if (total > containerWidth - 60) break;
      count++;
    }

    setVisibleCount(count);
  };

  useLayoutEffect(() => {
    calculateVisible();
  }, [items]);

  useEffect(() => {
    const observer = new ResizeObserver(calculateVisible);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const visible = items.slice(0, visibleCount);
  const hidden = items.slice(visibleCount);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.row}>
        {visible.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
  chipsRef.current[index] =
    el?.querySelector("button") || null;
}}
          >
            <Chip
              label={item.label}
              selected={selectedId === item.id}
              onClick={() => setSelectedId(item.id)}
            />
          </div>
        ))}

        {hidden.length > 0 && (
          <button
            className={styles.more}
            onClick={() => setIsOpen(!isOpen)}
          >
            ...
          </button>
        )}
      </div>

      {isOpen && hidden.length > 0 && (
        <div className={styles.popup}>
          {hidden.map((item) => (
            <Chip
              key={item.id}
              label={item.label}
              selected={selectedId === item.id}
              onClick={() => {
                setSelectedId(item.id);
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};