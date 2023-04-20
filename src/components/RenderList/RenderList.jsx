import React from 'react'
import list from '/src/app/json'
import Card from '../Card/Card'
import styles from './styles.module.scss'

export default function RenderList() {
    let myUser = []
    if(localStorage.hasOwnProperty('users')){
        myUser = JSON.parse(localStorage.getItem('users'))       
    }
    return (
        <div className={styles.container}>
            {list.map(item=> <Card key={item.id} item={item}/> )}
            
            {myUser !== undefined ?  myUser.map(item=> <Card key={item.id}item={item}/>) : ''}
        </div>
    )
}
