"use client";
import React, { FC } from "react";
import Image from "next/image";
import styles from "./Button.module.css";
import arrowLeftOrange from "../../assets/arrowLeftOrange.svg";
import { ButtonProps } from "../../types/components/ComponentsTypes";

const Button: FC<ButtonProps> = ({ onClick, text }) => (
  <button className={styles.button} onClick={onClick} type="submit">
    <span className={styles.buttonSpan}></span>
    <p className={styles.buttonTitle}>{text}</p>
    <div className={styles.buttonAction}>
      <Image src={arrowLeftOrange} alt="arrow" />
    </div>
  </button>
);

export default Button;
