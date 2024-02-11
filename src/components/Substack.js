import Container from "./Container";
import {motion} from 'framer-motion'

export default function Substack() {
    return (
    <Container >
     <motion.div id='contact' initial={{x:[-400], opacity:0}}
         animate={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className="bg-gray-50 w-full h-auto mb-8 mt-2">
     <iframe src="https://willifmoore.substack.com/embed" 
     className="w-full h-[250px] rounded-md" frameborder="0"></iframe>
     </motion.div>
     </Container>
    )
  }