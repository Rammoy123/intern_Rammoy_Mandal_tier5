import logo from "../styles/assets/img/purpleLogo.svg"
import LogoOrg from "../styles/assets/img/Logo.svg"
import iphone12 from "../styles/assets/img/iPhone-12.svg" 
import Arrow from "../styles/assets/img/Arrow.svg"
import blackLogo from "../styles/assets/img/blacklogo.svg"
import ArrowPurple from "../styles/assets/img/Arrowpurple.svg"
import imageF from "../styles/assets/img/image 1.svg"
import { useRouter } from 'next/router'
import db from './components/Json/retailers.json'
import Link from 'next/link'

const Shopping = () => {
    const router = useRouter()

    console.log(router.query,"query in")

    const handleBar = e => {
  
        e.preventDefault()
        // router.push( "/component/Testing2"
        // )
    console.log(e,"eeeeeeeeeeee")
        router.push({
          pathname: '/Home1'
           }
      )
      }


  return (
    <>

<section className="main-wrpper shopping-container">
       
       <div className="main-wrp-content" >
           <div className="main-wrp-continner">
               <a onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/components/Home1'
         })
                }} className=" top-logo-container" >
                   <img src={logo.src} alt="logo"/>
               </a>



               <div className="logo-container">
                   
               {
(router.query.Brand) && (
                  db.map((arr)=>{
                    {/* console.log(onlyBrand.Perks,"inside everything") */}
                    {/* console.log(arr.name,onlyBrand.Perks ,"inside me") */}
                    
                    if(router.query.Brand==arr.name){
                      console.log(router.query.Brand,"inside everything")
                   
                      
                      return(
                    <img  key={arr.id} src={arr.img_thumbnail} width="135"   alt="yourlogo"/>
                      )
                    }
                  }))
                }
                   <span></span>
                   <img src={blackLogo.src} className="blacklogo" alt="logo"/>
               </div>


               <div className="all-set">
                   <h2>You’re all set!</h2>
                   <p>Your items will be collected <span>{router.query.Day} {router.query.Time}</span></p>
               </div>

               <div className="wasnt-easy">
                   <h5>Wasn’t that easy?</h5>
                   <p>Browse more to enjoy your next shopping experience with <span> {router.query.Brand} </span></p>
               </div>

               

               <a style={{background:'#8755DE',cursor:'pointer',textDecoration:'none',color:'white'}} onClick={handleBar}   className="com-button">
                   Countinue Shopping 
               </a>
               

           </div>
       </div>
   </section>
    </>
  )
}

export default Shopping