import React, { useCallback, useState } from "react";
import styles from "./loginPanel.module.css";
import type { ChangeEvent } from "react";

import Button from "../Button/button";
import Input from "../Input/input";

export interface ILoginSubmitPara {
  userName: string;
  pass: string;
}

interface IProps {
  onSubmit: (e: ILoginSubmitPara) => void;
  onSwichToRegClick: () => void;
}

export default function LoginPanel({ onSubmit, onSwichToRegClick }: IProps) {
  const [userName, setUserName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const onSubmitClick = () => {
    onSubmit({ userName, pass });
  };
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "76px",
            paddingRight: "76px",
          }}
        >
          <div>
            <div
              style={{
                marginBottom: "19px",
                marginTop: "19px",
              }}
            >
              <h1>输入你的密码</h1>
            </div>

            <div className={styles.row}>
              <Input
                title={"用户名"}
                type="text"
                defaultValue={userName}
                onChange={onUserNameChange}
              />
            </div>
            <div className={styles.row}>
              <Input
                title={"密码"}
                type="password"
                defaultValue={pass}
                onChange={onPassChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "76px",
          paddingRight: "76px",
        }}
      >
        <Button className={styles.btn} onClick={onSubmitClick}>
          登录
        </Button>

        <div className={styles.notice}>
          <span>还没有账号？</span>
          <span
            style={{
              cursor: "pointer",
              color: "var(--primary-color)",
            }}
            onClick={onSwichToRegClick}
          >
            注册
          </span>
        </div>
      </div>
    </>
  );
}
