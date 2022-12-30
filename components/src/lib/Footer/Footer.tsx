import { Body } from '../Typography/Typography';
import styles from './Footer.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFooterProps {}

export function Footer (props: IFooterProps) {
  return (
    <div className={styles['footer']}>
      <Body content='Fearne C. York @ 2023'/>
      <Body content='Socials'/>
    </div>
  )
}

export default Footer;
