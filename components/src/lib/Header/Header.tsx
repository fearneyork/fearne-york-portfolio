import { Link } from 'react-router-dom';
import { Title } from '../Typography/Typography';
import styles from './Header.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHeaderProps {}

export function Header (props: IHeaderProps) {
  return (
      // TODO: fix undline showing on title
    <div className={styles['header-container']}>
        <Title content={
          <Link to='/'>Fearne York</Link>
        }/>
    </div>
  );
};