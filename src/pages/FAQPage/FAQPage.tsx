"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./FAQPage.module.css";
import Image from "next/image";
import { useFaqData } from "../../helpers/faq";
import { useTranslation, Trans } from "react-i18next";
import figmaIcon from "../../img/image-Photoroom (10) 1.png";
import psIcon from "../../img/image 1.png";
import tildaIcon from "../../img/Group 11.png";
import FAQCard from "../../components/FAQCard/FAQCard";
import Modal from "../../components/ModalWindow/ModalWindow";

const FAQPage: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const faq = useFaqData({ onClick: handleClick });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.FAQPageContainer}>
      <div className={styles.FAQPageInfoWrap}>
        <p className={styles.FAQPageNumber}>06</p>
        <h2 className={styles.FAQPageTitle}>{t("titles.faq")}</h2>
        {faq.map((i) => (
          <FAQCard
            key={i.number}
            title={i.title}
            question={i.question}
            number={i.number}
          />
        ))}
        <div>
          <div
            className={styles.FAQText}
            ref={textRef}
            data-bg-color="#a7a7a7"
            data-fg-color="#f45b0f"
            style={{ color: isVisible ? "#f45b0f" : "#a7a7a7" }}
          >
            <span className={styles.display}>
              {t("faq.faqTitle.iSuggestGoing")}{" "}
              <span className={styles.img}>
                <Image src={figmaIcon} alt={""} className={styles.img} />
              </span>
              {t("faq.faqTitle.beyound")}{" "}
            </span>
            <span className={styles.display}>
              {t("faq.faqTitle.and")}{" "}
              <Image src={psIcon} alt={""} className={styles.img} />
              {t("faq.faqTitle.establishingYourself")}{" "}
            </span>
            <span className={styles.display}>{t("faq.faqTitle.asABrand")}</span>
            <span className={styles.display}>
              {t("faq.faqTitle.help")}{" "}
              <Image src={tildaIcon} alt={""} className={styles.img} />{" "}
              {t("faq.faqTitle.youWith")}
            </span>
          </div>
        </div>
      </div>
      {open && <Modal isOpen={open} onClose={() => setOpen(!open)} />}
    </div>
  );
};

export default FAQPage;
