import React, { ReactNode } from "react";
import styles from "./modal.module.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  const closeBtn = (
    <div className={styles.closeBtn} onClick={props.toggle}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        style={{
          display: "inline-block",
          fill: "currentcolor",
          maxWidth: "100%",
          position: "relative",
          verticalAlign: "text-bottom",
          userSelect: "none",
          color: "var(--text-color)",
          height: "19px",
          width: "19px",
        }}
      >
        <g>
          <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
        </g>
      </svg>
    </div>
  );

  return (
    <>
      {props.isOpen && (
        <div className={styles.overlay}>
          <div onClick={(e) => e.stopPropagation()} className={styles.box}>
            <div className={styles.column}>
              <div className={styles.header}>
                <div className={styles.headerWrapper}>
                  <div className={styles.closeContainer}>{closeBtn}</div>
                </div>
              </div>
              <div className={styles.content}>{props.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
