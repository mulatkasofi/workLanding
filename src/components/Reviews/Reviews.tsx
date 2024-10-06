import Image from 'next/image';
import styles from './Reviews.module.css';
import starsIcon from '../../img/Frame 337230.png';
import { ReviewsProps } from '../../types/components/ComponentsTypes';

const Reviews = ({ title, text, rotation }: ReviewsProps) => (
  <div
    className={styles.reviewContainer}
    style={{ transform: `rotate(${rotation})` }}
  >
    <div className={styles.reviewRating}>
      <Image src={starsIcon} alt={''} />
    </div>
    <div>
      <h3 className={styles.reviewTitle}>{title}</h3>
      <p className={styles.reviewText}>{text}</p>
    </div>
  </div>
);
export default Reviews;
