import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import {AiFillYoutube} from 'react-icons/ai'
import {motion} from 'framer-motion'

export default function Inspirations() {
    return (
      <Container>
      <motion.div initial={{x:[400], opacity:0}}
         whileInView={{x:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className='w-full border h-auto rounded-md flex-col items-center
      justify-center py-2 px-12 gap-3 flex'>
       <h1 className="text-[2rem] font-semibold text-black">Resources</h1>
       <ul className="">
       <Link href='https://youtube.com/@TheMedicineShell?si=Ru_YOGmDSzFbHpt4' target='_blank' className="flex gap-3 items-center justify-center"><span className="leading-7">Learn about igbo cosmology for non-igbo speakers <span className="font-semibold">From Medicine Shell</span><AiFillYoutube className="inline-block w-8 text-red-600 h-auto"/></span></Link>
       <Link href='https://www.facebook.com/profile.php?id=100066676973079&mibextid=2JQ9oc' target='_blank' className="flex gap-3 items-center justify-center"><span className="leading-7">Learn about igbo traditions and linguistics From <span className="font-semibold">Igbo Heritage</span><AiFillYoutube className="inline-block w-8 text-red-600 h-auto"/></span></Link>
       </ul>
      </motion.div>
      </Container>
    )
  }