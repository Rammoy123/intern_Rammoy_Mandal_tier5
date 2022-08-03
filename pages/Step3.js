import React , { useEffect, useState } from 'react'

import logo from '../styles/assets/img/purpleLogo.svg'

import iphone12 from '../styles/assets/img/iPhone-12.svg'
import Arrow from '../styles/assets/img/Arrow.svg'
import blackLogo from '../styles/assets/img/blacklogo.svg'
import { useRouter } from 'next/router'

import db from './components/Json/retailers.json'

const Step3 = () => {
    const [onlyBrand,setOnlyBrand]=useState({})
    const [inputValue, setInputValue] = useState({
        return1: '',
        return2: ''
      })

    const router = useRouter()
    useEffect(()=>{
      const set = data => {
        
      
      const filtered=db.filter((arr)=>arr.slug==data.slug)
      if(filtered.length>0){
      setOnlyBrand({ brand: filtered[0].name })
      }
      
      }
      set(router.query)
    },[router.query])


    const handleBar=()=>{
        router.push({
          pathname: '/ReturnPickup',
          query: {
            slug: router.query.slug,
              returnDay: inputValue.return1,
        IdealInInventory: inputValue.return2
          }
        })
    }

    const changeBt = e => {
        console.log(e.target.name, 'valueee')
    
        const { name, value } = e.target
        setInputValue({
          ...inputValue,
          [name]: value
        })
      }
    
      
  return (
    <>

<section className='main-wrpper'>
        {console.log(onlyBrand.Perks, 'lolll')}

        {/* <h1> {data.Perks} </h1> */}
        <div className='main-wrp-mobile'>
          <div className='main-wrp-mobile-inner'>
            <img src={iphone12.src} alt='iPhone-12' />
            {/* <img src={db[0].image_url} alt="iPhone-12"/> */}
            <h2>
              Say hello to the <span>ultimate returns experience.</span>
            </h2>
          </div>
        </div>
        <div className='main-wrp-content'>
          <div className='main-wrp-continner'>
            <a
              onClick={e => {
                e.preventDefault()
                router.push({
                  pathname: '/Home1'
                })
              }}
              className='site-logo'
            >
              <img src={logo.src} alt='logo' />
            </a>

            <div className='logo-container'>
            {console.log(onlyBrand,"LOLLL")}
              {onlyBrand.brand &&
                db.map(arr => {
                  if (onlyBrand.brand == arr.name) {
                  

                    return (
                      <img
                        key={arr.id}
                        src={arr.img_thumbnail}
                        
                        alt='yourlogo'
                        className="company-logo"
                      />
                    )
                  }
                })}
                <div className="black-logo-wrap">
           
              <img src={blackLogo.src} className='blacklogo' alt='logo' />
            </div>
            </div>

            
     
            <div className='input-form'>
              <label>How many days is your current return policy?</label>
              <input
                type='text'
                name='return1'
                autoComplete='off'
                className='form-control date-form'
                id='return1'
                aria-describedby='emailHelp'
                placeholder='ex.10'
                value={inputValue.return1}
                onChange={changeBt}
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
                autoComplete='off'
                className='form-control date-form'
                id='return2'
                aria-describedby='emailHelp'
                onChange={changeBt}
                placeholder='ex.10'
                value={inputValue.return2}
              />
              <p>Days</p>
            </div>
            
  
{
           ( (inputValue.return1)&&(inputValue.return2)) ?(
           


            <a style={{textDecoration:'none',color:'white',cursor:'pointer',marginTop:'1px',background: '#8755DE'}} onClick={handleBar} className="com-button">
                    Next Step <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a>
           ) :( <a  style={{marginTop:'1px'}}  className="com-button">
                    Next Step <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a> )
}
                

           
           
          </div>
     
        </div>
      </section>



    </>
  )
}

export default Step3