import { useLayoutEffect } from "react";

import styles from "./selector.module.css";
import { useAuth } from "../../hooks/useAuth";

import React, { useState } from "react";
export enum Theme {
  light = 1,
  dark,
}
const ThemeVar: any = {
  [Theme.light]: {
    "--background-color": "rgb(255, 255, 255)",
    "--text-color": "rgb(15, 20, 25)",
  },
  [Theme.dark]: {
    "--background-color": "rgb(0, 0, 0)",
    "--text-color": "rgb(231, 233, 234)",
  },
};

const selectedSvg = (
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
      color: "var(--background-color)",
      height: "18px",
      width: "18px",
    }}
  >
    <g>
      <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
    </g>
  </svg>
);

export default function Selector() {
  const { user: currentUser } = useAuth();

  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.light);

  useLayoutEffect(() => {
    for (const key in ThemeVar[currentTheme]) {
      document.documentElement.style.setProperty(
        `${key}`,
        ThemeVar[currentTheme][key]
      );
    }
  }, [currentTheme]);

  if (!currentUser) {
    return <></>;
  }
  return (
    <div className={styles.container}>
      <div
        style={{
          border: "0px solid black",
          margin: "0px",
          padding: "0px",
          WebkitBoxAlign: "stretch",
          WebkitBoxDirection: "normal",
          WebkitBoxOrient: "vertical",
          alignItems: "stretch",
          boxSizing: "border-box",
          display: "flex",
          flexBasis: "auto",
          flexDirection: "column",
          flexShrink: 0,
          minHeight: "0px",
          minWidth: "0px",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",

              flex: "1 1 0%",

              borderRadius: "4px",
              borderColor: "rgb(29, 155, 240)",
              borderWidth: "2px",
              margin: "4px",
              paddingLeft: "20px",
              paddingRight: "20px",
              backgroundColor: "var(--background-color)",
              flexDirection: "row",
              alignItems: "center",
              outlineStyle: "none",
              cursor: "pointer",
              height: "47px",
            }}
            onClick={() => {
              setCurrentTheme(Theme.light);
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                borderStyle: "solid",
                borderColor: "rgb(29, 155, 240)",
                borderWidth: "2px",
                borderRadius: "30px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(29, 155, 240)",
                height: "20px",
                width: "20px",
              }}
            >
              {currentTheme === Theme.light && selectedSvg}
            </div>
            <div
              style={{
                display: "flex",
                flexBasis: "auto",
                flexDirection: "column",
                flexShrink: 0,
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginLeft: "5px",
                width: "80%",
              }}
            >
              <div
                style={{
                  display: "inline",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflowWrap: "break-word",
                  lineHeight: "19px",

                  fontSize: "14px",
                  fontWeight: 700,
                  color: "rgb(15, 20, 25)",
                }}
              >
                <span>default</span>
              </div>
            </div>
            <input
              type="radio"
              style={{
                margin: "0px",
                padding: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                top: "0px",
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "inherit",
              }}
            />
          </div>

          <div
            style={{
              border: "0px solid black",
              padding: "0px",
              boxSizing: "border-box",
              display: "flex",
              minWidth: "0px",
              position: "relative",
              zIndex: 0,
              flex: "1 1 0%",
              flexShrink: 1,
              flexBasis: "0%",
              borderWidth: "1px",
              borderColor: "rgb(207, 217, 222)",
              borderRadius: "4px",
              margin: "4px",
              paddingLeft: "20px",
              paddingRight: "20px",
              WebkitBoxDirection: "normal",
              WebkitBoxOrient: "horizontal",
              flexDirection: "row",
              WebkitBoxAlign: "center",
              alignItems: "center",
              outlineStyle: "none",
              cursor: "pointer",
              height: "47px",
              backgroundColor: "rgb(21, 32, 43)",
            }}
            onClick={() => {
              setCurrentTheme(Theme.dark);
            }}
          >
            <div
              style={{
                border: "0px solid black",
                margin: "0px",
                padding: "0px",
                WebkitBoxDirection: "normal",
                WebkitBoxOrient: "vertical",
                boxSizing: "border-box",
                display: "flex",
                flexBasis: "auto",
                flexDirection: "column",
                flexShrink: 0,
                minHeight: "0px",
                minWidth: "0px",
                position: "relative",
                zIndex: 0,
                borderRadius: "9999px",
                marginLeft: "-11px",
                marginRight: "-11px",
                userSelect: "none",
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                transitionDuration: "0.2s",
                transitionProperty: "background-color, box-shadow",
                outlineStyle: "none",
                height: "40px",
                width: "40px",
              }}
            >
              <div
                style={{
                  border: "0px solid black",
                  margin: "0px",
                  padding: "0px",
                  WebkitBoxDirection: "normal",
                  WebkitBoxOrient: "vertical",
                  boxSizing: "border-box",
                  display: "flex",
                  flexBasis: "auto",
                  flexDirection: "column",
                  flexShrink: 0,
                  minHeight: "0px",
                  minWidth: "0px",
                  position: "relative",
                  zIndex: 0,
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderRadius: "30px",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  height: "20px",
                  width: "20px",
                  borderColor: "rgb(92, 110, 126)",
                }}
              >
                {currentTheme === Theme.dark && selectedSvg}
              </div>
            </div>
            <div
              style={{
                border: "0px solid black",
                margin: "0px",
                padding: "0px",
                WebkitBoxDirection: "normal",
                WebkitBoxOrient: "vertical",
                boxSizing: "border-box",
                display: "flex",
                flexBasis: "auto",
                flexDirection: "column",
                flexShrink: 0,
                minHeight: "0px",
                minWidth: "0px",
                position: "relative",
                zIndex: 0,
                WebkitBoxFlex: "1",
                flexGrow: 1,
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginLeft: "5px",
                width: "80%",
              }}
            >
              <div
                dir="auto"
                style={{
                  border: "0px solid black",
                  font: '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "inline",
                  overflow: "hidden",
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  minWidth: "0px",
                  overflowWrap: "break-word",
                  lineHeight: "19px",
                  fontFamily:
                    'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "rgb(247, 249, 249)",
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
                  dark
                </span>
              </div>
            </div>
            <input
              type="radio"
              style={{
                margin: "0px",
                padding: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                top: "0px",
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "inherit",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
