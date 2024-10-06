import { useTranslation } from 'react-i18next';
import starIcon from '../assets/starIcon.svg';
export const useWorkStepsData = () => {
  const { t } = useTranslation();

  const workSteps = [
    {
      title: t('workStepsCards.01.title'),
      text: t('workStepsCards.01.text'),
      number: '01',
      type: 'white',
    },
    {
      title: t('workStepsCards.02.title'),
      text: t('workStepsCards.02.text'),
      number: '02',
      type: 'black',
    },
    {
      title: t('workStepsCards.03.title'),
      text: t('workStepsCards.03.text'),
      number: '03',
      type: 'white',
    },
    {
      title: t('workStepsCards.04.title'),
      text: t('workStepsCards.04.text'),
      number: '04',
      type: 'orange',
    },
    {
      title: t('workStepsCards.05.title'),
      text: t('workStepsCards.05.text'),
      number: '05',
      type: 'white',
    },
    {
      title: t('workStepsCards.06.title'),
      text: t('workStepsCards.06.text'),
      number: '06',
      type: 'black',
    },
    {
      title: t('workStepsCards.07.title'),
      text: t('workStepsCards.07.text'),
      number: starIcon,
      type: 'question',
    },
  ];

  return workSteps;
};
