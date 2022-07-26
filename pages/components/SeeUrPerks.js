import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {BiChevronLeft} from "react-icons/bi";
import style from "../../styles/assets/css/Seeperks.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'





const SeeUrPerks = () => {
    const router=useRouter()





    console.log(router.query)
    const handleBar1 = e => {
        // Object.assign(inputValue,{retur})
    
      e.preventDefault()
      // router.push( "/component/Testing2"
      // )
  
      router.push({
        pathname: '/[Perks].js',
         query:{brand:router.query.brand}
         
         }
    )
    }
  return (
    
 
  <div className={style.p}>

  <div className={style.parent}>
  <div className={style.child}>
  
  <Link href={{pathname:'/[Perks].js',query:{brand:router.query.brand}}}>
  <a> <BiChevronLeft style={{fontSize:"25px",color:"black",zIndex: 5}}/> </a>
</Link>

</div>

  

  </div>
  {/* <div className='absolute' style={{position:'relative',top:'10px',left:'20%',zIndex:'5'}} >
  <BsFillArrowLeftCircleFill/>

  </div> */}
  {/* frameborder="0" allowfullscreen */}
  {/* scrolling="no" */}
  
<div className={style.inner}>

  <iframe allowFullScreen  frameBorder="0"     style={{ margin:0,width:'100%',height:'100%'}} src="https://returnqueen.com/" />,
 </div>
 </div>
    
  )
}

export default SeeUrPerks

