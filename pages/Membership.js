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


<section class="memebrship">

<div class="text-center">
    <img src={LogoOrg.src}/>
</div>




<div class="membership-plans">
    <div class="backsection">
        <div class="backbutton">
            <a style={{cursor:'pointer'}} onClick={handleBar}>
                <img src={vector.src}/>
                Back
            </a>
        </div>
        <h1>
            Membership Plans
        </h1>
    </div>
    <div class="membership-container">
        <div class=" membership-card">
            <div class="number-wrap">
                <h6>$9</h6>
                <p>Per Pickup</p>
            </div>
            <div class="whats-include">
                <h6>whats include:</h6>

                <div class="include-items">
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
            <div class="button">
                <a href="" class="common-btn">
                    Pay $9 Each Time
                </a>
            </div>
        </div>
        <div class=" membership-card">
            <div class="trial">
                <span>Free 7-day trial</span>
            </div>
            <div class="number-wrap">
                <h6>$19</h6>
                <p>Monthly</p>
            </div>
            <div class="whats-include">
                <h6>whats include:</h6>

                <div class="include-items">
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
            <div class="button">
                <a href="" class="common-btn">
                   Start Free Trial
                </a>
            </div>
        </div>
        <div class=" membership-card">
            <div class="trial trial-two">
                <span>Free 7-day trial</span>
            </div>
            <img src={star.src} class="starsvg"/>

            <div class="number-wrap">
                <h6>$99</h6>
                <p class="">Annually</p>
            </div>
            <div class="whats-include">
                <h6>whats include:</h6>

                <div class="include-items">
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
            <div class="button thirdbtn">
                <a href="" class="common-btn">
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