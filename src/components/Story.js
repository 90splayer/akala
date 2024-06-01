import Link from "next/link";
import Container from "./Container";

export default function Story() {
    return (
    <Container >
      <div id='about' className='w-full h-auto rounded-md flex-col items-start
      justify-center bg-gray-50 shadow-md py-8 px-12 gap-7 flex'>
       <h1 className="text-[2rem] font-semibold text-black">The story so far...</h1>
       <p className="leading-10">When the Pig-Men from the Western sea begin to usurp rulers in the costal regions of Afaraka, looting sacred objects and grabbing native land, one man must gift his son with the memory of where he comes from, so that he may remember - after he has forgotten.</p>
       <div className="flex w-full items-center justify-center text-sm"><Link href='https://open.substack.com/pub/storystory?r=fprzy&utm_medium=ios' target='_blank' className='bg-yellow-500 px-4 py-2 rounded-md'>Read Chapters</Link>
      </div>
      </div>
      </Container>
    )
  }