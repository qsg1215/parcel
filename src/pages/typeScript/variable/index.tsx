import * as React from 'react';
import styles from './index.less';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}


function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className={styles.hello}>
      <div className={styles.greeting}>
        Hello  
      </div>
    </div>
  );
}

export default Hello;