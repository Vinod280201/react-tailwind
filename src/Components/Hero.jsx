import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-40px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with Data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <ReactTyped 
                  className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
                  strings={['BTB','BTC','SASS']}
                  typeSpeed={140}
                  backSpeed={160}
                  loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold px-4 text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className='bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-gray-600 hover:text-[#00df9a] '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
