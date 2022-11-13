import { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export default function Button({ onClick, className, children }: Props) {
  return (
    <div className={styles.btnWrapper} onClick={onClick}>
      <div className={[styles.btn, className].join(" ")}>
        <div>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}
