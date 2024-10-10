"use client";

import styles from "./PreviewPage.module.css";
import userPhoto from "../../img/viktoria.png";
import Image from "next/image";
import cn from "classnames";
import fireIcon from "../../img/fire.png";
import { useState } from "react";
import roundIcon from "../../img/элипсы фон 1 экран.png";
import Header from "../../components/Header/Header";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import { useTranslation } from "react-i18next";
import fireIconAdaptive from "../../img/fire (1).png";

const PreviewPage = () => {
  const { t, i18n } = useTranslation();
  const [switchState, setSwitchState] = useState(false);
  const handleSwitchChange = (
    newState: boolean | ((_prevState: boolean) => boolean)
  ) => {
    setSwitchState(newState);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const renderLanguageBlock = () => (
    <div className={styles.languageBlock}>
      <button
        className={cn(styles.languageText, {
          [styles.languageTextCLick]: i18n.language === "ru",
        })}
        onClick={() => changeLanguage("ru")}
      >
        ru
      </button>
      <p className={styles.infoElementText}>/</p>
      <button
        className={cn(styles.languageText, {
          [styles.languageTextCLick]: i18n.language === "en",
        })}
        onClick={() => changeLanguage("en")}
      >
        en
      </button>
    </div>
  );

  const renderInfoElements = () => (
    <div>
      <p className={styles.infoElementText}>
        <span className={styles.infoElementSpan}>{">"}</span>{" "}
        {t("preview.experience")}
      </p>
      <p className={styles.infoElementText}>
        <span className={styles.infoElementSpan}>{">"}</span>{" "}
        {t("preview.layouts")}
      </p>
    </div>
  );

  return (
    <div className={styles.previewPageContainer}>
      <Image
        src={roundIcon}
        alt=""
        className={cn(styles.previewPageImage, {
          [styles.showImage]: switchState,
        })}
        style={{ color: "white", width: "100%" }}
      />

      <div className={cn(styles.fireIcon, { [styles.animate]: switchState })}>
        <Image
          src={fireIcon}
          alt="Fire Icon"
          className={styles.fireIconImage}
          id="fire"
        />
        <Image
          src={fireIconAdaptive}
          alt="Fire Icon"
          className={styles.fireIconAdaptive}
        />
      </div>
      <div className={styles.previewPageWrap}>
        <Header />
        <div className={styles.languageAdaptive}>{renderLanguageBlock()}</div>
        <h1 className={styles.previewPageTitle}>
          {t("preview.greeting")}{" "}
          <span className={styles.previewPageSpan}>
            {t("preview.jobTitle")}
            <span className={styles.userImageAdaptive}>
              <Image
                src={userPhoto}
                alt={""}
                className={cn(styles.userPhotoAdaptive, {
                  [styles.rotate]: switchState,
                })}
              />{" "}
              {t("preview.name")}
            </span>
          </span>
          <span className={styles.previewPageBlock}>
            <span className={styles.previewPageSpanName}>
              {t("preview.name")}
            </span>
            <Image
              src={userPhoto}
              alt={""}
              className={cn(styles.userPhoto, {
                [styles.rotate]: switchState,
              })}
            />

            <span className={styles.lovesPerfectAdaptive}>
              {t("preview.lovesPerfectAdaptive")}
            </span>
            <span className={styles.lovesPerfect}>
              {t("preview.lovesPerfect")}
            </span>

            <span className={styles.previewPageSpanRight}>
              <span className={styles.andComfortable}>
                {" "}
                {t("preview.andComfortable")}
              </span>
              {i18n.language === "ru" && (
                <span className={styles.andComfortableRU}>
                  {t("preview.andComfortableAdaptive")}
                </span>
              )}
              <span className={styles.previewPageInfoBlock}>
                <span className={styles.infoElements}>
                  {renderInfoElements()}
                </span>
                {t("preview.design")}
                <span className={styles.infoElementsAdaptive}>
                  {renderInfoElements()}
                </span>
                <span className={styles.language}>{renderLanguageBlock()}</span>
              </span>
            </span>
          </span>
        </h1>
        <ToggleSwitch
          isChecked={switchState}
          onSwitchChange={handleSwitchChange}
        />
      </div>
    </div>
  );
};

export default PreviewPage;
