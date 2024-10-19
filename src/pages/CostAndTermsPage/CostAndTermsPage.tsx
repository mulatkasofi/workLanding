"use client";
import React, { useState } from "react";
import styles from "./CostAndTermsPage.module.css";
import Image from "next/image";
import Link from "next/link";
import writeMeIcon from "../../assets/writeMeIcon.svg";
import writeMeIconRu from "../../assets/writeMeIconRu.svg";
import SiteTypes from "../../components/SiteTypes/SiteTypes";
import { useSiteTypesData } from "../../helpers/siteTypes";
import { useTranslation, Trans } from "next-i18next";
import Modal from "../../components/ModalWindow/ModalWindow";

const CostAndTermsPage = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const siteTypes = useSiteTypesData();

  return (
    <div className={styles.cardAndTermsContainer}>
      <div className={styles.cardAndTermsWrap}>
        <div className={styles.cardAndTermsInfoContainer}>
          <div className={styles.cardAndTermsInfoWrap}>
            <div>
              <p className={styles.cardAndTermsNumber}>05</p>
              <h2 className={styles.cardAndTermsTitle}>
                {t("titles.costAndTerms")}
              </h2>
              <p className={styles.cardAndTermsText}>
                <Trans i18nKey="subtitles.costAndTermsSubtitle">
                  The cost and duration of work vary depending on the request
                  and details of the project, so for calculation you must
                  <button
                    className={styles.cardAndTermsContactMe}
                    onClick={() => setOpen(!open)}
                  >
                    contact me
                  </button>
                  and discuss the project:)
                </Trans>
              </p>
            </div>
            <div className={styles.cardAndTermsHeaderLinkWrap}>
              <div className={styles.cardAndTermsWriteMeIcon}>
                {i18n.language === "ru" ? (
                  <Image src={writeMeIconRu} alt={""} />
                ) : (
                  <Image src={writeMeIcon} alt={""} />
                )}
                <Link
                  style={{ textDecoration: "none" }}
                  href={
                    "https://www.instagram.com/akiv.ui.ux?igsh=MTdvZmV5azlxM3BxcA=="
                  }
                >
                  <p className={styles.cardAndTermsHeaderLinkInst}>instagram</p>
                </Link>
              </div>
              <Link
                style={{ textDecoration: "none" }}
                href={
                  "https://www.linkedin.com/in/viktoriya-volozhinskaya-415145260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apphttps://www.linkedin.com/in/viktoriya-volozhinskaya-415145260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
              >
                <p className={styles.cardAndTermsHeaderLink}>linkedin</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.cardAndTermsCards}>
          {siteTypes.map((i) => (
            <div className={styles.cardAndTermsCard} key={i.text}>
              <SiteTypes
                title={i.title}
                type={i.type}
                text={i.text}
                price={i.price}
                days={i.days}
                key={i.price}
              />
            </div>
          ))}
        </div>
      </div>
      {open && <Modal isOpen={open} onClose={() => setOpen(!open)} />}
    </div>
  );
};

export default CostAndTermsPage;
