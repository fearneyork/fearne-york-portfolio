import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { Footer } from '../../../components/src/index'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['background']}>
          <Link to="/cv">View CV</Link>
          <Footer />
    </div>
  );
}

export default Home;
