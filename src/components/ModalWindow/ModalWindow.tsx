import React, { FC, useState, useEffect } from "react";
import styles from "./ModalWindow.module.css";
import cross from "../../assets/cross.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Button from "../Button/Button";
import { ModalProps } from "../../types/components/ComponentsTypes";

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [linkError, setLinkError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSent, setIsSent] = useState(false); 

  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/i;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLink = (link: string): boolean => urlPattern.test(link);
  const validateEmail = (email: string): boolean => emailPattern.test(email);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateLink(link)) {
      setLinkError(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    setLinkError(false);
    setEmailError(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          link,
          email,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setName("");
        setLink("");
        setEmail("");
      } else {
        setIsSent(false);
      }

      await response.json();
    } catch (error) {
      setIsSent(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSent(false);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <Image
                src={cross}
                alt="close"
                className={styles.cross}
                onClick={onClose}
              />
              {isSent ? (
                <p className={styles.successMessage}>
                  {t("modal.successMessage")}
                </p>
              ) : (
                <>
                  <h3 className={styles.modalTitle}>{t("modal.contact")}</h3>
                  <p className={styles.modalText}>
                    {t("modal.messageOn")}{" "}
                    <Link
                      href="https://www.instagram.com/akiv.ui.ux?igsh=MTdvZmV5azlxM3BxcA=="
                      className={styles.modalLink}
                    >
                      Instagram
                    </Link>{" "}
                    {t("modal.or")}{" "}
                    <Link
                      href="https://www.linkedin.com/in/viktoriya-volozhinskaya-415145260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apphttps://www.linkedin.com/in/viktoriya-volozhinskaya-415145260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      className={styles.modalLink}
                    >
                      Linkedin
                    </Link>{" "}
                    <br />
                    <span className={styles.modalSpan}>{t("modal.or")}</span>
                    {t("modal.leaveALink")}
                  </p>
                  <form onSubmit={sendMail} className={styles.modalForm}>
                    <input
                      name="name"
                      placeholder={t("modal.name")}
                      className={styles.modalInput}
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      name="link"
                      placeholder={t("modal.link")}
                      className={styles.modalInput}
                      value={link}
                      required
                      onChange={(e) => setLink(e.target.value)}
                    />
                    <input
                      name="email"
                      placeholder="email"
                      className={styles.modalInput}
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {linkError && (
                      <p className={styles.error}>
                        {t("modal.error")}
                      </p>
                    )}
                    {emailError && (
                      <p className={styles.error}>
                        {t("modal.errorEmail")}
                      </p>
                    )}
                    <Button text={t("modal.send")} />
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
