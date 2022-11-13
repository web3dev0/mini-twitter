import React, { useCallback } from "react";
import styles from "./loginBtnBox.module.css";

interface Props {
  onLoginClick: () => void;
  onRegClick: () => void;
}

export default function LoginBtnBox({ onLoginClick, onRegClick }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={onLoginClick} className={styles.ml12}>
          <div className={[styles.btn, styles.login].join(" ")}>
            <div className={styles.textWrapper}>
              <span>登录</span>
            </div>
          </div>
        </div>
        <div onClick={onRegClick} className={styles.ml12}>
          <div className={[styles.btn, styles.reg].join(" ")}>
            <div className={styles.textWrapper}>
              <span>注册</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
