import React from 'react'
import styles from './styles.module.scss'

export default function Modal({setActive}) {
  function isActive(){
    setActive(false)
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modal_main}>
        <div className={styles.modal_main_header}>
          <h2>Criar um classificado</h2>
          <button onClick={()=> isActive()}>X</button>
        </div>
        <div className={styles.modal_main_container}>
          <input type="text" placeholder='Digite o titulo' />
          <input type="text" placeholder='Digite a descrição' />
          <div className={styles.modal_main_container__button}>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
