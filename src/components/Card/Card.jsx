import React from 'react'
import styles from './styles.module.scss'
export default function Card({item}) {

  return (
    <main>
      <div className={styles.card}>
          <h3 className={styles.card_title}>{item.title}</h3>
          <span className={styles.card_date}>{item.date}</span>
          <p className={styles.card_desc}>{item.desc}</p>
      </div>
    </main>
  )
}
