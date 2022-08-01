import React, { useEffect } from 'react'

import blackLogo from '../styles/assets/img/blacklogo.svg'

import smallLogo from '../styles/assets/img/smalllogo.svg'
import { useRouter } from 'next/router'
import { useState } from 'react'
import db from './components/Json/retailers.json'

const ReturnPickup = () => {
  const [data, setData] = useState({})
  const [onlyBrand,setOnlyBrand]=useState({})

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
 
 

  return (
    <>
      <section className='main-wrpper returnpickpage'>
        <div className='main-wrp-content'>
          <div className='main-wrp-continner'>
            <div className='logo-container'>
              {onlyBrand.brand &&
                db.map(arr => {
                

                  if (onlyBrand.brand == arr.name) {
                   

                    return (
                      <img
                        key={arr.id}
                        src={arr.img_thumbnail}
                        width='135'
                        alt='yourlogo'
                      />
                    )
                  }
                })}
              
              <span></span>
              <img src={blackLogo.src} className='blacklogo' alt='logo' />
            </div>

            <div className='paragraph'>
              {(onlyBrand.brand) != 'Other' ? (
                <p>
                  Hi {onlyBrand.brand} Customer!,
                  <br />
                  <br />
                  We hope you love your <i>{onlyBrand.brand}</i> purchase.
                  But in case you don’t, you can return any purchase within{' '}
                  {router.query.returnDay} Days.
                </p>
              ) : (
                <p>
                  Hi Customer!,
                  <br />
                  <br />
                  We hope you love your purchase. But in case you don’t, you can
                  return any purchase within {router.query.returnDay} Days.
                </p>
              )}
            </div>

            <div className=' button-container'>
              <a
                style={{ color: '#8755DE', textDecoration: 'none' }}
                className='returnoption'
              >
                <span> Return by Mail</span>
                <span> {router.query.returnDay} Days</span>
              </a>

              <a
                style={{ color: '#8755DE', textDecoration: 'none' }}
                className='returnoption'
              >
                <span>Return in Store</span>
                <span>{router.query.returnDay} Days</span>
              </a>
            </div>

            <a
              onClick={e => {
                e.preventDefault()
               
                router.push({
                  pathname: '/Schedule',
                  query: router.query
                })
                //  style={{textDecoration:'none',cursor:'pointer'}}
              }}
              className='com-button returnoption returntag'
              style={{
                background: '#8755DE',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <span>
                <img src={smallLogo.src} className='arrowimg' alt='arrow' />
                <span className='getreturn' style={{ cursor: 'pointer' }}>
                  {' '}
                  Get returns picked up at your door
                </span>
              </span>

              <span>{router.query.IdealInInventory} Days</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReturnPickup
