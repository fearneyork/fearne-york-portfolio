import styles from './Typography.module.scss';

export interface IBodyProps {
  content: string;
};

export function Body(props: IBodyProps) {
  const { content } = props;
  return (
    <p className={styles['body']}>
      { content }
    </p>
  );
};

