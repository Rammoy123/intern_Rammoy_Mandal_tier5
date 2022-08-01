import React,{useState} from 'react'


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
 
    const router=useRouter()
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    // const {Document,Page} =require('react-pdf/dist/esm/entry.webpack')
    // console.log(Document,"kkkkkk")
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
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
  
 
  <a onClick={handleBar1}>  <BiChevronLeft style={{fontSize:"25px",color:"black",zIndex: 5}}/> </a>


</div>

  

  </div>
  {/* <div className='absolute' style={{position:'relative',top:'10px',left:'20%',zIndex:'5'}} >
  <BsFillArrowLeftCircleFill/>

  </div> */}
  {/* frameborder="0" allowfullscreen */}
  {/* scrolling="no" */}
  
<div className={style.inner}>

<Document     file="/eTail.pdf"  onLoadSuccess={onDocumentLoadSuccess}  >
{/* <Page width={1440} height={100000} onLoadSuccess={removeTextLayerOffset}  pageNumber={pageNumber} /> */}

{Array.from(new Array(numPages), (el, index) => (
        <Page    className="react-pdf__Page__canvas"  key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}

      </Document>
     
      {/* <PDFViewer>
children={`/eTail.pdf`}

      </PDFViewer> */}
   



  {/* <iframe allowFullScreen  frameBorder="0"     style={{ margin:0,width:'100%',height:'100%'}} src="/eTail.pdf" /> */}




  {/* <PDFViewer>
      children={`/eTail.pdf`}
      
            </PDFViewer> */}






 </div>
 </div>
    
  )
  //  ReactDOM.render(<PDFViewer />) 
  
}

//  ReactDOM.render(<SeeUrPerks />) 

export default SeeUrPerks

