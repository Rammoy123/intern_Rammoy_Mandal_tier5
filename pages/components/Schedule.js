import React from 'react'
import logo from "../../styles/assets/img/purpleLogo.svg"
import LogoOrg from "../../styles/assets/img/Logo.svg"
import iphone12 from "../../styles/assets/img/iPhone-12.svg" 
import Arrow from "../../styles/assets/img/Arrow.svg"
import blackLogo from "../../styles/assets/img/blacklogo.svg"
import ArrowPurple from "../../styles/assets/img/Arrowpurple.svg"
import imageF from "../../styles/assets/img/image 1.svg"

import { useRouter } from 'next/router'
import { useState } from 'react'

const Schedule = () => {
    const [inputValue,setInputValue]=useState({
        order:"",
        chooseItem:"",
        day:"",
        time:"",
        contactInfo:""



    })



    



    const router = useRouter()
    console.log(router.query)


  const handleBar = e => {
  
    e.preventDefault()
    // router.push( "/component/Testing2"
    // )

    router.push({
      pathname: '/components/Shopping',
      query:{Day:inputValue.day,Time:inputValue.time,Brand:router.query.brand}
       }
  )
  }

  const changeBt=(e)=>{
    console.log(e.target.name,"valueee")

    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }
  console.log(inputValue,"input Value")
  return (
    <>

<section class="main-wrpper">
        
        <div class="main-wrp-content schedule-wrp">
              <div class="main-wrp-continner">
                   <div class="logo-top-section">
                       <a onClick={(e)=>{e.preventDefault();
                 router.push({
        pathname: '/components/Home1'
         })
                }} class="site-logo"><img src={LogoOrg.src} alt="logo"/></a>
                       <div class="logo-container">
                           <a href="#">
                               <img src={imageF.src} alt="yourlogo"/>
                           </a>
                           <span></span>
                           <a href="https://bitpastel.io/ReturnQueen/b2b/">
                               <img src={blackLogo.src} class="blacklogo" alt="logo"/>
                           </a>
                       </div>
                   </div>
                  
                   <form id="myform">
                       <div class="order-number">
                           <div class="order-id">
                               <p>Order&nbsp;#</p>
                               <input type="text" name="order" value={inputValue.order} placeholder="" onChange={changeBt} required/>
                           </div>
                           <div><p>or</p></div>
                           <div class="select-or-signin">
                               <div class="select-order"><a href="#">Select Order</a></div>
                               <div class="sign-in"><a href="#">Sign In</a></div>
                           </div>
                       </div>
                       <hr class="hr" />

                       <div class="custom-radio items-radio">
                           <p>Choose Items</p>
                           <div class="radio-section" onChange={changeBt}>
                               <div class="radio-box">
                                   <input type="radio" name="chooseItem" id="item1" value="LoremIpsum1" checked={inputValue.chooseItem=="LoremIpsum1"} required/>
                                   <label for="item1">
                                       <div class="radio-icon">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                               <path d="M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z" fill="#8755DE"/>
                                               <path d="M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z" fill="#8755DE"/>
                                               </svg>
                                       </div>
                                       <div class="radio-content">
                                           <p>Item 1</p>
                                           <p><span>Lorem Ipsum1</span></p>
                                       </div>
                                   </label>
                               </div>
                               <div class="radio-box">
                                   <input type="radio" name="chooseItem" id="item2" value="LoremIpsum2" checked={inputValue.chooseItem=="LoremIpsum2"}required/>
                                   <label for="item2">
                                       <div class="radio-icon">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                               <path d="M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z" fill="#8755DE"/>
                                               <path d="M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z" fill="#8755DE"/>
                                               </svg>
                                       </div>
                                       <div class="radio-content">
                                           <p>Item 2</p>
                                           <p><span>Lorem Ipsum2</span></p>
                                       </div>
                                   </label>
                               </div>
                               <div class="radio-box">
                                   <input type="radio" name="chooseItem" id="item3" value="LoremIpsum3" checked={inputValue.chooseItem=="LoremIpsum3"} required/>
                                   <label for="item3">
                                       <div class="radio-icon">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                               <path d="M26.8792 24.7393L25.5394 7.85754C25.4559 6.76992 24.5361 5.91791 23.4453 5.91791H20.7991V5.79896C20.7991 2.60139 18.1977 0 15.0001 0C11.8025 0 9.20114 2.60139 9.20114 5.79896V5.91791H6.55493C5.46409 5.91791 4.54422 6.76986 4.46102 7.85525L3.12086 24.7416C3.01715 26.0937 3.4862 27.4397 4.40764 28.4345C5.32909 29.4294 6.63532 30 7.99135 30H22.0088C23.3648 30 24.6711 29.4294 25.5926 28.4345C26.514 27.4397 26.983 26.0937 26.8792 24.7393ZM10.9584 5.79896C10.9584 3.57035 12.7715 1.75723 15.0001 1.75723C17.2287 1.75723 19.0418 3.57041 19.0418 5.79896V5.91791H10.9584V5.79896ZM24.3033 27.2405C23.7046 27.8868 22.8898 28.2428 22.0088 28.2428H7.99141C7.1104 28.2428 6.29559 27.8868 5.69688 27.2405C5.09823 26.5942 4.80561 25.7544 4.87288 24.8783L6.21292 7.99189C6.22651 7.81424 6.37674 7.67514 6.55493 7.67514H9.20114V9.8393C9.20114 10.3245 9.59454 10.7179 10.0798 10.7179C10.565 10.7179 10.9584 10.3245 10.9584 9.8393V7.67514H19.0418V9.8393C19.0418 10.3245 19.4352 10.7179 19.9205 10.7179C20.4057 10.7179 20.7991 10.3245 20.7991 9.8393V7.67514H23.4453C23.6235 7.67514 23.7737 7.8143 23.7875 7.99424L25.1273 24.876C25.1947 25.7544 24.902 26.5941 24.3033 27.2405Z" fill="#8755DE"/>
                                               <path d="M18.9582 14.8995C18.6152 14.5564 18.0589 14.5564 17.7158 14.8995L13.7926 18.8227L12.2841 17.3142C11.941 16.971 11.3846 16.971 11.0415 17.3142C10.6984 17.6573 10.6984 18.2136 11.0415 18.5567L13.1713 20.6865C13.3429 20.8581 13.5678 20.9439 13.7926 20.9439C14.0173 20.9439 14.2423 20.8581 14.4138 20.6865L18.9582 16.1421C19.3014 15.7989 19.3014 15.2426 18.9582 14.8995Z" fill="#8755DE"/>
                                               </svg>
                                       </div>
                                       <div class="radio-content">
                                           <p>Item 3</p>
                                           <p><span>Lorem Ipsum3</span></p>
                                       </div>
                                   </label>
                               </div>
                           </div>
                       </div>
                       <div class="custom-radio day-radio">
                           <p>Select day:</p>
                             <div class="radio-section" onChange={changeBt}>
                               <div class="radio-box">
                                   <input type="radio" name="day" id="day1" value="Wednesday" checked={inputValue.day=="Wednesday"} required/>
                                   <label for="day1">
                                       <div class="radio-content">
                                           <p>June</p>
                                           <h6>17</h6>
                                           <p>Wednesday</p>
                                       </div>
                                   </label>
                               </div>
                               <div class="radio-box">
                                   <input type="radio" name="day" id="day2" value="Thrusday" checked={inputValue.day=="Thrusday"} required/>
                                   <label for="day2">
                                       <div class="radio-content">
                                           <p>June</p>
                                           <h6>18</h6>
                                           <p>Thursday</p>
                                       </div>
                                   </label>
                               </div>
                               <div class="radio-box">
                                   <input type="radio" name="day" id="day3" value="Friday" checked={inputValue.day=="Friday"} required/>
                                   <label for="day3">
                                       <div class="radio-content">
                                           <p>June</p>
                                           <h6>19</h6>
                                           <p>Friday</p>
                                       </div>
                                   </label>
                               </div>
                               <div class="radio-box">
                                   <input type="radio" name="day" id="day4" value="Saturday" checked={inputValue.day=="Saturday"} required/>
                                   <label for="day4">
                                       <div class="radio-content">
                                           <p>June</p>
                                           <h6>20</h6>
                                           <p>Saturday</p>
                                       </div>
                                   </label>
                               </div>
                               <div class="radio-box">
                                   <input type="radio" name="day" id="day5" value="Sunday" checked={inputValue.day=="Sunday"} required/>
                                   <label for="day5">
                                       <div class="radio-content">
                                           <p>June</p>
                                           <h6>21</h6>
                                           <p>Sunday</p>
                                       </div>
                                   </label>
                               </div>
                           </div>
                           <div class="note">
                               <p class="color">No printing or packaging refund.</p>
                               
                           </div>
                       </div>

                       <hr class="hr2" />

                       <div class="custom-radio time-radio">
                           <p>Choose time of pick up</p>
                         
                           <div class="time-radio-section" onChange={changeBt}>
                               <div class="schedule-time-box">
                                   <div class="radio-box">
                                       <input type="radio" name="time" id="time0" value="Flex Time 8AM - 6PM" checked={inputValue.time=="Flex Time 8AM - 6PM"}  required/>
                                       <label for="time0">
                                           <div class="radio-content">
                                               <p>Flex Time 8AM - 6PM</p>
                                           </div>
                                       </label>
                                   </div>
                               </div>
                               <div class="or-time">OR</div>
                               <div class="radio-section" >
                                   <div class="radio-box">
                                       <input type="radio" name="time" id="time1"  value="8AM - 10PM" checked={inputValue.time=="8AM - 10PM"}  required/>
                                       <label for="time1">
                                           <div class="radio-content">
                                               <p>8Am - 10PM</p>
                                           </div>
                                       </label>
                                   </div>
                                   <div class="radio-box">
                                       <input type="radio" name="time" id="time2"  value="12PM - 3PM" checked={inputValue.time=="12PM - 3PM"} required/>
                                       <label for="time2">
                                           <div class="radio-content">
                                               <p>12Pm - 3Pm</p>
                                           </div>
                                       </label>
                                   </div>
                                   <div class="radio-box">
                                       <input type="radio" name="time" id="time3" required  value="3PM - 4PM" checked={inputValue.time=="3PM - 4PM"}/>
                                       <label for="time3">
                                           <div class="radio-content">
                                               <p>3Pm - 4PM</p>
                                           </div>
                                       </label>
                                   </div>
                                   <div class="radio-box">
                                       <input type="radio" name="time" id="time4"  value="4PM - 6PM" checked={inputValue.time=="4PM - 6PM"} required/>
                                       <label for="time4">
                                           <div class="radio-content">
                                               <p>4Pm - 6Pm</p>
                                           </div>
                                       </label>
                                   </div>
                                   <div class="radio-box">
                                       <input type="radio" name="time" id="time5" value="7PM - 9PM" checked={inputValue.time=="7PM - 9PM"} required/>
                                       <label for="time5">
                                           <div class="radio-content">
                                               <p>7Pm - 9Pm</p>
                                           </div>
                                       </label>
                                   </div>
                               </div>
                           </div>

                       </div>

                       <div class="delivery-radio" onChange={changeBt}>
                           <div class="delivery-content">
                               <input type="radio" name="contactInfo" id="delivery1"  value="contactless" checked={inputValue.contactInfo=="contactless"} required/>
                               <label for="delivery1">Contactless</label>
                           </div>
                            <div class="delivery-content">
                               <input type="radio" name="contactInfo" id="delivery2"  value="hand-off" checked={inputValue.contactInfo=="hand-off"} required/>
                               <label for="delivery2">Driver hand-off</label>
                           </div>
                       </div>

                       {

                        (inputValue.chooseItem && inputValue.contactInfo && inputValue.day && inputValue.time && inputValue.order) ? (
                        
                       <a  onClick={handleBar} style={{background:'#8755DE'}} class="com-button">
                           Schedule Pickup
                       </a>
                        ) : (<a   class="com-button">
                           Schedule Pickup
                       </a> )
                       }
                   </form>
              </div>
        </div>
   </section>
    </>
  )
}

export default Schedule