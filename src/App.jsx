import { useState } from "react"
import RenderList from "./components/RenderList/RenderList"
import styles from './styles.module.scss'
import Modal from "./components/Modal/Modal"

function App() {
  const [active, setActive] = useState(false)
  function isActive(){
    setActive(true)
  }
  return (
    <div className={styles.main}>
      <div className={styles.main_header}>
        <h1 className={styles.main_title}>Classificados</h1>
        <button className={styles.main_button} onClick={()=>isActive()}>+ Novos Classificados</button>
      </div>
      <RenderList/>
      {active ? <Modal setActive={setActive}/> : ''}
    </div>
  )
}

export default App
