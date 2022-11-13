import Link from "next/link";
import styles from "./sloganBox.module.css";

export default function SloganBox() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>新鲜事一网打尽</span>
      </div>
      <div className={styles.describe}>
        <span>在 Twitter 上的人会第一时间知道。</span>
      </div>
    </div>
  );
}
