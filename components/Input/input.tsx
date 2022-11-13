import styles from "./input.module.css";
import type { ChangeEvent, ReactNode } from "react";

export enum Position {
  start = 1,
  end,
}
interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  type: "text" | "password";
  title: string;
  inputProps?: Array<any>;
  children?: ReactNode;
  position?: Position;
}

export default function Input({
  onChange,
  type,
  defaultValue = "",
  inputProps = [],
  title,
  position,
  children,
}: IProps) {
  return (
    <label className={styles.container}>
      <div className={styles.lableDescribeBox}>
        <div className={styles.lableDescribeText}>{title}</div>
      </div>
      <div className={styles.inputWrapper}>
        {Position.start === position && children}
        <div>
          <input
            {...inputProps}
            type={type}
            autoComplete="off"
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </div>
        {Position.end === position && children}
      </div>
    </label>
  );
}
