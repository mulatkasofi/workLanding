'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './ReviewsPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import clipOrangeIcon from '../../assets/clipOrangeIcon.svg';
import clipWhiteIcon from '../../assets/clipWhiteIcon.svg';
import { useReviewsData } from '../../helpers/reviews';
import clientIcon from '../../img/иконки.png';
import Reviews from '../../components/Reviews/Reviews';
import { useTranslation, Trans } from 'react-i18next';

const ReviewsPage = () => {
  const reviews = useReviewsData();
  const { t } = useTranslation();
  const [visibleReviews, setVisibleReviews] = useState<boolean[]>(
    Array(reviews.length).fill(false),
  );
  const reviewRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(reviews.length).fill(null),
  );

  const setRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      reviewRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const currentRefs = reviewRefs.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = currentRefs.indexOf(entry.target as HTMLDivElement);
        if (index !== -1) {
          if (entry.isIntersecting) {
            setVisibleReviews((prev) => {
              const newVisibleReviews = [...prev];
              newVisibleReviews[index] = true;
              return newVisibleReviews;
            });
          } else {
            setVisibleReviews((prev) => {
              const newVisibleReviews = [...prev];
              newVisibleReviews[index] = false;
              return newVisibleReviews;
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className={styles.reviewsPageContainer}>
      <div className={styles.reviewsPageWrap}>
        <div className={styles.reviewsPageInfo}>
          <div>
            <p className={styles.reviewsPageNumber}>03</p>
            <h2 className={styles.reviewsPageTitle}>{t('titles.review')}</h2>
            <p className={styles.reviewsPageText}>
              <Trans i18nKey="subtitles.reviewsSubtitle">
                More reviews can be found on my{' '}
                <Link
                  href="https://kwork.ru/user/aakkkiivv"
                  className={styles.freelanceProfileLink}
                >
                  <span className={styles.freelanceProfileLink}>
                    freelance profile
                  </span>
                </Link>
              </Trans>
            </p>
          </div>
          <div className={styles.reviewsPageClientsInfo}>
            <Image src={clientIcon} alt={''} />
            <div>
              <h3 className={styles.reviewsPageClientsCount}>80+</h3>
              <p className={styles.reviewsPageCLientsText}>
                {t('reviewsCard.happyClients')}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <div
              key={index}
              ref={setRef(index)}
              className={styles.reviewWrapper}
            >
              <Image
                src={index % 2 === 0 ? clipOrangeIcon : clipWhiteIcon}
                alt={'Review Icon'}
                className={cn(styles.clipIcon, {
                  [styles.clipVisible]: visibleReviews[index],
                })}
              />
              <div
                className={cn(styles.reviewItem, {
                  [styles.visible]: visibleReviews[index],
                })}
              >
                <Reviews
                  title={review.title}
                  text={review.text}
                  rotation={review.rotation}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
