import Image from 'next/image';
import cn from 'classnames';
import styles from './WorkSteps.module.css';
import legWhiteIcon from '../../assets/legWhiteIcon.svg';
import legOrangeIcon from '../../assets/legOrangeIcon.svg';
import questionIcon from '../../assets/questionIcon.svg';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { WorkStepsProps } from '../../types/components/ComponentsTypes';

const WorkSteps = ({
  title,
  text,
  type,
  number,
  open,
  setOpen,
}: WorkStepsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={cn(
          styles.whiteBlock,
          { [styles.orangeBlock]: type === 'orange' || type === 'question' },
          { [styles.blackBlock]: type === 'black' },
        )}
      >
        <div className={styles.workStepsWrap}>
          <div className={styles.workStepsCardHeader}>
            <Image
              src={
                type === 'question'
                  ? questionIcon
                  : type === 'white'
                    ? legOrangeIcon
                    : legWhiteIcon
              }
              alt={''}
            />
            {type !== 'question' ? (
              <p
                className={cn(styles.whiteBlockNumber, {
                  [styles.numberBlock]: type === 'orange' || type === 'black',
                })}
              >
                {number}
              </p>
            ) : (
              <Image src={number} alt={''} />
            )}
          </div>
          <div>
            <h3
              className={cn(
                styles.whiteBlockTitle,
                {
                  [styles.titleBlock]: type === 'orange' || type === 'black',
                },
                { [styles.questionBlock]: type === 'question' },
              )}
            >
              {title}
            </h3>
            <p
              className={cn(styles.whiteBlockText, {
                [styles.textBlock]:
                  type === 'orange' || type === 'black' || type === 'question',
              })}
            >
              {text}
            </p>
            {type === 'question' && (
              <Button
                onClick={() => setOpen(!open)}
                text={t('modal.contactButton')}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkSteps;
