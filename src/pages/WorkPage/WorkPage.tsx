"use client";
import React, { useState, useEffect } from "react";
import styles from "./WorkPage.module.css";
import Image from "next/image";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import Link from "next/link";
import cn from "classnames";
import { useImageForSliderArrowData } from "../../helpers/imageForSlider";
import { useTranslation } from "react-i18next";

const WorkPage = () => {
  const imageForSliderArrow = useImageForSliderArrowData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [isMobileView, setIsMobileView] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth <= 660) {
        setIsMobileView(true);
        setVisibleSlides((prev) => Math.min(prev, imageForSliderArrow.length)); // Убедитесь, что не превышаем количество слайдов
      } else {
        setIsMobileView(false);
        setVisibleSlides(imageForSliderArrow.length);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, [imageForSliderArrow.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, visibleSlides - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const loadMoreSlides = () => {
    setVisibleSlides((prev) => Math.min(prev + 2, imageForSliderArrow.length)); // Убедитесь, что не превышаем количество слайдов
  };

  const isNextDisabled = currentSlide >= visibleSlides - 1;

  return (
    <div className={styles.workPageContainer}>
      <div className={styles.workPageInfoContainer}>
        <div className={styles.workPageInfoWrap}>
          <div>
            <p className={styles.workPageNumber}>01</p>
            <h2 className={styles.workPageTitle}>{t("titles.latestWork")}</h2>
            <p className={styles.workPageText}>
              {t("subtitles.latestWorkSubtitle")}
            </p>
          </div>
          <div className={styles.sliderContainer}>
            <button
              className={styles.sliderArrow}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <Image src={arrowLeft} alt="Previous" />
            </button>
            <button
              className={styles.sliderArrow}
              onClick={handleNext}
              disabled={isNextDisabled}
            >
              <Image src={arrowRight} alt="Next" />
            </button>
          </div>
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
            transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
          }}
        >
          {imageForSliderArrow.slice(0, visibleSlides).map((item, index) => (
            <div className={styles.slide} key={index}>
              <Link href={item.link}>
                <div className={styles.imgLink}>
                  <div className={styles.imgTitleBlock}>
                    <p className={styles.imgTitle}>{item.title}</p>
                  </div>
                  <Image
                    src={item.img}
                    alt={`Slide ${index + 1}`}
                    className={styles.img}
                  />
                </div>
              </Link>
            </div>
          ))}
          {isMobileView && visibleSlides < imageForSliderArrow.length && (
            <button className={styles.moreWorkButton} onClick={loadMoreSlides}>
              + {t("buttons.moreButton")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
