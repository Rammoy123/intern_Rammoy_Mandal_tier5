import logo from "../../styles/assets/img/purpleLogo.svg"
import LogoOrg from "../../styles/assets/img/Logo.svg"
import iphone12 from "../../styles/assets/img/iPhone-12.svg" 
import Arrow from "../../styles/assets/img/Arrow.svg"
import blackLogo from "../../styles/assets/img/blacklogo.svg"
import ArrowPurple from "../../styles/assets/img/Arrowpurple.svg"
import imageF from "../../styles/assets/img/image 1.svg"
import { useRouter } from 'next/router'

const Shopping = () => {
    const router = useRouter()

    console.log(router.query,"query in")

    const handleBar = e => {
  
        e.preventDefault()
        // router.push( "/component/Testing2"
        // )
    
        router.push({
          pathname: '/components/Perks'
           }
      )
      }


  return (
    <>

<section class="main-wrpper shopping-container">
       
       <div class="main-wrp-content" >
           <div class="main-wrp-continner">
               <a onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/components/Home1'
         })
                }} class=" top-logo-container" >
                   <img src={logo.src} alt="logo"/>
               </a>



               <div class="logo-container">
                   <img src={imageF.src} alt="yourlogo"/>
                   <span></span>
                   <img src={blackLogo.src} class="blacklogo" alt="logo"/>
               </div>


               <div class="all-set">
                   <h2>You’re all set!</h2>
                   <p>Your items will be collected <span>{router.query.Day} {router.query.Time}</span></p>
               </div>

               <div class="wasnt-easy">
                   <h5>Wasn’t that easy?</h5>
                   <p>Browse more to enjoy your next shopping experience with <span> {router.query.Brand} </span></p>
               </div>



               <a onClick={handleBar} class="com-button">
                   Countinue Shopping 
               </a>

           </div>
       </div>
   </section>
    </>
  )
}

export default Shopping