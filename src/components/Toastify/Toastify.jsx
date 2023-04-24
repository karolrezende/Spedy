import React from 'react'
import styles from './styles.module.scss'
import icon from '../../../public/ok.png'
export default function Toastify() {
  return (
  <div className={styles.modal}>
    <div className={styles.modal_main}>
      <img src={icon} alt="icon" />
      <p>Adicionado com sucesso!</p>
    </div>
  </div>
  )
}
