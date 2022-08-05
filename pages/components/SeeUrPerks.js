import React, { useState, useEffect } from 'react'

import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import style from '../../styles/assets/css/Seeperks.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

import loading from '../../styles/assets/img/loading.gif'
import $ from 'jquery'

const SeeUrPerks = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [width1, setWidth] = useState('100%')
  const [load, setload] = useState(true)

  const router = useRouter()
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
  // const {Document,Page} =require('react-pdf/dist/esm/entry.webpack')
  // console.log(Document,"kkkkkk")

  useEffect(() => {
    console.log('heyyyy')

    if (!load) {
      setTimeout(() => {
        console.log($('#innerParent'), 'lll')
        $('#imageParent').css('display', 'none')

        $('#innerParent').css('height', '90vh')

        console.log('ppp')
      }, [3000])

      console.log('lopp')
    }
  }, [load])
  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages)
    console.log('error')

    // setload(false)
  }

  const onPageLoadSuccess = e => {
    console.log(e._pageIndex)
    if (e._pageIndex >= 11) {
      setload(false)
    }
  }

  function removeTextLayerOffset () {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent'
    )
    textLayers.forEach(layer => {
      const { style } = layer
      style.top = '0'
      style.left = '0'
      style.transform = ''
    })
  }

  // console.log(router.query)
  const handleBar1 = e => {
    e.preventDefault()

    if (
      router.query.slug &&
      router.query.returnDay &&
      router.query.IdealInInventory
    ) {
      router.push({
        pathname: '/[Perks].js',
        query: {
          slug: router.query.slug,
          returnDay: router.query.returnDay,
          IdealInInventory: router.query.IdealInInventory
        }
      })
    } else {
      router.push({
        pathname: '/[Perks].js',
        query: { slug: router.query.slug }
      })
    }
  }

  return (
    <div className={style.p}>
      <div className={style.parent}>
        <div className={style.child}>
          <a className={style.a} onClick={handleBar1}>
            {' '}
            <BiChevronLeft
              className={style.sign}
              style={{ bottom: '0px' }}
            />{' '}
            Back{' '}
          </a>
        </div>
      </div>
      {/* (load)?( */}
      {}
      <div id='innerParent' className={style.inner}>
        <div id='imageParent' className={style.loadingParent}>
          <img src={loading.src} alt='Loading ....' />
        </div>
        {console.log('rammoyyy')}

        <Document file='/eTail.pdf' onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              onLoadSuccess={onPageLoadSuccess}
              className='react-pdf__Page__canvas'
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </Document>
      </div>
      
    </div>
  )
  //  ReactDOM.render(<PDFViewer />)
}

//  ReactDOM.render(<SeeUrPerks />)

export default SeeUrPerks

{
  /* scale={0.5} */
}

{
  /* <PDFViewer>
children={`/eTail.pdf`}

      </PDFViewer> */
}

{
  /* <iframe allowFullScreen  frameBorder="0"     style={{ margin:0,width:'100%',height:'100%'}} src="/eTail.pdf" /> */
}

{
  /* <PDFViewer>
      children={`/eTail.pdf`}
      
            </PDFViewer> */
}
{
  /* <div className='absolute' style={{position:'relative',top:'10px',left:'20%',zIndex:'5'}} >
  <BsFillArrowLeftCircleFill/>

  </div> */
}
{
  /* frameborder="0" allowfullscreen */
}
{
  /* scrolling="no" */
}
