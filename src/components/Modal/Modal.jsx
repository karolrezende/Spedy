import React, { useState } from 'react'
import styles from './styles.module.scss'

export default function Modal({setActive}) {
  const date = new Date().toLocaleDateString();
  const [user, setUser] = useState([])
  const [nowUser, setNowUser] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('') 
  const [clean, setClean] = useState('')

  let oldItems = []
  let id = 0 ;
  function isActive(){
    setActive(false)
  }

  function handleClick(){
    if(title != '' && desc != ''){
      setNowUser([{
        title,
        date,
        desc
      }])
      if(localStorage.hasOwnProperty('users')){
        const users = JSON.parse(localStorage.getItem('users'))
        localStorage.setItem('users', JSON.stringify([...users, nowUser]))
      }else{
        localStorage.setItem('users', JSON.stringify(nowUser))
      }
      
    }
  }

  // const useres = JSON.parse(localStorage.getItem('users'))
  // console.log(useres)

  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_main}>
        <div className={styles.modal_main_header}>
          <h2>Criar um classificado</h2>
          <button onClick={()=> isActive()}>X</button>
        </div>
        <form className={styles.modal_main_container} onSubmit={()=>handleSubmit(event)}>
          <input type="text" placeholder='Digite o titulo' onChange={(e)=> setTitle(e.target.value)}/>
          <input type="text" placeholder='Digite a descrição' onChange={(e)=> setDesc(e.target.value) }/>
          <div className={styles.modal_main_container__button}>
            <button onClick={()=>handleClick()}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
