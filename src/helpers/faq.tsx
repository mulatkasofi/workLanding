import { useTranslation } from 'react-i18next';

export const useFaqData = () => {
  const { t } = useTranslation();

  const faq = [
    {
      title: t('faq.01.title'),
      question: t('faq.01.question'),
      number: '01',
    },
    {
      title: t('faq.02.title'),
      question: t('faq.02.question'),
      number: '02',
    },
    {
      title: t('faq.03.title'),
      question: t('faq.03.question'),
      number: '03',
    },
    {
      title: t('faq.04.title'),
      question: t('faq.04.question'),
      number: '04',
    },
  ];

  return faq;
};
