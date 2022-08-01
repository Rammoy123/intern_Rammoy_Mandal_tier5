import React from 'react'
import LogoOrg from '../styles/assets/img/Logo.svg'

import rightsign from '../styles/assets/img/rightsign.svg'
import vector from '../styles/assets/img/Vector.svg'
import star from '../styles/assets/img/star.svg'
import { useRouter } from 'next/router'



// import style from "../../styles/assets/css/Membership.module.css"
import style from "../styles/assets/css/Membership.module.css"
const Membership = () => {
    const router = useRouter()

    const handleBar=e=>{
        e.preventDefault()
        router.push({
            pathname: '/Schedule',
            query: {
            //   Day: inputValue.day,
            //   Time: inputValue.time,
              slug: router.query.slug
            }
          })

    }
  return (
  <>


<section className="memebrship">

<div className="text-center">
    <img src={LogoOrg.src}/>
</div>




<div className="membership-plans">
    <div className="backsection">
        <div className="backbutton">
            <a style={{cursor:'pointer'}} onClick={handleBar}>
                <img src={vector.src}/>
                Back
            </a>
        </div>
        <h1>
            Membership Plans
        </h1>
    </div>
    <div className="membership-container">
        <div className=" membership-card">
            <div className="number-wrap">
                <h6>$9</h6>
                <p>Per Pickup</p>
            </div>
            <div className="whats-include">
                <h6>whats include:</h6>

                <div className="include-items">
                    <p>
                        <img src={rightsign.src}/>
                        Schedule a pickup anytime for $9
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Any amount of items, any stores!
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Next day scheduling
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Pickups available M-F
                    </p>
                </div>
            </div>
            <div className="button">
                <a href="" className="common-btn">
                    Pay $9 Each Time
                </a>
            </div>
        </div>
        <div className=" membership-card">
            <div className="trial">
                <span>Free 7-day trial</span>
            </div>
            <div className="number-wrap">
                <h6>$19</h6>
                <p>Monthly</p>
            </div>
            <div className="whats-include">
                <h6>whats include:</h6>

                <div className="include-items">
                    <p>
                        <img src={rightsign.src}/>
                        Unlimited pickups!
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Any amount of items, any stores!
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Ultra-flex scheduling
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Pickups available M-F
                    </p>
                </div>
            </div>
            <div className="button">
                <a href="" className="common-btn">
                   Start Free Trial
                </a>
            </div>
        </div>
        <div className=" membership-card">
            <div className="trial trial-two">
                <span>Free 7-day trial</span>
            </div>
            <img src={star.src} className="starsvg"/>

            <div className="number-wrap">
                <h6>$99</h6>
                <p className="">Annually</p>
            </div>
            <div className="whats-include">
                <h6>whats include:</h6>

                <div className="include-items">
                    <p>
                        <img src={rightsign.src}/>
                        Unlimited pickups!
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Any amount of items, any stores!
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Ultra-flex scheduling
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Pickups 7 days a week
                    </p>
                    <p>
                        <img src={rightsign.src}/>
                        Extended pickup hours
                    </p>
                </div>
            </div>
            <div className="button thirdbtn">
                <a href="" className="common-btn">
                    Start Free Trial
                </a>
            </div>
        </div>
    </div>
</div>
</section>
  </>
  )
}

export default Membership