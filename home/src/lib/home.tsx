import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { Footer } from '../../../components/src/index'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['background']}>
      <h1>Welcome to Home!</h1>
          <Link to="/cv">View CV</Link>
          <Footer />
    </div>
  );
}

export default Home;
