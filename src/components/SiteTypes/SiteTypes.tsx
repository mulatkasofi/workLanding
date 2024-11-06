import Image from "next/image";
import styles from "./SiteTypes.module.css";
import arrowToContact from "../../assets/arrowToContact.svg";
import { SiteTypesProps } from "../../types/components/ComponentsTypes";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Modal from "../ModalWindow/ModalWindow";

const SiteTypes = ({ text, title, type, days, price }: SiteTypesProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.siteTypesWrap}>
      <div className={styles.siteTypeInfo} onClick={() => setOpen(!open)}>
        <h3 className={styles.siteTypeTitle}>{title}</h3>
        <div className={styles.siteTypes}>
          {type.map((i, index) => (
            <div className={styles.siteTypesLabel} key={index}>
              {i}
            </div>
          ))}
        </div>
        <p className={styles.siteTypeText}>{text}</p>
      </div>
      <div className={styles.siteTypeFooter}>
        <div className={styles.siteTypeTermsPrice}>
          <p className={styles.siteTypePrice}>
            {t("siteTypesCard.otherText.from")} {price}$
          </p>
          <p className={styles.siteTypeTerm}>
            {"//"} {t("siteTypesCard.otherText.from")} {days}{" "}
            {t("siteTypesCard.otherText.days")}
          </p>
        </div>
        <button
          className={styles.siteTypeButton}
          onClick={() => setOpen(!open)}
        >
          <Image src={arrowToContact} alt={""} />
        </button>
        {open && <Modal isOpen={open} onClose={() => setOpen(!open)} />}
      </div>
    </div>
  );
};
export default SiteTypes;
