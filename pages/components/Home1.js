import React, { useState, useEffect, useRef } from 'react'
import reactdom from 'react-dom'
import Head from 'next/head'
import $ from 'jquery' 

// import "../../styles/animate.css"
// import "../../styles/main.css"
// import "../../styles/fontawesome.css"
import Search from '../../styles/assets/img/search.svg'
import logo from '../../styles/assets/img/Logo.svg'
import iphone12 from '../../styles/assets/img/iPhone-12.svg'
import Arrow from '../../styles/assets/img/Arrow.svg'
import { useRouter } from 'next/router'
import useDebounce from './useDebounce'

// const [inputValue,setInputValue]=useState({
// brand:"",
// return1:"",
// return2:""

// })
// const [input,setInput]=useState("12345")
// const [count, setCount] = useState(0);

const Home1 = () => {
  const focus = useRef()


    useEffect(() => {
      function handleClickOutside (event) {
        if (focus.current && !focus.current.contains(event.target)) {
          $('.hide').css('display','none')
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [focus])
  

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

  let arr = ['Homegoods', 'Homesake', 'H&M', 'Other']

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

  const de = useDebounce(inputValue.brand, 600)
  useEffect(() => {
    setInputValue1(de)
    // setInput4(de1)
  }, [de])

  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    // {brand:inputValue.brand,returnDay:inputValue.return1,pickUp:inputValue.return2} 

    router.push({
      pathname: '/[Perks].js',
      query:  {perks:inputValue.brand} 
    })
  }

  const handleChange = e => {
    console.log(e.target.value)
  }

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

        <link
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
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <section class='main-wrpper'>
        <div class='main-wrp-mobile'>
          <div class='main-wrp-mobile-inner'>
            <img src={iphone12.src} alt='iPhone-12' />
            <h2>
              Say hello to the <span>ultimate returns experience.</span>
            </h2>
          </div>
        </div>

        <div class='main-wrp-content'>
          <div class='main-wrp-continner'>
            <a
              onClick={e => {
                e.preventDefault()
                router.push({
                  pathname: '/components/Home1'
                })
              }}
              class='site-logo'
            >
              <img src={logo.src} alt='logo' />
            </a>
            <h1>Welcome to ReturnQueen</h1>
            <p>
              Enter your details to see how ReturnQueen could help you and your
              customers!
            </p>
            <form>
              {/* <form autocomplete="off" > */}
              <div class='autocomplete' ref={focus} id='autocomplete1'>
                <input
                  id='myInput'
                  type='text'
                  name='brand'
                  placeholder='Choose retailer name'
                  value={inputValue.brand}
                  onChange={changeBt}
                  required
                />

                <button class='autocomplete-search'>
                  {' '}
                  <img src={Search.src} alt='logo' />
                </button>
                <div id='myInputautocomplete-list' class='autocomplete-items'>
                  {console.log(arr, 'arrr')}
                  {inputValue1 &&
                    arr
                      .filter(
                        item =>
                          item
                            .toLowerCase()
                            .indexOf(inputValue1.toLowerCase()) !== -1
                      )
                      .map(arr1 => {
                        {
                          console.log(arr1, 'me arr1')
                        }

                        return (
                          <div
                            className='hide'
                            onClick={(e) => {
                              setValue(arr1)
                              setInputValue({ ...inputValue, brand: e.target.innerText }
                              )
                              console.log(e,"rammoy")

                              // $('.hide').css('dusplay','none')
                              $('.hide').css('display','none')
                            }}
                          >
                            
                            {arr1}
                          </div>
                        )
                      })}
                </div>
              </div>

              {/* </form> */}

              {/* ..............................move to next............... */}

              {/* <div class='input-form'>
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
              </div> */}

              {/* ...................move to next.......................... */}
              {
              (inputValue.brand) ?(
              <a onClick={handleClick} style={{background:'#8755DE'}} class='com-button'>
                Next Step <img class='arrowsvg' src={Arrow.src} alt='arrow' />
              </a>
              ):(

                
              <a  class='com-button'>
                Next Step <img class='arrowsvg' src={Arrow.src} alt='arrow' />
              </a>
              
              )

              }
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home1
