import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Toastify from '../Toastify/Toastify';

export default function Modal({setActive}) {
  const date = new Date().toLocaleDateString();
  const [nowUser, setNowUser] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [modal, setModal] = useState(false)
  const clean = ''
  function isActive(){
    setActive(false)
  }

  useEffect(()=>{
    if(localStorage.hasOwnProperty('users') && nowUser.length != 0){
      const users = JSON.parse(localStorage.getItem('users'))
      localStorage.setItem('users', JSON.stringify([...users, nowUser]))
    }else 
    if(nowUser.length != 0){
      localStorage.setItem('users', JSON.stringify([nowUser]))
    }    
  },[nowUser])

  function handleClick(){
    if(title !== '' && desc !== ''){
      setNowUser({
        id: crypto.randomUUID(),
        title,
        date,
        desc
      })
     
    }
  }
  function cleanner(){
   setTitle('')
   setDesc('')
  }
  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_main}>
        <Toastify/>
        <div className={styles.modal_main_header}>
          <h2>Criar um classificado</h2>
          <button onClick={()=> isActive()}>X</button>
        </div>
        <form className={styles.modal_main_container} onSubmit={()=>handleSubmit(event)}>
          <input type="text" placeholder='Digite o titulo' value={title} onChange={(e)=> setTitle(e.target.value)}/>
          <input type="text" placeholder='Digite a descrição' value={desc} onChange={(e)=> setDesc(e.target.value) }/>
          <div className={styles.modal_main_container__button}>
            <button onClick={()=>`${handleClick()}, ${cleanner()}` }>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}