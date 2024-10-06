import { useTranslation } from 'react-i18next';

export const useSiteTypesData = () => {
  const { t } = useTranslation();

  const siteTypes = [
    {
      title: t('siteTypesCard.01.title'),
      type: t('siteTypesCard.01.type').split(','),
      text: t('siteTypesCard.01.text'),
      price: t('siteTypesCard.01.price'),
      days: '2',
    },
    {
      title: t('siteTypesCard.02.title'),
      type: t('siteTypesCard.02.type').split(','),
      text: t('siteTypesCard.02.text'),
      price: t('siteTypesCard.02.price'),
      days: '10',
    },
    {
      title: t('siteTypesCard.03.title'),
      type: t('siteTypesCard.03.type').split(','),
      text: t('siteTypesCard.03.text'),
      price: t('siteTypesCard.03.price'),
      days: '20',
    },
  ];

  return siteTypes;
};
