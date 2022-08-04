import React,{useEffect,useState} from 'react'

import LogoOrg from '../styles/assets/img/Logo.svg'

import blackLogo from '../styles/assets/img/blacklogo.svg'

import { useRouter } from 'next/router'

import db from './components/Json/retailers.json'



const Schedule = () => {
  const [inputValue, setInputValue] = useState({
    order: '',
    chooseItems: [],
    day: '',
    time: '',
    contactInfo: '',
    fee:'',
    checkedIf:''

  })
  const [onlyBrand,setOnlyBrand]=useState({})

  const router = useRouter()
  console.log(router.query)
  const [array,setArray]=useState([])

  useEffect(()=>{
    const set = data => {
      
    
    const filtered=db.filter((arr)=>arr.slug==data.slug)
    if(filtered.length>0){
    setOnlyBrand({ brand: filtered[0].name })



    }
    if(data.Time||data.chooseItems||data.order||data.day||data.contactInfo||data.fee){
      console.log(data,"i am dada")
      const array=[]
      
      // console.log(data,"mydata")
      if((typeof(data.chooseItems)=="string") && (data.chooseItems.length>1)){
        console.log("lolll iam string")
      array=data.chooseItems.split()
      console.log(array,"klll")

      if(array.length==1)
      {
        console.log("lolll iam array")
        console.log(array,"meee")
        array=data.chooseItems.split(',')
      }
      console.log(array,"llll")

     
    //  array=array.push()
     console.log(array,"logArray")
     
      setInputValue({...data,
      chooseItems:array})
    
    }
    else if ((typeof(data.chooseItems)=="string") && (data.chooseItems.length<=1)){
      setInputValue({...data,
        chooseItems:array})

    }
    else{
      setInputValue({...data
        })

    }
  }
    
    }
    set(router.query)
  },[router.query])

  const handleBar = e => {
    e.preventDefault()
    console.log('eeeee')
    // router.push( "/component/Testing2"
    // )

    router.push({
      pathname: '/Shopping',
      query: {
        Day: inputValue.day,
        Time: inputValue.time,
        slug: router.query.slug
      }
    })
  }
  // const [checked,setChecked]=useState(true)
  const [value1,setValue]=useState()

  const changeBt = e => {
    if(e.target.name=="chooseItems"){
    
    const { value, checked } = e.target;
    
    const { chooseItems } = inputValue;

    console.log(`${value} is ${checked} ${name}`);

    console.log(e.target.value, 'valueee')
    // setChecked(!checked)
    // if(!checked){
    //   setValue(e.target.value)

    // }
    console.log(checked)

    

    if (checked) {
      setInputValue({
        ...inputValue,
        chooseItems: [...chooseItems, value],
       
      });
    }
    else {
      setInputValue({
        ...inputValue,
        chooseItems:chooseItems .filter((e) => e !== value),
     
      });
    }
  }
  // else if(e.target.name=='time' ){
  //   let { name, value } = e.target
  //   console.log(name,"my name")

  // setInputValue({
  //   ...inputValue,
  //   [name]:value
    

    
  // })

  // }
    


    else if (e.target.name=='order' ||e.target.name=='time'||e.target.name=='day'||e.target.name=='contactInfo' ||e.target.name=='fee' ){
      let { name, value } = e.target
      console.log(name,"my name")

    setInputValue({
      ...inputValue,
      [name]:value
      

      
    })
  }

    // const { name, value } = e.target
    // setInputValue({
    //   ...inputValue,
    //   chooseItems:value1,

    //   [name]: value
    // })
    // if( (inputValue.chooseItem) ){
    //   $(".custom-radio .radio-section .radio-box .labelif").css(
    //    "background","rgba(133, 84, 220, 0.1)"
    //    )
    //    $(".custom-radio .radio-section .radio-box .labelif").css(
    //     "border","1px solid #8554DC"
     

        
    //     )
    // }
  }
  

  const onMember=e=>{
    e.preventDefault()
    console.log(inputValue.chooseItems,"router")
    // order: '',
    // chooseItems: [],
    // day: '',
    // time: '',
    // contactInfo: '',
    // fee:''

    
    // router.push( "/component/Testing2"
    // )

    router.push({
      pathname: '/Membership',



      query: {
        Day: inputValue.day,
        Time: inputValue.time,
        slug: router.query.slug,
        
        order:inputValue.order,
        chooseItems:inputValue.chooseItems,
        day:inputValue.day,
        time:inputValue.time,
        contactInfo:inputValue.contactInfo,
        fee:inputValue.fee




      }
    })
    const myObj={}
    Object.entries(inputValue).forEach(([key, value]) => {
     
      
      if(value.length>0)
     
      
      {
        Object.assign(myObj,{[key]:value})


      }
    
  });

  // Object.keys(inputValue).forEach(key => {
  //   if(inputValue[key]>0){

  //   myObj.append(key, inputValue[key])
  //   }
  // })
  console.log(myObj,"myobkk")




  }

    console.log(inputValue.chooseItems, 'input Value')
  return (
    <>
      <section className='main-wrpper'>
        <div className='main-wrp-content schedule-wrp'>
          <div className='main-wrp-continner'>
            <div className='logo-top-section'>
              <a
                onClick={e => {
                  e.preventDefault()
                  router.push({
                    pathname: '/Home1'
                  })
                }}
                className='site-logo'
              >
                <img src={LogoOrg.src} alt='logo' />
              </a>
              <div className='logo-container'>
                <a>
                  {/* <img src={imageF.src} alt="yourlogo"/> */}

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
                </a>
                <div className="black-logo-wrap">
                <a>
                  <img src={blackLogo.src} className='blacklogo' alt='logo' />
                </a>
                </div>
              </div>
            </div>

            <form id='myform'>
              <div className='order-number'>
                <div className='order-id'>
                  <p>Order&nbsp;#</p>
                  <input
                    type='text'
                    name='order'
                    value={inputValue.order}
                    autoComplete='off'
                    placeholder=''
                    onChange={changeBt}
                    
                    required
                  />
                </div>
                <div>
                  <p>or</p>
                </div>
                <div className='select-or-signin'>
                  <div className='select-order'>
                    <a href='#'>Select Order</a>
                  </div>
                  <div className='sign-in'>
                    <a href='#'>Sign In</a>
                  </div>
                </div>
              </div>
              <hr className='hr' />
              {/* ..... */}


              <div className="custom-radio items-radio">
                            <p>Choose Items</p>
                            <div  className="radio-section">
                                <div  className="radio-box">
                                {/* efaultChecked={checked} */}
                                    <input type="checkbox" name="chooseItems"  checked={inputValue.chooseItems.find((arr)=>arr== 'ipsum1') }    value="ipsum1"
      
      onChange={changeBt} id="item1" required/>

                                    <label className='checkI' htmlFor="item1">
                                    
                                        <div  className="radio-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z" fill="#8755DE"/>
                                                <path d="M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z" fill="#8755DE"/>
                                                </svg>
                                        </div>
                                        <div  className="radio-content">
                                            <p>Item 1</p>
                                            <p><span>Lorem Ipsum</span></p>
                                        </div>
                                        
                                    </label>
                                </div>
                                
                                <div  className="radio-box">
                                
                                    <input type="checkbox" name="chooseItems" id="item2" checked={inputValue.chooseItems.find((arr)=>arr== "LoremIpsum2") }     value='LoremIpsum2'
      onChange={changeBt}
    />
                                    <label htmlFor="item2">
                                        <div  className="radio-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z" fill="#8755DE"/>
                                                <path d="M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z" fill="#8755DE"/>
                                                </svg>
                                        </div>
                                        <div  className="radio-content">
                                            <p>Item 2</p>
                                            <p><span>Lorem Ipsum</span></p>
                                        </div>
                                    </label>
                                </div>
                                <div  className="radio-box">
                                    <input type="checkbox" name="chooseItems" id="item3"  checked={inputValue.chooseItems.find((arr)=>arr== "LoremIpsum3") }        value='LoremIpsum3'
       onChange={changeBt}
      required/>
                                    <label htmlFor="item3">
                                        <div  className="radio-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z" fill="#8755DE"/>
                                                <path d="M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z" fill="#8755DE"/>
                                                </svg>
                                        </div>
                                        <div  className="radio-content">
                                            <p>Item 3</p>
                                            <p><span>Lorem Ipsum</span></p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>


              {/* .... */}

              <div className='custom-radio day-radio'>
                <p>Select day:</p>
                <div className='radio-section' onChange={changeBt}>
                  <div className='radio-box'>
                    <input
                      type='radio'
                      name='day'
                      id='day1'
                      value='Wednesday'
                      checked={inputValue.day == 'Wednesday'}
                      required
                    />
                    {/* for="day1" */}
                    <label htmlFor='day1'>
                      <div className='radio-content'>
                        <p>June</p>
                        <h6>17</h6>
                        <p>Wednesday</p>
                      </div>
                    </label>
                  </div>
                  <div className='radio-box'>
                    <input
                      type='radio'
                      name='day'
                      id='day2'
                      value='Thrusday'
                      checked={inputValue.day == 'Thrusday'}
                      required
                    />
                    {/* for="day2" */}
                    <label htmlFor='day2'>
                      <div className='radio-content'>
                        <p>June</p>
                        <h6>18</h6>
                        <p>Thursday</p>
                      </div>
                    </label>
                  </div>
                  <div className='radio-box'>
                    <input
                      type='radio'
                      name='day'
                      id='day3'
                      value='Friday'
                      checked={inputValue.day == 'Friday'}
                      required
                    />
                    {/* for="day3" */}
                    <label htmlFor='day3'>
                      <div className='radio-content'>
                        <p>June</p>
                        <h6>19</h6>
                        <p>Friday</p>
                      </div>
                    </label>
                  </div>
                  <div className='radio-box'>
                    <input
                      type='radio'
                      name='day'
                      id='day4'
                      value='Saturday'
                      checked={inputValue.day == 'Saturday'}
                      required
                    />
                    {/* for="day4" */}
                    <label htmlFor='day4'>
                      <div className='radio-content'>
                        <p>June</p>
                        <h6>20</h6>
                        <p>Saturday</p>
                      </div>
                    </label>
                  </div>
                  <div className='radio-box'>
                    <input
                      type='radio'
                      name='day'
                      id='day5'
                      value='Sunday'
                      checked={inputValue.day == 'Sunday'}
                      required
                    />
                    {/* for="day5" */}
                    <label htmlFor='day5'>
                      <div className='radio-content'>
                        <p>June</p>
                        <h6>21</h6>
                        <p>Sunday</p>
                      </div>
                    </label>
                  </div>
                </div>
                <div className='note'>
                  <p className='color'>No printing or packaging refund.</p>
                </div>
              </div>

              <hr className='hr2' />

              <div className='custom-radio time-radio'>
                <p>Choose time of pick up</p>

                <div className='time-radio-section' onChange={changeBt}>
                  <div className='schedule-time-box'>
                    <div className='radio-box'>
                      <input
                        type='radio'
                        name='time'
                        id='time0'
                        value='Flex Time 8AM - 6PM'
                        checked={inputValue.time == 'Flex Time 8AM - 6PM'}
                        required
                      />
                      {/* for="time0" */}
                      <label htmlFor='time0'>
                        <div className='radio-content'>
                          <p>Flex Time 8AM - 6PM</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='or-time'>OR</div>
                  <div className='radio-section'>
                    <div className='radio-box'>
                      <input
                        type='radio'
                        name='time'
                        id='time1'
                        value='8AM - 10PM'
                        checked={inputValue.time == '8AM - 10PM'}
                        required
                      />
                      {/* for="time1" */}
                      <label htmlFor='time1'>
                        <div className='radio-content'>
                          <p>8Am - 10PM</p>
                        </div>
                      </label>
                    </div>
                    <div className='radio-box'>
                      <input
                        type='radio'
                        name='time'
                        id='time2'
                        value='12PM - 3PM'
                        checked={inputValue.time == '12PM - 3PM'}
                        required
                      />
                      {/* for="time2" */}
                      <label htmlFor='time2'>
                        <div className='radio-content'>
                          <p>12Pm - 3Pm</p>
                        </div>
                      </label>
                    </div>
                    <div className='radio-box'>
                      <input
                        type='radio'
                        name='time'
                        id='time3'
                        required
                        value='3PM - 4PM'
                        checked={inputValue.time == '3PM - 4PM'}
                      />
                      {/* for="time3" */}
                      <label htmlFor='time3'>
                        <div className='radio-content'>
                          <p>3Pm - 4PM</p>
                        </div>
                      </label>
                    </div>
                    <div className='radio-box'>
                      <input
                        type='radio'
                        name='time'
                        id='time4'
                        value='4PM - 6PM'
                        checked={inputValue.time == '4PM - 6PM'}
                        required
                      />
                      {/* for="time4" */}
                      <label htmlFor='time4'>
                        <div className='radio-content'>
                          <p>4Pm - 6Pm</p>
                        </div>
                      </label>
                    </div>
                    <div className='radio-box'>
                      <input
                        type='radio'
                        name='time'
                        id='time5'
                        value='7PM - 9PM'
                        checked={inputValue.time == '7PM - 9PM'}
                        required
                      />
                      {/* for="time5" */}
                      <label htmlFor='time5'>
                        <div className='radio-content'>
                          <p>7Pm - 9Pm</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='delivery-radio' onChange={changeBt}>
                <div className='delivery-content'>
                  <input
                    type='radio'
                    name='contactInfo'
                    id='delivery1'
                    value='contactless'
                    checked={inputValue.contactInfo == 'contactless'}
                    required
                  />
                  {/* for="delivery1" */}
                  <label htmlFor='delivery1'>Contactless</label>
                </div>
                <div className='delivery-content'>
                  <input
                    type='radio'
                    name='contactInfo'
                    id='delivery2'
                    value='hand-off'
                    checked={inputValue.contactInfo == 'hand-off'}
                    required
                  />
                  {/* for="delivery1" */}
                  <label htmlFor='delivery2'>Driver hand-off</label>
                </div>
              </div>
              <hr className="hr2" />
              <div className="pickup-fee" onChange={changeBt}>
                            <div className="pickup-content">
                                <input type="radio" name="fee" id="pickup1"   value='$9'
                    checked={inputValue.fee == '$9'} required/>
                                <label htmlFor="pickup1">$9 
                                    <span className="pickup-span">(one time pickup fee)</span></label>
                            </div>
                             <div className="pickup-content pickupcontent-two">
                                <input type="radio" name="fee" id="pickup2"  value='FreeWithMembership'
                    checked={inputValue.fee == 'FreeWithMembership'} required/>
                                <label htmlFor="pickup2">Free with your ReturnQueen <span className="membership-text">membership</span> 
                                   <span className="pickup-span">(For membership options tap <span onClick={onMember} className="here"> here</span>)</span> </label>
                            </div>
                        </div>



              {(inputValue.chooseItems.length>0) &&
              inputValue.contactInfo &&
              inputValue.day &&
              inputValue.time && 
             inputValue.fee &&
              inputValue.order ? (
                <a
                  onClick={handleBar}
                  style={{
                    background: '#8755DE',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  className='com-button'
                >
                  Schedule Pickup
                </a>
              ) : (
                <a className='com-button'>Schedule Pickup</a>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Schedule



// <div className='custom-radio items-radio'>
// <p>Choose Items</p>

//   <div className='radio-section' >
//   <div className='radio-box'>
//     <input
//       type='checkbox'
//       name='chooseItem'
//       id='item1'
//       value='LoremIpsum1'
//       checked={inputValue.chooseItem == 'LoremIpsum1'}
//       onChange={changeBt}
//       required
//     />

//     <label className='labelif' htmlFor='item1'>
//       <div className='radio-icon'>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           width='30'
//           height='30'
//           viewBox='0 0 30 30'
//           fill='none'
//         >
//           <path
//             d='M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z'
//             fill='#8755DE'
//           />
//           <path
//             d='M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z'
//             fill='#8755DE'
//           />
//         </svg>
//       </div>
//       <div className='radio-content'>
//         <p>Item 1</p>
//         <p>
//           <span>Lorem Ipsum1</span>
//         </p>
//       </div>
//     </label>
//   </div>
  
   
//   <div className='radio-box'>
//     <input
//       type='radio'
//       name='chooseItem2'
//       id='item2'
//       value='LoremIpsum2'
//       onChange={changeBt}
//       checked={inputValue.chooseItem == 'LoremIpsum2'}
//       required
//     />

//     <label className='labelif' htmlFor='item2'>
//       <div className='radio-icon'>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           width='30'
//           height='30'
//           viewBox='0 0 30 30'
//           fill='none'
//         >
//           <path
//             d='M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z'
//             fill='#8755DE'
//           />
//           <path
//             d='M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z'
//             fill='#8755DE'
//           />
//         </svg>
//       </div>
//       <div className='radio-content'>
//         <p>Item 2</p>
//         <p>
//           <span>Lorem Ipsum2</span>
//         </p>
//       </div>
//     </label>
//   </div>
  
  
//   <div className='radio-box'>
//     <input
//       type='radio'
//       name='chooseItem3'
//       id='item3'
//       value='LoremIpsum3'
//       onChange={changeBt}
//       checked={inputValue.chooseItem == 'LoremIpsum3'}
//       required
//     />
    
//     <label className='labelif' htmlFor='item3'>
//       <div className='radio-icon'>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           width='30'
//           height='30'
//           viewBox='0 0 30 30'
//           fill='none'
//         >
//           <path
//             d='M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z'
//             fill='#8755DE'
//           />
//           <path
//             d='M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z'
//             fill='#8755DE'
//           />
//         </svg>
//       </div>
//       <div className='radio-content'>
//         <p>Item 3</p>
//         <p>
//           <span>Lorem Ipsum3</span>
//         </p>
//       </div>
//     </label>
//   </div>
  
  
// </div>
// </div>

