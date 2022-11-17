import styles from '../styles/Home.module.css'

const TransactionItem = () => {
  return (
    <div className={styles.listItem}>
      <div className={styles.grid}>
        <div className={styles.flex3}>
          <h2 className={styles.flex}>Ani Basauaaaaaaa</h2>
          <p>31 Desember 21:19</p>
        </div>
        <div className={`${styles.flex} ${styles.alignRight}`}>
          <h1>+23</h1>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem