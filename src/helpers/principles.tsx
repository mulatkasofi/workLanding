import { useTranslation } from 'react-i18next';

export const usePrinciplesData = () => {
  const { t } = useTranslation();

  const principles = [
    {
      text: t('principlesCard.01.text'),
      rotation: '-12deg',
    },
    {
      text: t('principlesCard.02.text'),
      rotation: '12deg',
    },
    {
      text: t('principlesCard.03.text'),
      rotation: '0',
    },
    {
      text: t('principlesCard.04.text'),
      rotation: '0',
    },
  ];

  return principles;
};
