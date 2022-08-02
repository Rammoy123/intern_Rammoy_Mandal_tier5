
import React,{useEffect,useState} from 'react'
import logo from '../styles/assets/img/purpleLogo.svg'

import blackLogo from '../styles/assets/img/blacklogo.svg'

import { useRouter } from 'next/router'
import db from './components/Json/retailers.json'

const Shopping = () => {
  const [onlyBrand,setOnlyBrand]=useState({})
  const router = useRouter()

  console.log(router.query, 'query in')


  useEffect(()=>{
    const set = data => {
      
    
    const filtered=db.filter((arr)=>arr.slug==data.slug)
    if(filtered.length>0){
    setOnlyBrand({ brand: filtered[0].name })
    }
    
    }
    set(router.query)
  },[router.query])

  const handleBar = e => {
    e.preventDefault()
    // router.push( "/component/Testing2"
    // )
    console.log(e, 'eeeeeeeeeeee')
    router.push({
      pathname: '/Home1'
    })
  }
  const handleBar1 = e => {
    e.preventDefault()
    // router.push( "/component/Testing2"
    // )
    console.log(e, 'eeeeeeeeeeee')
    router.push({
      pathname: '/Demo',
      query: {
        Day: router.query.Day,
        Time: router.query.Time,
        slug: router.query.slug
      }
    })
  }


  return (
    <>
      <section className='main-wrpper shopping-container'>
        <div className='main-wrp-content'>
          <div className='main-wrp-continner'>
            <a
              onClick={e => {
                e.preventDefault()
                router.push({
                  pathname: '/Home1'
                })
              }}
              className=' top-logo-container'
            >
              <img src={logo.src} alt='logo' />
            </a>

            <div className='logo-container'>
              {onlyBrand.brand &&
                db.map(arr => {
                  if (onlyBrand.brand == arr.name) {
                    console.log(router.query.Brand, 'inside everything')

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

            <div className='all-set'>
              <h2>You’re all set!</h2>
              <p>
                Your items will be collected{' '}
                <span>
                  {router.query.Day} {router.query.Time}
                </span>
              </p>
            </div>

            <div className='wasnt-easy'>
              <h5>Wasn’t that easy?</h5>
              <p>
                Browse more to enjoy your next shopping experience with{' '}
                {onlyBrand.brand != 'Other' ? (
                  <span> {onlyBrand.brand} </span>
                ) : (
                  <span> us ! </span>
                )}
              </p>
            </div>

            <a
              style={{
              //  background:'transparent',
                textDecoration: 'none',
                color: 'white'
              }}
              className='com-button'
            >
              Countinue Shopping
            </a>
            <a onClick={handleBar1}
              style={{
               background:'#8755DE',
                textDecoration: 'none',
                color: 'white',
                cursor:'pointer'
              }}
              className='com-button'
            >
                returnQueen Customer Experience
            </a>

            {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a
                onClick={handleBar1}
                style={{
                  cursor: 'pointer',
                  color: '#8755DE',
                  paddingBottom: '5px',
                  borderBottom: '2px solid',
                  fontSize: '18px'
                }}
              >
                {' '}
                Back to Home{' '}
              </a>

            </div> */}

            <div style={{ textAlign: 'center', marginTop: '20px',paddingBottom:'15px' }}>
              <a
                onClick={handleBar}
                style={{
                  cursor: 'pointer',
                  color: '#8755DE',
                  paddingBottom: '5px',
                  borderBottom: '2px solid',
                  fontSize: '18px'
                }}
              >
                {' '}
                End Demo{' '}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shopping
