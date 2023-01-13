import styles from './Widget.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IWidget {};

export function Widget(props: IWidget) {
  return (
<div className={styles['widget-container']}>

</div>
  );
};
