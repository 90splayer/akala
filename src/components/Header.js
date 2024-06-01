import Image from 'next/image';
import logo from '../../public/images/logo.png'
import Container from './Container';
import { useEffect, useRef } from 'react';
import {BiMenu} from 'react-icons/bi'
import Link from 'next/link';

export default function Header() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }


  useEffect(() => {
    handleStickyHeader()

    return()=> window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return (
    <Container>
    <div className='header flex items-center bg-white w-full' ref={headerRef}>
    <main className='flex items-center justify-between w-full'>
      <Link href='/'>
        <Image className='w-[90px] h-auto' src={logo} alt='akala'/>
      </Link>
      <div className='navigation' ref={menuRef} onClick={toggleMenu}>
      <ul className='menu flex items-center gap-[2.7rem] text-sm'>
        <Link href='/'><li>HOME</li></Link>
        <Link href="#about"><li>ABOUT</li></Link>
        <Link href='#books'><li>BOOKS</li></Link>
        <Link href='#contact'><li>CONTACT</li></Link>
        <Link href='https://selar.co/showlove/williammoore' target='_blank'><li className='bg-yellow-500 px-4 py-2 rounded-md' >DONATE</li></Link> 
      </ul>
      </div>

      <span className='md:hidden' onClick={toggleMenu}>
        <BiMenu className='w-6 h-6 cursor-pointer'/>
      </span>
    </main>
    </div>
    </Container>
  )
}