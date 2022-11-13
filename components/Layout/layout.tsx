import React, { useCallback, useState } from "react";
import Header from "../Header/header";
import type { ReactNode } from "react";

import LoginFooter from "../../features/user/loginFooter";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {children}
        <LoginFooter />
      </div>
    </>
  );
}
