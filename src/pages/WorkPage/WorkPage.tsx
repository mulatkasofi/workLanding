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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth <= 660) {
        setIsMobileView(true);
        setVisibleSlides(5);
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
    setCurrentSlide((prev) => (prev + 1 < visibleSlides - 2 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const loadMoreSlides = () => {
    setVisibleSlides((prev) => prev + 2);
  };

  const isNextDisabled = currentSlide >= visibleSlides - 3;
  
  if (!i18n.isInitialized) {
    return <div></div>;
  }
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
            {isNextDisabled ? (
              <>
                <button
                  className={cn(styles.sliderArrow, styles.route)}
                  onClick={handlePrev}
                >
                  <Image src={arrowRight} alt="Next" />
                </button>
                <button
                  className={cn(styles.sliderArrow, styles.route)}
                  onClick={handleNext}
                >
                  <Image src={arrowLeft} alt="Previous" />
                </button>
              </>
            ) : (
              <>
                <button className={styles.sliderArrow} onClick={handlePrev}>
                  <Image src={arrowLeft} alt="Previous" />
                </button>
                <button className={styles.sliderArrow} onClick={handleNext}>
                  <Image src={arrowRight} alt="Next" />
                </button>
              </>
            )}
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
                  <div className={styles.imgTitleBlock} key={index + 2}>
                    <p className={styles.imgTitle}>{item.title}</p>
                  </div>
                  <Image
                    key={index + 3}
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
              + more works
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
