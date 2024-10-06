'use client';
import React, { useEffect, useRef } from 'react';
import styles from './FAQPage.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import FAQCard from '../../components/FAQCard/FAQCard';
import figmaIcon from '../../img/image-Photoroom (10) 1.png';
import psIcon from '../../img/image 1.png';
import tildaIcon from '../../img/Group 11.png';
import { useFaqData } from '../../helpers/faq';
import { useTranslation } from 'react-i18next';

const FAQPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const faq = useFaqData();
  const textRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = React.useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [i18n.language]);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const splitText = new SplitType(textRef.current, { types: 'chars' });

    gsap.fromTo(
      splitText.chars,
      { color: textRef.current?.dataset.bgColor },
      {
        color: textRef.current?.dataset.fgColor,
        duration: 0.7,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 50%',
          end: 'top 10%',
          scrub: true,
          markers: false,
          toggleActions: 'play play reverse reverse',
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [key]);

  return (
    <div className={styles.FAQPageContainer}>
      <div className={styles.FAQPageInfoWrap}>
        <p className={styles.FAQPageNumber}>06</p>
        <h2 className={styles.FAQPageTitle}>{t('titles.faq')}</h2>

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
            key={i18n.language}
            data-bg-color="#a7a7a7"
            data-fg-color="#f45b0f"
          >
            <span className={styles.display}>
              {t('faq.faqTitle.iSuggestGoing')}
              <span className={styles.img}>
                <Image src={figmaIcon} alt={''} className={styles.img} />
              </span>
              {t('faq.faqTitle.beyound')}
            </span>
            <span className={styles.display}>
              {t('faq.faqTitle.and')}{' '}
              <Image src={psIcon} alt={''} className={styles.img} />
              {t('faq.faqTitle.establishingYourself')}
            </span>
            <span className={styles.display}>{t('faq.faqTitle.asABrand')}</span>
            <span className={styles.display}>
              {t('faq.faqTitle.help')}{' '}
              <Image src={tildaIcon} alt={''} className={styles.img} />{' '}
              {t('faq.faqTitle.youWith')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
