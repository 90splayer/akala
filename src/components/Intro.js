"use client";
import Container from "./Container";
import {motion} from 'framer-motion'

export default function Intro() {
    return (
    <Container>
      <main className='flex items-center justify-between my-20'>
        <motion.div initial={{x:[-400], opacity:0}}
         whileInView={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}}  className='flex w-1/2 flex-col gap-3'>
          <h2 className="font-bold text-[3rem]">'Akala'</h2>
          <p className="text-gray-500">The Legion</p>
        </motion.div>
        <motion.div initial={{x:[400], opacity:0}}
         whileInView={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className="w-1/2 px-4">
        <p className="text-xl font-medium">William Moores first monograph collects 10 years of his work as a writer.</p>
        </motion.div>
      </main>
      </Container>
    )
  }