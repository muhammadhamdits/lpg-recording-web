import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Modal({ handleShowModal }) {
  const [type, setType] = useState(null)

  const handleCloseModal = (event) => {
    if(event.target === event.currentTarget) handleShowModal()
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  return (
    <div className={styles.modalOverlay} onClick={handleCloseModal}>
      <div className={styles.modal}>
        <select className={styles.inputText} onChange={handleTypeChange}>
          <option value="deliver">Masuk</option>
          <option value="pickup">Keluar</option>
        </select>
        <input type="text" placeholder="Nama" className={styles.inputText} />
        <input type="number" placeholder="Banyak" className={styles.inputText} />
        <button className={`${styles.button} ${styles.floatRight}`}>Simpan</button>
      </div>
    </div>
  )
}