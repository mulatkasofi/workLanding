'use client';
import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import ContactButton from '../../components/ContactButton/ContactButton';
import { useState } from 'react';
import Modal from '../../components/ModalWindow/ModalWindow';
const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrap}>
        <ContactButton onClick={() => setOpen(!open)} />
        {open && <Modal isOpen={open} onClose={() => setOpen(!open)} />}
        <div className={styles.footerName}>
          <Image src={logo} alt={""} className={styles.footerLogo} />
          <p className={styles.footerTitle}>
            © 2024 VOLOZHINSKAYA - All rights are reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
