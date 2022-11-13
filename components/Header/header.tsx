import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

import Nav from "../Nav/nav";
import Logo from "../Logo/logo";

import styles from "./header.module.css";

import React from "react";

import Selector from "../ThemeSelector/selector";

function Component() {
  return (
    <>
      <div
        className="css-1dbjc4n r-x572qd r-1867qdf r-1a8r3js r-1qfz7tf r-oyd9sg"
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
          borderRadius: "16px",
          paddingLeft: "11px",
          paddingRight: "11px",
          paddingBottom: "4px",
          paddingTop: "4px",
          marginBottom: "11px",
          backgroundColor: "rgb(247, 249, 249)",
        }}
      >
        <div
          className="css-1dbjc4n"
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
            className="css-1dbjc4n r-18u37iz"
            aria-label="可选背景"
            role="radiogroup"
            style={{
              border: "0px solid black",
              margin: "0px",
              padding: "0px",
              WebkitBoxAlign: "stretch",
              alignItems: "stretch",
              boxSizing: "border-box",
              display: "flex",
              flexBasis: "auto",
              flexShrink: 0,
              minHeight: "0px",
              minWidth: "0px",
              position: "relative",
              zIndex: 0,
              WebkitBoxDirection: "normal",
              WebkitBoxOrient: "horizontal",
              flexDirection: "row",
            }}
          >
            <div
              className="css-1dbjc4n r-1awozwy r-14lw9ot r-vhj8yc r-z2wwpe r-d045u9 r-1loqt21 r-13awgt0 r-18u37iz r-1064s9p r-adacv r-1ny4l3l r-d9fdf6"
              tabIndex="-1"
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
                borderRadius: "4px",
                borderColor: "rgb(29, 155, 240)",
                borderWidth: "2px",
                margin: "4px",
                paddingLeft: "20px",
                paddingRight: "20px",
                backgroundColor: "var(--background-color)",
                WebkitBoxDirection: "normal",
                WebkitBoxOrient: "horizontal",
                flexDirection: "row",
                WebkitBoxAlign: "center",
                alignItems: "center",
                outlineStyle: "none",
                cursor: "pointer",
                minHeight: "64px",
              }}
            >
              <div
                className="css-1dbjc4n r-1awozwy r-sdzlij r-eu3ka r-1777fci r-dxdjjy r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr r-1aockid"
                role="radio"
                tabIndex="-1"
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
                  className="css-1dbjc4n r-1awozwy r-l5o3uw r-vhj8yc r-1llaxt6 r-1phboty r-d045u9 r-z80fyv r-1777fci r-19wmn03"
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
                    borderColor: "rgb(29, 155, 240)",
                    borderWidth: "2px",
                    borderRadius: "30px",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(29, 155, 240)",
                    height: "20px",
                    width: "20px",
                  }}
                >
                  <svg
                    className="r-jwli3a r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je"
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
                </div>
              </div>
              <div
                className="css-1dbjc4n r-1awozwy r-1loqt21 r-16y2uox r-1777fci r-1f6r7vd r-6e0ovw"
                aria-hidden="true"
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
                  className="css-901oao css-1hf3ou5 r-18jsvk2 r-37j5jr r-1b43r93 r-b88u0q r-hjklzo r-bcqeeo r-qvutc0"
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
                    color: "var(--text-color)",
                  }}
                >
                  <span
                    className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
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
                    默认
                  </span>
                </div>
              </div>
              <input
                className="r-1p0dtai r-1ei5mc7 r-1pi2tsx r-1d2f490 r-crgep1 r-orgf3d r-t60dpp r-u8s1d r-zchlnj r-ipm5af r-13qz1uu"
                name="background_picker_45"
                type="radio"
                defaultChecked
                aria-label="浅色"
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
              className="css-1dbjc4n r-1awozwy r-yfoy6g r-1ets6dv r-z2wwpe r-rs99b7 r-1loqt21 r-13awgt0 r-18u37iz r-1064s9p r-adacv r-1ny4l3l r-d9fdf6"
              tabIndex="-1"
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
                minHeight: "64px",
                backgroundColor: "rgb(21, 32, 43)",
              }}
            >
              <div
                className="css-1dbjc4n r-1awozwy r-sdzlij r-eu3ka r-1777fci r-dxdjjy r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr r-1aockid"
                role="radio"
                tabIndex="-1"
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
                  className="css-1dbjc4n r-1awozwy r-1niwhzg r-1llaxt6 r-1phboty r-d045u9 r-z80fyv r-1777fci r-19wmn03"
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
                />
              </div>
              <div
                className="css-1dbjc4n r-1awozwy r-1loqt21 r-16y2uox r-1777fci r-1f6r7vd r-6e0ovw"
                aria-hidden="true"
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
                  className="css-901oao css-1hf3ou5 r-vlxjld r-37j5jr r-1b43r93 r-b88u0q r-hjklzo r-bcqeeo r-qvutc0"
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
                    className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
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
                    暗淡
                  </span>
                </div>
              </div>
              <input
                className="r-1p0dtai r-1ei5mc7 r-1pi2tsx r-1d2f490 r-crgep1 r-orgf3d r-t60dpp r-u8s1d r-zchlnj r-ipm5af r-13qz1uu"
                name="background_picker_45"
                type="radio"
                aria-label="暗淡"
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
    </>
  );
}

export default function Header() {
  // const { data: session, status } = useSession();

  return (
    <header className={styles.container}>
      <div className={styles.fixedPanel}>
        <div className={styles.content}>
          <div>
            <Logo />
            <Nav />
          </div>
          <div style={{ position: "absolute", bottom: 0 }}>
            <Selector />
          </div>
        </div>
      </div>
    </header>
  );
}
