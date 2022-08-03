import React,{useState,useEffect} from 'react'


import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {BiChevronLeft} from "react-icons/bi";
import style from "../../styles/assets/css/Seeperks.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Document, Page,pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Loading from './Loading'
import $ from 'jquery'

// import '../../styles/assets/css/main.css'
// import pdf from "../../public/eTail.pdf"
// import { Page, Text, View, Document, StyleSheet ,PDFViewer} from '@react-pdf/renderer';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'


 
// const   Lol=()=>{
//   <PDFViewer>
//       children={`/eTail.pdf`}
      
//             </PDFViewer>

// }
//  ReactDOM.render(<h1> lol</h1>,document.getElementById("root")) 




const SeeUrPerks = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width1,setWidth]=useState('100%')
  const [load,setload]=useState(true)

 
    const router=useRouter()
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    // const {Document,Page} =require('react-pdf/dist/esm/entry.webpack')
    // console.log(Document,"kkkkkk")



//     useEffect(()=>{

// function mmm(){
//   if(!load){
//     $('.inner').css('display','block')
//     $('.spin').css('display','none')
    

//   }

// }


// if(!load){
  
//   setTimeout(()=>{
    
//    console.log($('.spin'),"lll")
    
//     $('.spin').css('visibility','hidden')
//     console.log("ppp")

//   },[10000])

//   console.log("lopp")
// }

// mmm()

//       setTimeout(()=>{


//         $('.inner').css('display','block')
//       },[000])

      


//     },[load])
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
  

     

      // setload(false)
    }

// const onPageSuccess=(e)=>{
//   console.log((e._pageIndex))
//   if(e._pageIndex>=11){
    
//     setload(false)
//   }
// }

    function removeTextLayerOffset() {
      const textLayers = document.querySelectorAll(
        '.react-pdf__Page__textContent'
      );
      textLayers.forEach((layer) => {
        const { style } = layer;
        style.top = '0';
        style.left = '0';
        style.transform = '';
      });
    }




    // console.log(router.query)
    const handleBar1 = e => {
  
    
      e.preventDefault()
    
  if((router.query.slug) &&(router.query.returnDay) &&(router.query.IdealInInventory)){
      router.push({
        pathname: '/[Perks].js',
         query:{ slug: router.query.slug,
          returnDay:router.query.returnDay ,
          IdealInInventory: router.query.IdealInInventory}
         
         }
    )
        }

        else{
          router.push({
            pathname: '/[Perks].js',
             query:{ slug: router.query.slug}
              
             
             }
        )

        }
    }
    
      
      
    
  return (
    
 
  <div className={style.p}>

  <div className={style.parent}>
  <div className={style.child}>
  
 
  <a className={style.a} onClick={handleBar1}>  <BiChevronLeft className={style.sign} style={{bottom:"0px"}}/> Back </a>


</div>

  

  </div>
  
   {/* < div className='spin'>
    <Loading/>
    </div> */}

  

  
<div id='kkk' className={style.inner}>
{console.log("rammoyyy")}

<Document     file="/eTail.pdf"  onLoadSuccess={onDocumentLoadSuccess}  >


{Array.from(new Array(numPages), (el, index) => (
        <Page     className="react-pdf__Page__canvas"  key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}

      </Document>

      </div>)
  
 </div>
  






 
    
  )
  //  ReactDOM.render(<PDFViewer />) 
  
}

//  ReactDOM.render(<SeeUrPerks />) 

export default SeeUrPerks

    {/* scale={0.5} */}
     
      {/* <PDFViewer>
children={`/eTail.pdf`}

      </PDFViewer> */}
   



  {/* <iframe allowFullScreen  frameBorder="0"     style={{ margin:0,width:'100%',height:'100%'}} src="/eTail.pdf" /> */}




  {/* <PDFViewer>
      children={`/eTail.pdf`}
      
            </PDFViewer> */}
              {/* <div className='absolute' style={{position:'relative',top:'10px',left:'20%',zIndex:'5'}} >
  <BsFillArrowLeftCircleFill/>

  </div> */}
  {/* frameborder="0" allowfullscreen */}
  {/* scrolling="no" */}