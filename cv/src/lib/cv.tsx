import styles from './cv.module.scss';

/* eslint-disable-next-line */
export interface CvProps {}

export function Cv(props: CvProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cv!</h1>
    </div>
  );
}

export default Cv;
