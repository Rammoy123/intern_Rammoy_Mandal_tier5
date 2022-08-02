import React from 'react'
import {BiChevronLeft} from "react-icons/bi";
import style from "../styles/assets/css/Seeperks.module.css"
import { useRouter } from 'next/router'


const Demo = () => {

  

  const router=useRouter()
  console.log(router,"routerrr")
  const handleBar1 = e => {
  
    
    e.preventDefault()
  
if((router.query.slug) &&(router.query.returnDay) &&(router.query.IdealInInventory)){
 
 console.log(router,"router inside")
    router.push({
      pathname: '/[Perks].js',
       query:{ slug: router.query.slug,
        returnDay:router.query.returnDay ,
        IdealInInventory: router.query.IdealInInventory}
       
       }
  )
      }

      else if((router.query.slug) && (router.query.Day) && (router.query.Time)){

        e.preventDefault()
        console.log('eeeee')
        // router.push( "/component/Testing2"
        // )
    
        router.push({
          pathname: '/Shopping',
          query: {
            Day: router.query.Day,
            Time: router.query.Time,
            slug: router.query.slug
          }
        })

      }

      else{
        router.push({
          pathname: '/[Perks].js',
           query:{ slug: router.query.slug}
            
           
           }
      )

      }
  }


  


  console.log("rammoy i am demo")
  return (
    <>
      <div className={style.p}>

<div className={style.parent}>
<div className={style.child}>


<a onClick={handleBar1}>  <BiChevronLeft style={{fontSize:"25px",color:"black",zIndex: 5}}/> </a>


</div>



</div>
{/* <div className='absolute' style={{position:'relative',top:'10px',left:'20%',zIndex:'5'}} >
<BsFillArrowLeftCircleFill/>

</div> */}
{/* frameborder="0" allowfullscreen */}
{/* scrolling="no" */}

<div className={style.inner1}>

  <iframe allowFullScreen  frameBorder="0"     style={{ margin:0,width:'100%',height:'100%'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnlKO65MZgENWa06NykfkSo%2FDemo-Prototype%3Fpage-id%3D333%253A4827%26node-id%3D333%253A5583%26viewport%3D1619%252C341%252C0.25%26scaling%3Dscale-down%26starting-point-node-id%3D333%253A5600" />
   
 






</div>
</div>
  


    
    </>
  )
}

export default Demo