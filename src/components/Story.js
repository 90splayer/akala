import Container from "./Container";

export default function Story() {
    return (
    <Container>
      <div className='w-full h-auto rounded-md flex-col items-start
      justify-center bg-gray-50 shadow-md py-8 px-12 gap-7 flex'>
       <h1 className="text-[2rem] font-semibold text-black">The story so far...</h1>
       <p className="leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Sed sed auctor elit. Proin mollis arcu nibh, quis blandit lacus commodo sit amet. 
       Proin blandit purus id mauris fermentum aliquam. Vestibulum.Lorem ipsum 
       dolor sit amet, consectetur adipiscing elit. Sed sed auctor elit. Proin mollis 
       arcu nibh, quis blandit lacus commodo sit amet. Proin blandit purus id mauris 
       fermentum aliquam. Vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Sed sed auctor elit. Proin mollis arcu nibh, quis blandit lacus commodo sit amet. Proin 
       blandit purus id mauris fermentum aliquam. Vestibulum.</p>
      </div>
      </Container>
    )
  }