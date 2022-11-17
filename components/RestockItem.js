import styles from '../styles/Home.module.css'

const RestockItem = ({ filled }) => {
  const conditionalStyles = `${styles.listItem} ${filled ? styles.bgBlue : ''}`

  return (
    <div className={conditionalStyles}>
      <div className={styles.grid}>
        <h2 className={styles.flex}>17 November 2022 (80)</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.flex2}>
          <p>Jumlah tabung masuk : 87</p>
          <p>Jumlah tabung keluar : 36</p>
        </div>
        <div className={`${styles.flex} ${styles.alignRight}`}>
          <h1>44 | 43</h1>
        </div>
      </div>
    </div>
  )
}

export default RestockItem