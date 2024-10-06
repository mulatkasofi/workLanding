import Image from 'next/image';
import styles from './PrinciplesCard.module.css';

import principleStar from '../../assets/principleStar.svg';
import { PrinciplesCardProps } from '../../types/components/ComponentsTypes';

const PrinciplesCard = ({ text, rotation }: PrinciplesCardProps) => (
  <div
    className={styles.principlesCardContainer}
    style={{ transform: `rotate(${rotation})` }}
  >
    <Image src={principleStar} alt={''} className={styles.principlesCardImg} />
    <p className={styles.principlesCardText}>{text}</p>
  </div>
);
export default PrinciplesCard;
