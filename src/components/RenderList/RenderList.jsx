import React from 'react'
import list from '/src/app/json'
import Card from '../Card/Card'
import styles from './styles.module.scss'

export default function RenderList() {
    const myUser = JSON.parse(localStorage.getItem('user'))    
    return (
        <div className={styles.container}>
            {list.map(item=> <Card item={item}/> )}
        </div>
    )
}
