import React, { useEffect } from 'react'

// import Search from "../../styles/assets/img/search.svg"
import logo from "../../styles/assets/img/purpleLogo.svg"
import iphone12 from "../../styles/assets/img/iPhone-12.svg" 
import Arrow from "../../styles/assets/img/Arrow.svg"
import blackLogo from "../../styles/assets/img/blacklogo.svg"
import ArrowPurple from "../../styles/assets/img/Arrowpurple.svg"
import imageF from "../../styles/assets/img/image 1.svg"
import smallLogo from "../../styles/assets/img/smalllogo.svg"
import { useRouter } from 'next/router'
import { useState } from 'react'

const ReturnPickup = () => {

    const [data,setData]=useState({})

    const router=useRouter()
    useEffect(()=>{  setData(router.query)},[])


  

    

  return (
    <>


<section class="main-wrpper returnpickpage">
        
        <div class="main-wrp-content">
            <div class="main-wrp-continner">
             



                <div class="logo-container">
                    <img src={imageF.src} alt="yourlogo"/>
                    <span></span>
                    <img src={blackLogo.src} class="blacklogo" alt="logo"/>
                </div>

                <div class="paragraph">
                    <p>
                        Hi There,
                        <br/><br/>
                        We hope you love your <i>{router.query.brand}</i> purchase. But in case you don’t, you can return any
                        purchase
                        within {router.query.returnDay} Days.
                    </p>
                </div>

                <div class=" button-container">
                    <a href="#" class="returnoption">
                        <span> Return by Mail</span>
                        <span> {router.query.returnDay} Days</span>
                    </a>

                    <a href="#" class="returnoption">
                        <span>Return in Store</span>
                        <span>{router.query.returnDay} Days</span>
                    </a>

                </div>

                <a onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/components/Schedule',
        query:router.query
         })
                }} class="com-button returnoption returntag">
                    <span>
                        <img src={smallLogo.src} class="arrowimg" alt="arrow"/>
                        <span class="getreturn"> Get returns picked up at your door</span> 
                    </span>

                    <span>
                    {router.query.returnDay} Days
                    </span>
                </a>

            </div>
        </div>
    </section>

    </>
  )
}

export default ReturnPickup