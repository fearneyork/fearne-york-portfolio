import styles from './Typography.module.scss';

export interface ITypographyProps {
  content: string | JSX.Element;
};

export function Body(props: ITypographyProps) {
  const { content } = props;
  return (
    <p className={styles['body']}>
      { content }
    </p>
  );
};

export function Title(props: ITypographyProps) {
  const { content } = props;
  return (
    <p className={styles['title']}>
      { content }
    </p>
  );
};

