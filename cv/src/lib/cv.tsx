import { Header, Footer } from '@fearne-york-portfolio/components';
import { Link } from 'react-router-dom';
import styles from './cv.module.scss';

/* eslint-disable-next-line */
export interface CvProps {}

function Content () {
  return (
    <div className={styles['content-container']}>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export function Cv(props: CvProps) {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Cv;
