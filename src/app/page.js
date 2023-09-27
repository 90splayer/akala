"use client";

import Actors from '../components/Actors/Actors'
import Akala from '../components/Akala'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Story from '../components/Story'
import Essays from '../components/Essays'
import Image from 'next/image'
import Inspirations from '../components/Inspirations'
import Substack from '../components/Substack'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main className="">
     <Header/>
     <Intro/>
     <Akala/>
     <Actors/>
     <Story/>
     <Essays/>
     <Substack/>
     <Inspirations/>
     <Footer/>
    </main>
  )
}
