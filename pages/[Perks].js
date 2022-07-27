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
import Image from 'next/image'
import db from './components/Json/retailers.json'



const Perks = () => {

    
 
    const [onlyBrand,setOnlyBrand]=useState({})
    const [onlyChecker,setOnlyChecker]=useState({})
    const [data,setData]=useState({})


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

            if(data.brand)
            {
                
                setOnlyBrand({Perks:data.brand})

            }
            else{
                console.log(data.Perks,"heyy im not")

                setOnlyBrand({Perks:data.Perks})
            }
        }

        set(router.query)



    },[router.query])



    useEffect(() => {
      setData(db)
    }, [])

    console.log(data,"data from json")


    const handleBar = e => {
        // Object.assign(inputValue,{retur})
    
      e.preventDefault()
      // router.push( "/component/Testing2"
      // )
  
      router.push({
        pathname: '/ReturnPickup',
        query:{brand:onlyBrand.Perks,returnDay:inputValue.return1,pickUp:inputValue.return2} 
         }
    )
    }

  return (
    <>
    <section className="main-wrpper">
    {console.log(onlyBrand.Perks,"lolll")}
    
     {/* <h1> {data.Perks} </h1> */}
        <div className="main-wrp-mobile">
            <div className="main-wrp-mobile-inner">
                <img src={iphone12.src} alt="iPhone-12"/>
                {/* <img src={db[0].image_url} alt="iPhone-12"/> */}
                <h2>Say hello to the <span>ultimate returns experience.</span></h2>
            </div>
         </div>
        <div className="main-wrp-content">
            <div className="main-wrp-continner">
                <a onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/Home1'
         })
                }} className="site-logo">
                    <img src={logo.src} alt="logo"/>
                </a>
            


                <div className="logo-container">
                {
(onlyBrand.Perks) && (
                  db.map((arr)=>{
                    {/* console.log(onlyBrand.Perks,"inside everything") */}
                    {/* console.log(arr.name,onlyBrand.Perks ,"inside me") */}
                    
                    if(onlyBrand.Perks==arr.name){
                      console.log(onlyBrand.Perks,"inside everything")
                   
                      
                      return(
                    <img key={arr.id} src={arr.img_thumbnail} width="135"   alt="yourlogo"/>
                      )
                    }
                  }))
                }

{/* {console.log(db[0].image_url,"lolll")} */}
     
                {/* <img src={db[0].img_thumbnail} width="135"   alt="yourlogo"/> */}
                
                    <span></span>
                    <img src={blackLogo.src} className="blacklogo" alt="logo"/>
                </div>

                <div className='input-form'>
                <label>How many days is your current return policy?</label>
                <input
                  type='text'
                  name='return1'
                  autoComplete="off"
                  className='form-control date-form'
                  id='return1'
                  aria-describedby='emailHelp'
                  placeholder='ex.10'
                  value={inputValue.return1}
                  onChange={changeBt}
                  
                  // onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false"
                />
                <p>Days</p>
              </div>
              <div className='input-form'>
                <label>
                  In how many days would you ideally like returned items to be
                  back in your inventory?
                </label>
                <input
                  type='text'
                  name='return2'
                  autoComplete="off"
                  className='form-control date-form'
                  id='return2'
                  aria-describedby='emailHelp'
                  onChange={changeBt}
                  placeholder='ex.10'
                  value={inputValue.return2}
                 
                />
                <p>Days</p>
              </div>

                <div className="button-container">
                {/* style={{textDecoration:'none',cursor:'pointer',color:"#8755de"}} */}
                    <a    className="">
                        Our App
                        <img src={ArrowPurple.src} className="arrowimg" alt="arrow"/>
                    </a>
                    {/* style={{textDecoration:'none',cursor:'pointer',color: "#8755de"}} */}

                    <a onClick={handleBar}   style={{textDecoration:'none',cursor:'pointer',color: "#8755de"}} className="">
                        Your website with RQ
                        <img src={ArrowPurple.src} className="arrowimg" alt="arrow"/>
                    </a>

                </div>


                

               
                {/* <a style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/components/SeeUrPerks',
        query:{brand:onlyBrand.Perks}
         })
                }} className="com-button parkbtn">
                    See your perks <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a> */}


                        <a  className="com-button parkbtn">
                    See your perks <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a>

            </div>
        </div>
    </section>

    </>
  )
}

export default Perks