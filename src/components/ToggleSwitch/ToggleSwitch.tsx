import React from 'react';
import styles from './ToggleSwitch.module.css';
import { useTranslation } from 'next-i18next';
import { ToggleSwitchProps } from '../../types/components/ComponentsTypes';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onSwitchChange,
}) => {
  const handleChange = () => {
    onSwitchChange(!isChecked);
  };

  const { t } = useTranslation();

  return (
    <div className={styles.switchWrap}>
      <label className={styles.switch}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className={styles.slider}></span>
      </label>
      <p className={styles.switchTitle}>
        {t('toggleSwitch.spark')}{' '}
        <span className={styles.switchSpan}>{t('toggleSwitch.creative')}</span>{' '}
        {t('toggleSwitch.onWeb')}
      </p>
    </div>
  );
};

export default ToggleSwitch;
