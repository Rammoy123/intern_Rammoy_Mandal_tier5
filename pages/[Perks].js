import React, { useEffect, useState } from 'react'

import logo from '../styles/assets/img/purpleLogo.svg'

import iphone12 from '../styles/assets/img/iPhone-12.svg'
import Arrow from '../styles/assets/img/Arrow.svg'
import blackLogo from '../styles/assets/img/blacklogo.svg'
import ArrowPurple from '../styles/assets/img/Arrowpurple.svg'







import { useRouter } from 'next/router'

import db from './components/Json/retailers.json'




const Perks = () => {
  


  const [onlyBrand, setOnlyBrand] = useState({})
  const [onlyChecker, setOnlyChecker] = useState({})
  const [data, setData] = useState({})

  

  const router = useRouter()
  console.log(router.query, 'query123')

  const [inputValue, setInputValue] = useState({
    return1: '',
    return2: ''
  })
  

  const changeBt = e => {
    console.log(e.target.name, 'valueee')

    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  console.log(inputValue, 'inputtttt')

  useEffect(() => {
    const set = data => {
      if (data.slug) {
        const filtered=db.filter((arr)=>arr.slug==data.slug)
        setOnlyBrand({ Perks: filtered[0].name,Slug:data.slug })
      } else {
        console.log(data.Perks, 'heyy im not')
        const filtered1=db.filter((arr)=>arr.name==data.Perks)
        console.log(filtered1,"i am filtered")
        if(filtered1.length>0){
          setOnlyBrand({ Perks: data.Perks,Slug:filtered1[0].slug })

        }

        // setOnlyBrand({ Perks: data.Perks,Slug:filtered1[0].slug })
      }
    }

    set(router.query)
  }, [router.query])

  useEffect(() => {
    setData(db)
  }, [])

  console.log(data, 'data from json')

  const handleBar = e => {


    e.preventDefault()
    console.log(router.query,"queryyyy")

    if((inputValue.return1)&& (inputValue.return2)){
    

    router.push({
      pathname: '/ReturnPickup',
      query: {
        slug: onlyBrand.Slug,
        returnDay: inputValue.return1,
        IdealInInventory: inputValue.return2
      }
    })
  }
  else{
    router.push({
      pathname: '/ReturnPickup',
      query: {
        slug: onlyBrand.Slug,
        returnDay:router.query.returnDay ,
        IdealInInventory: router.query.IdealInInventory
      }
    })

  }

  }
  const handlePdf=e=>{


    e.preventDefault();

    if((router.query.slug) &&(router.query.returnDay)&&(router.query.IdealInInventory)){
      router.push({
pathname: '/components/SeeUrPerks',
query:{   slug: onlyBrand.Slug,
  returnDay:router.query.returnDay ,
  IdealInInventory: router.query.IdealInInventory
}

       } )
      }
      else{
        router.push({
          pathname: '/components/SeeUrPerks',
          query:{   slug: onlyBrand.Slug
            
          }
          
                 } )
      


      }
  }

  const handleFigma=(e)=>{
    e.preventDefault();
    console.log(router.query,"i am in")


    if((router.query.slug) &&(router.query.returnDay)&&(router.query.IdealInInventory)){
      console.log("i am innn-first")
      router.push({
pathname: '/Demo',
query:{   slug: onlyBrand.Slug,
  returnDay:router.query.returnDay ,
  IdealInInventory: router.query.IdealInInventory
}

       } )
      }
      else{
        console.log("i am innn")
        router.push({
          pathname: '/Demo',
          query:{   slug: onlyBrand.Slug
            
          }
          
                 } )
      


      }

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
              {onlyBrand.Perks &&
                db.map(arr => {
                  if (onlyBrand.Perks == arr.name) {
                    console.log(onlyBrand.Perks, 'inside everything')

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

            
  {   !((router.query.slug)&&(router.query.returnDay)&&(router.query.IdealInInventory)) && (<div>
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
            </div>)
  }

            {/* <div className='button-container'>
    
              <a className=''>
                Our App
                <img src={ArrowPurple.src} className='arrowimg' alt='arrow' />
              </a>
 

              <a
                onClick={handleBar}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: '#8755de'
                }}
                className=''
              >
                Your website with RQ
                <img src={ArrowPurple.src} className='arrowimg' alt='arrow' />
              </a>
            </div> */}
           


            <a style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={handleFigma} className="com-button parkbtn">
                    returnQueen Customer Experience <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a>
                <a style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={handleBar} className="com-button parkbtn">
                    Your Website With RQ <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a>
                <a style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={handlePdf} className="com-button parkbtn">
                    See your perks <img className="arrowsvg" src={Arrow.src} alt="arrow"/>
                </a>
            
                

           
            {/* <a  href={'/eTail.pdf'}  rel="noreferrer" className='com-button parkbtn'>
              See your perks{' '}
              <img className='arrowsvg' src={Arrow.src} alt='arrow' />
            </a> */}
            {/* {
              window.open('/eTail.pdf')
            } */}

            {/* .....for another page......... */}
            

              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <Viewer   fileUrl={'/eTail.pdf'}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker> */}

            


            {/* ........... */}
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px',paddingBottom:'15px' }}>
              <a
                onClick={(e)=>e => {
                e.preventDefault()
                router.push({
                  pathname: '/Home1'
                })
              }}
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
      </section>
    </>
  )
}

export default Perks
        {/* style={{textDecoration:'none',cursor:'pointer',color: "#8755de"}} */}
