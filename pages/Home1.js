import React, { useState, useEffect, useRef } from 'react'
import reactdom from 'react-dom'
import Head from 'next/head'
import $ from 'jquery' 

// import "../../styles/animate.css"
// import "../../styles/main.css"
// import "../../styles/fontawesome.css"
import Search from '../styles/assets/img/search.svg'
import logo from '../styles/assets/img/Logo.svg'
import iphone12 from '../styles/assets/img/iPhone-12.svg'
import Arrow from '../styles/assets/img/Arrow.svg'
import { useRouter } from 'next/router'
import useDebounce from '../useDebounce'
import db from './components/Json/retailers.json'
import Link from 'next/link'
// const [inputValue,setInputValue]=useState({
// brand:"",
// return1:"",
// return2:""

// })
// const [input,setInput]=useState("12345")
// const [count, setCount] = useState(0);

const Home1 = () => {
  const focus = useRef()

  const [myDb,setmyDb]=useState(db)
  console.log(db,"db")


    useEffect(() => {
      function handleClickOutside (event) {
        if (focus.current && !focus.current.contains(event.target)) {
          console.log($('.hide').css('display','none'))
          $('.hide').css('display','none')
          // $('#myInputautocomplete-list').css('height','0vh')
         

          setHandFocus(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [focus])
    const [afterData,setAfterData]=useState([])
    useEffect(()=>{
      const am1={}
      const db1=db.filter((ar)=>ar.name!="Others")
      db.map((am)=>{if(am.name=="Others"){
        am1=am
      }})
      console.log(am1,"am111")
      
      const myData1 = db1
 .sort((a, b) => a.name.trim().localeCompare(b.name.trim()))
 .map((item, i) => {return(item)})
 
 myData1.splice(0, 0, am1)
const myData2=myData1.filter((arr)=>arr.name[0].charCodeAt(0)<65 && arr.name[0].charCodeAt(0)>32 )
const myData3=myData1.filter((arr)=>arr.name[0].charCodeAt(0)>=65 || arr.name[0].charCodeAt(0)<=32)
const myDataOrg=myData3.concat(myData2);
 setAfterData(myDataOrg)





    },[myDb])
    console.log(afterData,"afterData")
    console.log(db,"dbbbb")
  

  const [inputValue, setInputValue] = useState({
    brand: '',
    return1: '',
    return2: ''
  })
  const [inputValue1, setInputValue1] = useState()
  const [value, setValue] = useState()

  const getPredictions = value => {
    console.log(value, 'valll')

    // return [
    //   'Boston',
    //   'Los Angeles',
    //   'San Diego',
    //   'San Franciso',
    //   'Sacramento',
    //   'New York',
    //   'New Jersie',
    //   'Chicago',
    // ].filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  // let arr = ['Homegoods', 'Homesake', 'H&M', 'Other']

  const changeBt = e => {
    // clear timeout when input changes value

    console.log(e.target.name,"valueee")

    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })

  
  }
  console.log(inputValue,"inputValue1111234")

  const de = useDebounce(inputValue.brand, 200)
  useEffect(() => {
    setInputValue1(de)
    // setInput4(de1)
  }, [de])

  const router = useRouter()


  const handleClick = e => {
    console.log(e,"click")
    e.preventDefault()
    // {brand:inputValue.brand,returnDay:inputValue.return1,pickUp:inputValue.return2} 

    router.push({
      pathname: '/[Perks].js',
      query:  {brand:inputValue.brand} 
    })
  }
 const [handFocus,setHandFocus] =useState(false)
  
  const handleFocus=(e)=>{
    console.log(e.target,"length")
    // handFocus=e.target

    setHandFocus(true)
    Object.assign(handFocus,{lolll:"hey"})
    console.log(handFocus,"handfocusss")
  }
  
  // useEffect(()=>{
  //   console.log()
  
  // },[handFocus])

 

  //   const concernedElement =.querySelector("#autocomplete1");

  // document.addEventListener("mousedown", (e) => {
  //   // console.log(concernedElement, e.target);
  //   if (concernedElement.contains(e.target)) {
  //     console.log("clicked inside");
  //   } else {
  //     console.log("clicked outside");
  //   }
  // });

  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='profile' href='https://gmpg.org/xfn/11' />

        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />

        <title>Returnqueen</title>
        <meta name='description' content='' />
        <link rel='canonical' href='index.html' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Returnqueen' />
        <meta property='og:description' content='' />
        <meta property='og:url' content='index.html' />
        <meta property='og:site_name' content='Returnqueen' />
        <meta property='article:modified_time' content='' />
        <meta property='og:image' content='assets/img/og.jpg' />
        <meta property='og:image:width' content='460' />
        <meta property='og:image:height' content='300' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />

        <link rel='stylesheet' href='assets/css/fontawesome.css' media='all' />
        <link rel='stylesheet' href='assets/css/animate.css' media='all' />
        <link rel='stylesheet' href='assets/css/main.css' media='all' />

        {/* <link
          rel='preload'
          href='fonts/Gilroy-Medium.otf'
          as='font'
          type='font/otf'
          crossorigin
        />
        <link
          rel='preload'
          href='fonts/Gilroy-Bold.otf'
          as='font'
          type='font/otf'
          crossorigin
        />
        <link
          rel='preload'
          href='fonts/Gilroy-SemiBold.otf'
          as='font'
          type='font/otf'
          crossorigin
        />
        <link
          rel='preload'
          href='fonts/Gilroy-Heavy.otf'
          as='font'
          type='font/otf'
          crossorigin
        />
        <link
          rel='preload'
          href='fonts/Gilroy-Light.otf'
          as='font'
          type='font/otf'
          crossorigin
        /> */}

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <section className='main-wrpper'>
        <div className='main-wrp-mobile'>
          <div className='main-wrp-mobile-inner'>
            <img src={iphone12.src} alt='iPhone-12' />
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
            <h1>Welcome to ReturnQueen</h1>
            <p>
              Enter your details to see how ReturnQueen could help you and your
              customers!
            </p>
            <form>
            
              <div className='autocomplete' ref={focus} id='autocomplete1'>
                <input
                  id='myInput'
                  autoComplete="off"
                  type='text'
                  name='brand'
                  placeholder='Choose retailer name'
                  value={inputValue.brand}
                  onChange={changeBt}
                  onFocus={(e)=>{setHandFocus(true)}}
                  required
                />

                <button className='autocomplete-search'>
                  {' '}
                  <img src={Search.src} alt='logo' />
                </button>
                <div id='myInputautocomplete-list' className='autocomplete-items'>
                

                  {  handFocus && 
                    afterData
                      .filter(
                        item =>
                          item.name
                            .toLowerCase()
                            .indexOf(de.toLowerCase()) !== -1
                      )
                      .map(arr1 => {
                      
                       

                        return (
                          


                        
                          
                          <div key={arr1.id}
                            className='hide'
                            onClick={(e) => {
                              setValue(arr1)
                              setInputValue({ ...inputValue, brand: e.target.innerText }
                              )
                              

                              
                              console.log($('.hide'))
                              $('.hide').css('display','none')
                            }}
                          >
                            
                            {arr1.name}
                          </div>
                          
                        )
                      })}
                </div>
              </div>

              {/* </form> */}

              {/* ..............................move to next............... */}

              {/* <div className='input-form'>
                <label>How many days is your current return policy?</label>
                <input
                  type='text'
                  name='return1'
                  className='form-control date-form'
                  id='return1'
                  aria-describedby='emailHelp'
                  placeholder='ex.10'
                  value={inputValue.return1}
                  onChange={changeBt}
                  
                  onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false"
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
                  className='form-control date-form'
                  id='return2'
                  aria-describedby='emailHelp'
                  onChange={changeBt}
                  placeholder='ex.10'
                  value={inputValue.return2}
                 
                />
                <p>Days</p>
              </div> */}

              {/* ...................move to next.......................... */}
              {
 (afterData.find((arrAmi)=>arrAmi.name==inputValue.brand)) ?(
              
       
               <a  onClick={handleClick}   style={{background:'#8755DE',cursor:'pointer',marginTop:"130px"}} className='com-button'>
                Next Step <img className='arrowsvg' src={Arrow.src} alt='arrow' />
              </a> 
              
   
                
   
               

               ):( <a className='com-button' style={{marginTop:"130px"}}>
                Next Step <img className='arrowsvg' src={Arrow.src} alt='arrow' />
              </a>)
  
          
           
    

              }

              
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home1
  {/* (afterData.find((arrAmi)=>arrAmi.name==inputValue.brand)) ?(
              
       
               <a    style={{background:'#8755DE',cursor:'pointer'}} className='com-button'>
                Next Step <img className='arrowsvg' src={Arrow.src} alt='arrow' />
              </a> 
              
   
                
   
               

               ):( <a onClick={(e)=>console.log(e)}   className='com-button'>
                Next Step <img className='arrowsvg' src={Arrow.src} alt='arrow' />
              </a>) */}
   