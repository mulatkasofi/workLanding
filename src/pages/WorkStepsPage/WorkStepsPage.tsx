"use client";
import React, { useState, useEffect } from "react";
import styles from "./WorkStepsPage.module.css";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import WorkSteps from "../../components/WorkSteps/WorkSteps";
import Modal from "../../components/ModalWindow/ModalWindow";
import Image from "next/image";
import arrowLeftOrange from "../../assets/arrowSliderLeftOrange.svg";
import arrowRightFlipped from "../../assets/arrowRightFlipped.svg"; 
import { useWorkStepsData } from "../../helpers/workSteps";
import { useTranslation } from "react-i18next";
import cn from "classnames";

const WorkStepsPage: React.FC = () => {
  const workSteps = useWorkStepsData();
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth <= 660) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(3);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, workSteps.length - visibleSlides)
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const isNextDisabled = currentSlide >= workSteps.length - visibleSlides;

  return (
    <div className={styles.workStepsPageContainer}>
      <div className={styles.workStepsPageInfoWrap}>
        <div>
          <p className={styles.workStepsPageNumber}>02</p>
          <h2 className={styles.workStepsPageTitle}>{t("titles.workSteps")}</h2>
        </div>
        <div className={styles.sliderContainer}>
          <button
            className={styles.sliderArrow}
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <Image
              src={currentSlide === 0 ? arrowLeft : arrowLeftOrange}
              alt="Previous"
            />
          </button>
          <button
            className={styles.sliderArrow}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <Image
              src={isNextDisabled ? arrowRightFlipped : arrowRight}
              alt="Next"
            />
          </button>
        </div>
      </div>
      <div
        className={cn(styles.slidesWrapper, {
          [styles.paddingLeft]: currentSlide === 0,
        })}
      >
        <div
          className={styles.slides}
          style={{
            transform: `translateX(-${currentSlide * 25}%)`,
          }}
        >
          {workSteps.map((item, index) => (
            <div className={styles.workStepsElements} key={item.number}>
              <WorkSteps
                key={index}
                title={item.title}
                text={item.text}
                type={item.type}
                number={item.number}
                open={open}
                setOpen={setOpen}
              />
            </div>
          ))}
        </div>
      </div>
      {open && <Modal isOpen={open} onClose={() => setOpen(!open)} />}
    </div>
  );
};

export default WorkStepsPage;
