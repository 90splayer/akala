"use client";
import Container from "./Container";
import {motion} from 'framer-motion'

export default function Intro() {
    return (
    <Container>
      <main className='flex items-start justify-between my-20'>
        <motion.div initial={{x:[-400], opacity:0}}
         whileInView={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}}  className='flex w-1/2 flex-col gap-3'>
          <h2 className="font-bold text-[3rem]">'Akala'</h2>
        </motion.div>
        <motion.div initial={{x:[400], opacity:0}}
         whileInView={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className="w-1/2 px-4 flex flex-col items-start justify-center gap-4">
        <p className="text-xl font-medium">"Chinua Achebe can now rest with the other ancestors drinking palm wine in uwa mmuo. A worthy successor has arrived."</p>
        <p className="flex text-xs">- Jerry Chiemeke</p>
        </motion.div>
      </main>
      </Container>
    )
  }