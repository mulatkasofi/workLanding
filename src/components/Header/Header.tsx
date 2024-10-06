'use client';

import Image from 'next/image';
import Menu from '../Menu/Menu';
import logoIcon from '../../img/logo.png';
import writeMeIcon from '../../img/writeMe.png';
import writeMeIconRu from '../../img/Group 1794.png';
import styles from './Header.module.css';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import burgerIcon from '../../assets/burger.svg';
import { useState } from 'react';
import closeIcon from '../../assets/cross.svg';
import backgroundImg from '../../img/Ellipse 3.png';
import ContactButton from '../ContactButton/ContactButton';
import Modal from '../ModalWindow/ModalWindow';

const Header = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const renderLinks = () => (
    <>
      <div className={styles.writeMeIcon}>
        {i18n.language === 'ru' ? (
          <Image src={writeMeIconRu} alt={''} className={styles.writeMe} />
        ) : (
          <Image src={writeMeIcon} alt={''} className={styles.writeMe} />
        )}

        <Link
          style={{ textDecoration: 'none' }}
          href={
            'https://www.instagram.com/akiv.ui.ux?igsh=MTdvZmV5azlxM3BxcA=='
          }
        >
          <p className={styles.headerLinkInst}>instagram</p>
        </Link>
      </div>
      <Link
        style={{ textDecoration: 'none' }}
        href={
          'https://www.linkedin.com/in/viktoriya-volozhinskaya-415145260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apphttps://www.linkedin.com/in/viktoriya-volozhinskaya-415145260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        }
      >
        <p className={styles.headerLink}>linkedin</p>
      </Link>
    </>
  );
  return (
    <div className={styles.headerWrap}>
      <div className={styles.menuWrap}>
        <Menu />
      </div>
      <Image src={logoIcon} alt={''} className={styles.logo} />
      <div className={styles.headerLinkWrap}>{renderLinks()}</div>
      <button className={styles.burgerIcon} onClick={() => setOpen(!open)}>
        <Image src={burgerIcon} alt={''} />
      </button>
      {open && (
        <div className={styles.burgerWrap}>
          <div className={styles.burger}>
            <div className={styles.burgerHeaderWrap}>
              <button
                onClick={() => setOpen(!open)}
                className={styles.closeIcon}
              >
                <Image src={closeIcon} alt={''} />
              </button>
              <div className={styles.mediaLinks}>{renderLinks()}</div>
            </div>
            <div className={styles.menuAdaptiveWrap}>
              <Menu />
            </div>
            <div className={styles.contactButtonWrapper}>
              <ContactButton onClick={() => setIsOpenModal(!isOpenModal)} />
            </div>
          </div>
          <Image
            src={backgroundImg}
            alt={''}
            className={styles.backgroundImg}
          />
        </div>
      )}
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(!isOpenModal)}
        />
      )}
    </div>
  );
};

export default Header;
