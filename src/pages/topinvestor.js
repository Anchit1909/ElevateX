import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Box from "@/components/Box";
import  Component1 from "@/components/Component1";

function topinvestor() {
  return (
    <div>
        <Header/>
        <div className='h-96 flex flex-col items-center justify-center md:align-middle bg-grey-100 w-screen '>
           <p className='text-4xl md:text-5xl leading-10 md:ml-0 ml-14'>Introduce your own startup </p>
            <p className='text-xg leading-10 mt-10'> Connect to different people in the world</p>
        </div>
        <div class="h-screen w-full bg-local-image bg-cover bg-center bg-no-repeat bg-fixed"></div>
        <div className='flex flex-col items-center justify-center align-middle '>
           
            <Box/>
            
        </div>
        <div className='flex flex-col items-center justify-center align-middle mt-14 bg-[#fcf5e5] w-screen'>
        <p className='text-5xl mt-16'>Our Top Investors</p>
      
        <Component1/>
        </div>


      






        <Footer/>
        
    </div>
    
  )
}

export default topinvestor