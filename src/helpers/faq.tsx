import { useTranslation, Trans } from "react-i18next";
import styles from "./styles.module.css";
export interface IUseFaqData {
  onClick: () => void;
}

export const useFaqData = ({ onClick }: IUseFaqData) => {
  const { t } = useTranslation();

  const faq = [
    {
      title: t("faq.01.title"),
      question: (
        <Trans i18nKey={"faq.01.question"}>
          You can always{" "}
          <button className={styles.contact} onClick={onClick}>
            contact me
          </button>{" "}
        </Trans>
      ),
      number: "01",
    },
    {
      title: t("faq.02.title"),
      question: t("faq.02.question"),
      number: "02",
    },
    {
      title: t("faq.03.title"),
      question: t("faq.03.question"),
      number: "03",
    },
    {
      title: t("faq.04.title"),
      question: (
        <Trans i18nKey={"faq.04.question"}>
          To find out the cost please{" "}
          <button className={styles.contact} onClick={onClick}>
            contact me
          </button>
        </Trans>
      ),
      number: "04",
    },
  ];

  return faq;
};
