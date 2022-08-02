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


<section className={style.memebrship}>

<div  style={{textAlign:"center"}}>
    <img src={LogoOrg.src}/>
</div>




<div className={style.membershipPlans}>
    <div className={style.backsection}>
        <div className={style.button}>
            <a style={{cursor:'pointer'}} onClick={handleBar}>
                <img src={vector.src}/>
                Back
            </a>
        </div>
        <h1>
            Membership Plans
        </h1>
    </div>
    <div className={style.membershipContainer}>
        <div className={ style.membershipCard}>
            <div className={style.numberWrap}>
                <h6>$9</h6>
                <p>Per Pickup</p>
            </div>
            <div className={style.whatsInclude}>
                <h6>whats include:</h6>

                <div className={style.includeItems}>
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
            <div className={style.button}>
                <a href="" className={style.commonBtn}>
                    Pay $9 Each Time
                </a>
            </div>
        </div>
        <div className={style.membershipCard}>
            <div className={style.trial}>
                <span>Free 7-day trial</span>
            </div>
            <div className={style.numberWrap}>
                <h6>$19</h6>
                <p>Monthly</p>
            </div>
            <div className={style.whatsInclude}>
                <h6>whats include:</h6>

                <div className={style.includeItems}>
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
            <div className={style.button}>
                <a href="" className={style.commonBtn}>
                   Start Free Trial
                </a>
            </div>
        </div>
        <div className={style.membershipCard}>
            <div className= { [style.trial, style.trialTwo].join(' ')}>
          
                <span>Free 7-day trial</span>
            </div>
            <img src={star.src} className={style.starsvg}/>

            <div className={style.numberWrap}>
                <h6>$99</h6>
                <p className="">Annually</p>
            </div>
            <div className={style.whatsInclude}>
                <h6>whats include:</h6>

                <div className={style.includeItems}>
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
            <div className={ [style.button, style.thirdbtn].join(' ')}>
         
                <a href="" className={style.commonBtn}>
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