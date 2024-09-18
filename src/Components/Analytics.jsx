import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-8 px-4'>
        <div className='max-w-[1150px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] mx-auto my-6' src={Laptop} atl="/"/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos laborum consectetur nobis repellendus totam deleniti incidunt, omnis maxime nemo non voluptates praesentium consequuntur possimus? Vel in labore soluta optio.</p>
                <button className='bg-black w-[160px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black'>Get Started</button>
            </div>
            
        </div>
    </div>
  )
}

export default Analytics