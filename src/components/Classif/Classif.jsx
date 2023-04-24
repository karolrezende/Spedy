import React from 'react'
import styles from './styles.module.scss'
export default function Classif() {
    const local = JSON.parse(localStorage.getItem('users'))
    let item
    if(local === null){
        item = 12;
        
    }else
    {
        item = 12 + local.length
    }
    
  return (
    <div className={styles.div}>{item} Classificados</div>
  )
}
