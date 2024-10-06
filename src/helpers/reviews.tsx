import { useTranslation } from 'react-i18next';

export const useReviewsData = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      title: 'CR1M3N37',
      text: t('reviewsCard.01.text'),
      rotation: '6deg',
    },
    {
      title: 'Dmitri_AT',
      text: t('reviewsCard.02.text'),
      rotation: '3deg',
    },
    {
      title: 'Ilya3250',
      text: t('reviewsCard.03.text'),
      rotation: '0',
    },
    {
      title: 'Yurii481',
      text: t('reviewsCard.04.text'),
      rotation: '-6deg',
    },
    {
      title: 'Oleff',
      text: t('reviewsCard.05.text'),
      rotation: '6deg',
    },
  ];

  return reviews;
};
