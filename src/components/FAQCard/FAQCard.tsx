import Image from "next/image";
import styles from "./FAQCard.module.css";
import cn from "classnames";
import arrowUp from "../../assets/arrowUp.svg";
import { FAQProps } from "../../types/components/ComponentsTypes";
import { useState, useEffect } from "react";
import arrowDown from "../../assets/arrowDown.svg";

const FAQCard = ({ title, question, number }: FAQProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (number === "01") {
      setOpen(true);
    }
  }, [number]);

  return (
    <div
      className={cn(styles.faqContainer, { [styles.faqContainerOpen]: open })}
      onClick={() => number !== "01" && setOpen(!open)}
    >
      <div className={styles.faqWrap}>
        <p className={cn(styles.faqNumber, { [styles.white]: open })}>
          {number}
        </p>
        <p className={cn(styles.faqTitle, { [styles.white]: open })}>{title}</p>
        {number !== "01" ? (
          <button
            onClick={() => setOpen(!open)}
            className={cn(styles.faqButton, { [styles.whiteBackGround]: open })}
          >
            <Image src={open ? arrowUp : arrowDown} alt={""} />
          </button>
        ) : (
          <div className={styles.faqBlock}></div>
        )}
      </div>
      {open && <p className={styles.faqQuestion}>{question}</p>}
    </div>
  );
};

export default FAQCard;
