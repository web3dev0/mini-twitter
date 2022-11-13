import styles from "./footer.module.css";

import SloganBox from "../SloganBox/sloganBox";
import LoginBtnBox from "../LoginBtnBox/loginBtnBox";

interface Props {
  onLoginClick: () => void;
  onRegClick: () => void;
}

export default function Footer({ onLoginClick, onRegClick }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.main}>
            <SloganBox />
            <LoginBtnBox onLoginClick={onLoginClick} onRegClick={onRegClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
