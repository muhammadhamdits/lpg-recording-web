import styles from '../styles/Home.module.css'

const formatDate = (date) => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.toLocaleString('default', { month: 'long' })
  const day = d.getDate()
  return `${day} ${month} ${year}`
}

const RestockItem = ({ filled, restock }) => {
  // console.log(restock)
  const conditionalStyles = `${styles.listItem} ${filled ? styles.bgBlue : ''}`
  const date = formatDate(restock.date)

  return (
    <div className={conditionalStyles}>
      <div className={styles.grid}>
        <h2 className={styles.flex}>{ date } ({ restock.quantity })</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.flex2}>
          <p>Jumlah tabung masuk : {restock.totalDeliver}</p>
          <p>Jumlah tabung keluar : {restock.totalPickup}</p>
        </div>
        <div className={`${styles.flex} ${styles.alignRight}`}>
          <h1>{restock.restFilled} | {restock.restEmpty}</h1>
        </div>
      </div>
    </div>
  )
}

export default RestockItem