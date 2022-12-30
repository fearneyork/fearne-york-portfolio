// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cv } from '@fearne-york-portfolio/cv';
import {Link, Route, Routes} from 'react-router-dom'
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
      <Routes>
        <NxWelcome title="fearne-york-portfolio" />
        <div />
        <Route path="/" element={<Home />}></Route>
        <Route path="/cv" element={<Cv />}></Route>
      </Routes>
  );
}

export default App;


const Home = () => {
 return (
  <div className={styles['container']}>
    <Link to="/cv">View CV</Link>
  </div>
 )
}
