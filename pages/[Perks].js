import React, { useEffect, useState } from 'react'
// import Search from "../../styles/assets/img/search.svg"
// import logo from "../../styles/assets/img/purpleLogo.svg"
import logo from "../styles/assets/img/purpleLogo.svg"

import iphone12 from "../styles/assets/img/iPhone-12.svg" 
import Arrow from "../styles/assets/img/Arrow.svg"
import blackLogo from "../styles/assets/img/blacklogo.svg"
import ArrowPurple from "../styles/assets/img/Arrowpurple.svg"
import imageF from "../styles/assets/img/image 1.svg"
import { useRouter } from 'next/router'
import { data } from 'jquery'


const Perks = () => {

    
 
    const [onlyBrand,setOnlyBrand]=useState({})
    const [onlyChecker,setOnlyChecker]=useState({})
    const router = useRouter()
    console.log(router.query,"query123")


    const [inputValue, setInputValue] = useState({
    
        return1: '',
        return2: ''
      })

      const changeBt = e => {
        // clear timeout when input changes value
    
        console.log(e.target.name,"valueee")
    
        const { name, value } = e.target
        setInputValue({
          ...inputValue,
          [name]: value
        })
    
      
      }

      console.log(inputValue,"inputtttt")

    // setOnlyChecker(router.query)
    

    useEffect(()=>{
        // const set=async=>{

     
            
        // }

        const set=(data)=>{

            if(data.perks)
            {
                
                setOnlyBrand({Perks:data.perks})

            }
            else{
                console.log(data.Perks,"heyy im not")

                setOnlyBrand({Perks:data.Perks})
            }
        }

        set(router.query)



    },[router.query])


    const handleBar = e => {
        // Object.assign(inputValue,{retur})
    
      e.preventDefault()
      // router.push( "/component/Testing2"
      // )
  
      router.push({
        pathname: '/components/ReturnPickup',
        query:{brand:onlyBrand.Perks,returnDay:inputValue.return1,pickUp:inputValue.return2} 
         }
    )
    }

  return (
    <>
    <section class="main-wrpper">
    {console.log(onlyBrand.Perks,"lolll")}
    
     {/* <h1> {data.Perks} </h1> */}
        <div class="main-wrp-mobile">
            <div class="main-wrp-mobile-inner">
                <img src={iphone12.src} alt="iPhone-12"/>
                <h2>Say hello to the <span>ultimate returns experience.</span></h2>
            </div>
         </div>
        <div class="main-wrp-content">
            <div class="main-wrp-continner">
                <a onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/components/Home1'
         })
                }} class="site-logo">
                    <img src={logo.src} alt="logo"/>
                </a>
            


                <div class="logo-container">
                    <img src={imageF.src} alt="yourlogo"/>
                    <span></span>
                    <img src={blackLogo.src} class="blacklogo" alt="logo"/>
                </div>

                <div class='input-form'>
                <label>How many days is your current return policy?</label>
                <input
                  type='text'
                  name='return1'
                  class='form-control date-form'
                  id='return1'
                  aria-describedby='emailHelp'
                  placeholder='ex.10'
                  value={inputValue.return1}
                  onChange={changeBt}
                  
                  onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false"
                />
                <p>Days</p>
              </div>
              <div class='input-form'>
                <label>
                  In how many days would you ideally like returned items to be
                  back in your inventory?
                </label>
                <input
                  type='text'
                  name='return2'
                  class='form-control date-form'
                  id='return2'
                  aria-describedby='emailHelp'
                  onChange={changeBt}
                  placeholder='ex.10'
                  value={inputValue.return2}
                 
                />
                <p>Days</p>
              </div>

                <div class="button-container">
                    <a href="#" class="">
                        Our App
                        <img src={ArrowPurple.src} class="arrowimg" alt="arrow"/>
                    </a>

                    <a onClick={handleBar} class="">
                        Your website with RQ
                        <img src={ArrowPurple.src} class="arrowimg" alt="arrow"/>
                    </a>

                </div>


                

               
                <a href="#" class="com-button parkbtn">
                    See your perks <img class="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a>

            </div>
        </div>
    </section>

    </>
  )
}

export default Perks