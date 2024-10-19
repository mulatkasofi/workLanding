"use client";
import { useTranslation } from "react-i18next";
import styles from "./Menu.module.css";
import arrowIcon from "../../assets/arrowIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { MenuProps } from "../../types/components/ComponentsTypes";

const Menu: React.FC<MenuProps> = ({ closeMenu }) => {
  const { t } = useTranslation();

  const renderMenuItem = (text: string, link: string) => (
    <Link
      href={link}
      scroll={true}
      passHref
      style={{ textDecoration: "none", cursor: "pointer" }}
      onClick={closeMenu}
    >
      <div className={styles.menuItemWrap}>
        <p className={styles.menuItemText}>{text}</p>
        <Image src={arrowIcon} alt={""} />
      </div>
    </Link>
  );

  return (
    <div className={styles.menuWrap}>
      {renderMenuItem(t("menu.portfolio"), "#work")}
      {renderMenuItem(t("menu.work_steps"), "#work-steps")}
      {renderMenuItem(t("menu.reviews"), "#reviews")}
      {renderMenuItem(t("menu.price"), "#cost-and-terms")}
      {renderMenuItem(t("menu.faq"), "#faq")}
    </div>
  );
};

export default Menu;
