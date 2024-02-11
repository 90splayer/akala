import Image from 'next/image'
import book from '../../public/images/book.png'
import Container from './Container'
import {motion} from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Akala() {
  
  return (
    <Container>
    <motion.div  variants={container}
    initial="hidden"
    animate="visible" className='flex flex-col gap-2 w-full bg-gray-100 
    items-center justify-center pt-16 pb-8 rounded-lg'>
    <motion.h1 initial={{y:[100], opacity:0}}
         whileInView={{y:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className='text-center text-[3rem] font-semibold text-black'>What is Akala?</motion.h1>
      <div className='grid grid-cols-7 items-center justify-center'>
        <motion.div initial={{x:[-400], opacity:0}}
         whileInView={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className='col-span-2 mr-[-3rem] z-10'>
          <Image src={book} className=''/>
        </motion.div>
        
        <motion.div variants={item} initial="hidden"
         animate="visible" className='col-span-5 bg-white py-8 px-16 leading-10 shadow-lg'>
          <p>Akala is a work of African surrealism that draws heavily on Igbo pre-colonial culture and belief system to tell the story of a people in a time now lost. Welcome to the adventure!</p>
        </motion.div>
      </div>
    </motion.div>
    </Container>
  )
}