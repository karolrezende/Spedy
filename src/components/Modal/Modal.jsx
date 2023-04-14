import React, { useState } from 'react'
import styles from './styles.module.scss'

export default function Modal({setActive}) {
  const date = new Date().toLocaleDateString();
  const [user, setUser] = useState([])
  const [nowUser, setNowUser] = useState([])
  const [title, setTitle] = useState('')
  const [clean, setClean] = useState('')
  const oldItems = JSON.parse(localStorage.getItem('user'))
  let id = 0 ;
  const [desc, setDesc] = useState('')
  function isActive(){
    setActive(false)
  }

  function handleClick(){
    id = nowUser.id+id
    console.log(nowUser.id)
    if(title !='' && desc != '' ){
      console.log(title, nowUser)
      setNowUser([{
        id, 
        title,
        date,
        desc
      }])
      setUser([...user, nowUser])
      //console.log(oldItems)
        if(oldItems != null){
          setUser([...oldItems])
        }
      user.map(us=>{
      if(us !== []){
        localStorage.setItem('user', JSON.stringify(user))
    }
      })
    }
    else{
      console.log('ois')
    }
  }
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
