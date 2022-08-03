import React from 'react'
import loading from '../../styles/assets/img/loading.gif'
import style from "../../styles/assets/css/Seeperks.module.css"

const Loading = () => {
  return (
    <>
    <div className={style.loadingParent}>
   
    <img  src={loading.src} alt="Loading ...."/>

    
    
    </div>
    
    </>
  )
}

export default Loading