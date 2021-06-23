import React from 'react'
import styles from './index.less'
import Layout from '@/components/Layout'

const App = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.parent}>
          <div className={`${styles.colorfulShadow} ${styles.sushi}`}></div>
        </div>
      </div>
    </Layout>
  )
}
export default App
