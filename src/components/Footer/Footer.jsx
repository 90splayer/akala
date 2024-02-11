'use client';
import styles from './page.scss'
import GsapMagnetic from './gsap';
import FramerMagnetic from './framer';
import Container from '../Container';
import {motion} from 'framer-motion'
import Link from 'next/link';

export default function Footer() {
  return (
    <Container className=''>
      
      <motion.div initial={{y:[100], opacity:0}}
         whileInView={{y:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once:true}} className='container flex items-center justify-around mt-24 mb-20'>
         <Link href={'https://www.facebook.com/willifmoore?mibextid=2JQ9oc'}>
          <GsapMagnetic className='inline-block'>
            <svg className='fill-gray-700  hover:fill-[#ec4e39] cursor-pointer' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 31.5 58">
              <path d="m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z"/>
            </svg>
          </GsapMagnetic>
          </Link>
          
          <Link href={'https://www.instagram.com/willifmoore?igsh=MWFiMHViOGlqcGYxdQ%3D%3D&utm_source=qr'}>
          <GsapMagnetic className='inline-block'>
            <svg className='fill-gray-700  hover:fill-[#ec4e39] cursor-pointer' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
             <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </GsapMagnetic>
          </Link>
          
          <Link href={'https://www.youtube.com/live/viTIpetKcaQ?si=p94M_LqTVSTY4_9M'}>
          <GsapMagnetic className='inline-block'>
            <svg className='fill-gray-700  hover:fill-[#ec4e39] cursor-pointer' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 51.1 36.69">
              <path d="m26.22,36.56c-4.74,0-9.49,0-14.23,0-3.93,0-7.19-1.49-9.63-4.58-1.02-1.29-1.66-2.82-2.03-4.45-.28-1.25-.28-2.52-.29-3.78C.03,19.98,0,16.21,0,12.44c0-1.06,0-2.13.18-3.17.2-1.09.59-2.15,1.16-3.13C2.75,3.73,4.77,1.97,7.28.79c.85-.4,1.78-.61,2.74-.63,2.02-.04,4.04-.21,6.06-.14,7.73.27,15.47.02,23.2.14,1.97.03,3.89.43,5.62,1.33,2.23,1.16,3.98,2.81,4.91,5.25.52,1.36.76,2.72.93,4.16.56,4.65.3,9.32.27,13.98-.02,2.7-.92,5.16-2.63,7.27-1.73,2.15-3.95,3.62-6.68,4.08-1.8.31-3.64.39-5.47.43-3.34.06-6.68.02-10.02.02,0-.04,0-.07,0-.11Zm7.94-18.51c-4.62-2.62-9.12-5.17-13.62-7.71-.12-.07-.29-.07-.4-.1v16.33c4.78-2.84,9.41-5.56,14.03-8.52Z"/>
            </svg>
          </GsapMagnetic>
          </Link>

          <Link href={'https://www.tiktok.com/@willifmoore?_t=8jnFaRl1bML&_r=1'}>
          <GsapMagnetic className='inline-block'>
            <svg className='fill-gray-700  hover:fill-[#ec4e39] cursor-pointer' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 47.26 53.87">
              <path d="m34.27,18.6c0,4.82,0,9.64.03,14.47.01,2.53-.24,5.01-.67,7.5-.68,3.88-2.69,6.84-5.66,9.33-2.21,1.86-4.72,2.98-7.48,3.6-1.02.23-2.09.29-3.14.34-3.54.18-6.73-.93-9.64-2.84-2.68-1.76-4.74-4.12-6.12-7.05-.74-1.58-1.16-3.26-1.51-4.94-.2-.98,0-2.04-.02-3.06-.07-3.01,1.1-5.62,2.62-8.11,2.19-3.6,5.35-5.98,9.35-7.26,1.24-.4,2.51-.7,3.84-.66.33.01.66-.13.99-.14.83-.02,1.65,0,2.58,0v9.31c-.27,0-.55-.01-.84,0-1.06.05-2.13.05-3.18.18-2.4.29-3.92,1.83-5.15,3.74-1.77,2.78-.84,7.04,1.38,9.35,2.28,2.38,6.05,2.67,8.72,1.48.6-.27,1.18-.6,1.73-.98,1.45-1.01,2.12-2.51,2.39-4.17.62-3.94.33-7.92.36-11.89.05-7.97,0-15.95,0-23.92,0-.87,0-1.74,0-2.72,3.08-.25,6.11-.14,9.16-.19.91,7.84,5.41,12.08,13.22,13.34-.07,2.84.22,5.85-.25,8.97-4.44-.24-8.48-1.55-12.25-3.76-.11-.11-.22-.22-.33-.33-.05.13-.09.25-.14.38Z"/>
            </svg>
          </GsapMagnetic>
          </Link>
       
      </motion.div>
    </Container>
  )
}