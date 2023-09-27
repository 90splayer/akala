import Image from 'next/image';
import logo from '../../public/images/logo.png'
import Container from './Container';

export default function Header() {
  return (
    <Container>
    <main className='w-full py-2 flex flex-row items-center justify-between'>
      <div>
        <Image className='w-[90px] h-auto' src={logo} alt='akala'/>
      </div>
      <ul className='flex items-center gap-7'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>BOOKS</li>
        <li>CONTACT</li>
        <li className='bg-yellow-500 px-4 py-2 rounded-md' >DONATE</li>
      </ul>
    </main>
    </Container>
  )
}