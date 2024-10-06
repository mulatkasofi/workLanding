'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './WorkStepsPage.module.css';
import WorkSteps from '../../components/WorkSteps/WorkSteps';
import { useWorkStepsData } from '../../helpers/workSteps';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/ModalWindow/ModalWindow';
import cn from 'classnames';

const WorkStepsPage: React.FC = () => {
  const workSteps = useWorkStepsData();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
        const visibleSlides = Math.floor(carouselRef.current.offsetWidth / 300);
        setSlideWidth(carouselRef.current.offsetWidth / visibleSlides);
      }

      if (window.innerWidth <= 660) {
        setIsMobile(true);
        document.body.style.overflowY = 'auto';
      } else {
        setIsMobile(false);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isMobile) {
      return;
    }

    if (isScrolling) {
      return;
    }

    const maxSlides =
      workSteps.length - Math.floor(containerWidth / slideWidth);
    if (event.deltaY > 0) {
      if (currentSlide < maxSlides) {
        setCurrentSlide((prev) => prev + 1);
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    } else if (event.deltaY < 0) {
      if (currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    }

    setIsScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 500);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const totalTranslate = currentSlide * 400;
      carouselRef.current.style.transform = `translateX(-${totalTranslate}px)`;
    }
  }, [currentSlide]);

  return (
    <div className={styles.workStepsPageContainer}>
      <div className={styles.workStepsPageInfoWrap} onWheel={handleScroll}>
        <p className={styles.workStepsPageNumber}>02</p>
        <h2 className={styles.workStepsPageTitle}>{t('titles.workSteps')}</h2>
      </div>
      <div
        className={cn(styles.carouselContainer, {
          [styles.paddingLeft]: currentSlide === 0,
        })}
        onWheel={handleScroll}
      >
        <div className={styles.carousel} ref={carouselRef}>
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
