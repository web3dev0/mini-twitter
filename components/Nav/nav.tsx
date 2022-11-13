import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#?">
        <div className={styles.row}>
          <div>
            <svg
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{
                display: "inline-block",
                fill: "currentcolor",
                maxWidth: "100%",
                position: "relative",
                verticalAlign: "text-bottom",
                userSelect: "none",
                height: "1.75rem",
                color: "var(--text-color)",
                width: "1.75rem",
              }}
            >
              <g>
                <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
              </g>
            </svg>
          </div>
          <div className={styles.text}>
            <span>Home</span>
          </div>
        </div>
      </a>
      <a href="#?">
        <div className={styles.row}>
          <div>
            <svg
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{
                display: "inline-block",
                fill: "currentcolor",
                maxWidth: "100%",
                position: "relative",
                verticalAlign: "text-bottom",
                userSelect: "none",
                height: "1.75rem",
                color: "var(--text-color)",
                width: "1.75rem",
              }}
            >
              <g>
                <path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path>
              </g>
            </svg>
          </div>
          <div className={styles.text}>
            <span>explore</span>
          </div>
        </div>
      </a>
    </nav>
  );
}
