'use client';
import Image from 'next/image'
import {easeIn, easeInOut, motion} from 'framer-motion'
import Container from '../Container'
import shooter from '../../../public/images/shooter.png'
import boy from '../../../public/images/boy.png'
import mask from '../../../public/images/mask.png'
import man from '../../../public/images/man.png'
import king from '../../../public/images/king.png'
import floating from '../../../public/images/floating.png'
import sexy from '../../../public/images/sexy.png'
import oracle from '../../../public/images/oracle.png'
import horse from '../../../public/images/horse.png'
import goddess from '../../../public/images/goddess.png'
import styles from './style.scss';
import { useState } from 'react';

   


export default function Actors() {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  
  return (
    <Container>
    <div className='flex flex-row logos w-[800%]' >
    <div className='flex flex-row items-center logosslide'>
       <div className='flex flex-col items-center justify-start' 
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}>
       <Image className='img' width={500} height={500} src={shooter}/>
       <h2 className='font-bold text-lg'>Shooter</h2>
       {isHovered && (
        <motion.div className='flex mx-auto justify-center
          bg-gray-700  flex-wrap
         text-white rounded-md transition duration-300 ease-in'
         initial={{ scale:0, opacity:0 }} animate={{ scale: 1, opacity:1 }}  
         transition={{type: "spring", duration: 0.1 , ease:easeIn}}
         >
         <p className='text-center py-2 px-4'>Shooter never dies <br/>even tho its hard outside</p>
         </motion.div>)}
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered2(true)}
       onMouseLeave={() => setIsHovered2(false)}>
       <Image className='img' width={500} height={500} src={boy}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered3(true)}
       onMouseLeave={() => setIsHovered3(false)}>
       <Image className='img' width={500} height={500} src={mask}/>
       {/* <h2 className='font-bold text-lg'>Shooter</h2>
       {isHovered3 && (
        <motion.div className='flex mx-auto justify-center
          bg-gray-700  flex-wrap
         text-white rounded-md transition duration-300 ease-in'
         initial={{ scale:0, opacity:0 }} animate={{ scale: 1, opacity:1 }}  
         transition={{type: "spring", duration: 0.1 , ease:easeIn}}
         >
         <p className='text-center py-2 px-4'>Shooter never dies <br/>even tho its hard outside</p>
         </motion.div> )} */}
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered4(true)}
       onMouseLeave={() => setIsHovered4(false)}>
       <Image className='img' width={500} height={500} src={goddess}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered5(true)}
       onMouseLeave={() => setIsHovered5(false)}>
       <Image className='img' width={500} height={500} src={floating}/>
       
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered6(true)}
       onMouseLeave={() => setIsHovered6(false)}>
       <Image className='img' width={500} height={500} src={king}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered7(true)}
       onMouseLeave={() => setIsHovered7(false)}>
       <Image className='img' width={500} height={500} src={sexy}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered8(true)}
       onMouseLeave={() => setIsHovered8(false)}>
       <Image className='img' width={500} height={500} src={man}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered9(true)}
       onMouseLeave={() => setIsHovered9(false)}>
       <Image className='img' width={500} height={500} src={oracle}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered1(true)}
       onMouseLeave={() => setIsHovered1(false)}>
       <Image className='img' width={500} height={500} src={horse}/>
       </div> 
      </div>
      <div className='flex flex-row items-center logosslide'>
      <div className='flex flex-col items-center justify-start' 
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}>
       <Image className='img' width={500} height={500} src={shooter}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered2(true)}
       onMouseLeave={() => setIsHovered2(false)}>
       <Image className='img' width={500} height={500} src={boy}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered3(true)}
       onMouseLeave={() => setIsHovered3(false)}>
       <Image className='img' width={500} height={500} src={mask}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered4(true)}
       onMouseLeave={() => setIsHovered4(false)}>
       <Image className='img' width={500} height={500} src={goddess}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered5(true)}
       onMouseLeave={() => setIsHovered5(false)}>
       <Image className='img' width={500} height={500} src={floating}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered6(true)}
       onMouseLeave={() => setIsHovered6(false)}>
       <Image className='img' width={500} height={500} src={king}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered7(true)}
       onMouseLeave={() => setIsHovered7(false)}>
       <Image className='img' width={500} height={500} src={sexy}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered8(true)}
       onMouseLeave={() => setIsHovered8(false)}>
       <Image className='img' width={500} height={500} src={man}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered9(true)}
       onMouseLeave={() => setIsHovered9(false)}>
       <Image className='img' width={500} height={500} src={oracle}/>
       </div> 
       <div className='flex flex-col items-center justify-center' 
       onMouseEnter={() => setIsHovered1(true)}
       onMouseLeave={() => setIsHovered1(false)}>
       <Image className='img' width={500} height={500} src={horse}/>
       </div> 
       
      </div>
      
    </div>
    </Container>
  )
}