"use client";
import React, { useEffect, useState } from "react";
import styles from "./PrinciplesPage.module.css";

import { usePrinciplesData } from "../../helpers/principles";
import PrinciplesCard from "../../components/PrinciplesCard/PrinciplesCard";
import { useTranslation } from "react-i18next";

const PrinciplesPage: React.FC = () => {
  const principles = usePrinciplesData();
  const { t } = useTranslation();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;
      setOffset({ x, y });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]; 
      const x = (window.innerWidth / 2 - touch.clientX) / 30;
      const y = (window.innerHeight / 2 - touch.clientY) / 30;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className={styles.principlesPageContainer}>
      <div className={styles.principlesPageInfoWrap}>
        <p className={styles.principlesPageNumber}>04</p>
        <h2 className={styles.principlesPageTitle}>{t("titles.principles")}</h2>
        <div className={styles.principlesPageWrap}>
          <h1 className={styles.principlesPageText}>
            {t("principlesCard.principlesText")}
          </h1>
          <>
            {principles.map((i, index) => (
              <div
                className={styles.principlesPageCard}
                key={i.text}
                style={{
                  transform: `translate(${offset.x * (index + 1)}px, ${
                    offset.y * (index + 1)
                  }px)`,
                }}
              >
                <PrinciplesCard text={i.text} rotation={i.rotation} />
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesPage;
