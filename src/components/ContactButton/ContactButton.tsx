'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from './ContactButton.module.css';
import arrowLeftOrange from '../../assets/arrowLeftOrange.svg';
import arrowLeftBlack from '../../assets/arrowLeftBlack.svg';
import clickIcon from '../../assets/clickIcon.svg';
import { useTranslation } from 'react-i18next';
import { ContactButtonProps } from '../../types/components/ComponentsTypes';

const ContactButton: FC<ContactButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className={styles.contactButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className={styles.contactButtonSpan}></span>
      <p className={styles.contactButtonTitle}>{t('modal.contactButton')}</p>
      {isHovered && (
        <Image src={clickIcon} alt={''} className={styles.contactButtonClick} />
      )}
      <button className={styles.contactButtonAction}>
        {isHovered ? (
          <Image src={arrowLeftBlack} alt={''} />
        ) : (
          <Image src={arrowLeftOrange} alt={''} />
        )}
      </button>
    </div>
  );
};

export default ContactButton;
