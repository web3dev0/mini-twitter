import React, { useState } from "react";
import type { ChangeEvent } from "react";

import styles from "./regPanel.module.css";
import Button from "../Button/button";
import Input, { Position } from "../Input/input";

export interface IRegSubmitPara {
  userName: string;
  pass: string;
  rePass: string;
}

interface IProps {
  onSubmit: (para: IRegSubmitPara) => void;
}

export default function RegPanel({ onSubmit }: IProps) {
  const [userName, setUserName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [rePass, setRePass] = useState<string>("");

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value || "");
  };

  const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value || "");
  };

  const onRePassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRePass(e.target.value || "");
  };
  const onRegClick = () => {
    onSubmit({ userName, pass, rePass });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexBasis: "auto",
          flexDirection: "column",
          overflow: "auto",
          flexGrow: 1,
          flexShrink: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "76px",
            paddingRight: "76px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexBasis: "auto",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexBasis: "auto",
                flexDirection: "column",

                marginBottom: "19px",
                marginTop: "19px",
              }}
            >
              <h1
                id="modal-header"
                dir="auto"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textAlign: "inherit",
                  border: "0px solid black",
                  font: '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "inline",
                  whiteSpace: "pre-wrap",
                  minWidth: "0px",
                  overflowWrap: "break-word",
                  fontFamily:
                    'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  color: "var(--text-color)",
                  fontSize: "29px",
                  lineHeight: "34px",
                }}
              >
                <span
                  style={{
                    border: "0px solid black",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    display: "inline",
                    font: "inherit",
                    color: "inherit",
                    whiteSpace: "inherit",
                    minWidth: "0px",
                    overflowWrap: "break-word",
                    fontFamily: "inherit",
                  }}
                >
                  <span
                    style={{
                      border: "0px solid black",
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      display: "inline",
                      font: "inherit",
                      color: "inherit",
                      whiteSpace: "inherit",
                      minWidth: "0px",
                      overflowWrap: "break-word",
                      fontFamily: "inherit",
                    }}
                  >
                    创建你的账号
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className={styles.row}>
            <Input
              title={"用户名"}
              type="text"
              position={Position.end}
              defaultValue={userName}
              onChange={onUserNameChange}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                style={{
                  display: "inline-block",
                  fill: "currentcolor",
                  height: "1.25em",
                  maxWidth: "100%",
                  position: "relative",
                  verticalAlign: "text-bottom",
                  userSelect: "none",
                  alignSelf: "center",
                  paddingLeft: "4px",
                  color: "rgb(0, 186, 124)",
                }}
              >
                <g>
                  <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
                </g>
              </svg>
            </Input>
          </div>
          <div className={styles.row}>
            <Input
              title={"密码"}
              type="password"
              defaultValue={pass}
              onChange={onPassChange}
            />
          </div>
          <div className={styles.row}>
            <Input
              title={"确认密码"}
              type="password"
              defaultValue={rePass}
              onChange={onRePassChange}
            />
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
        <Button className={styles.btn} onClick={onRegClick}>
          注册
        </Button>
      </div>
    </>
  );
}
