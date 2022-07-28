import logo from '../styles/assets/img/purpleLogo.svg'

import blackLogo from '../styles/assets/img/blacklogo.svg'

import { useRouter } from 'next/router'
import db from './components/Json/retailers.json'

const Shopping = () => {
  const router = useRouter()

  console.log(router.query, 'query in')

  const handleBar = e => {
    e.preventDefault()
    // router.push( "/component/Testing2"
    // )
    console.log(e, 'eeeeeeeeeeee')
    router.push({
      pathname: '/Home1'
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
              {router.query.Brand &&
                db.map(arr => {
                  if (router.query.Brand == arr.name) {
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
                {router.query.Brand != 'Other' ? (
                  <span> {router.query.Brand} </span>
                ) : (
                  <span> us ! </span>
                )}
              </p>
            </div>

            <a
              style={{
                background: '#8755DE',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'white'
              }}
              className='com-button'
            >
              Countinue Shopping
            </a>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
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
