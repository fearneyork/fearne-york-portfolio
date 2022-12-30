import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { Footer, Header } from '../../../components/src/index'

/* eslint-disable-next-line */
export interface HomeProps {}

function Content () {
  return (
    <div className={styles['content-container']}>
      <Link to="/cv">View CV</Link>
    </div>
  )
}

export function Home(props: HomeProps) {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Home;
