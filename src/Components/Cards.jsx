import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
                <h2 className='text-2xl font-bold py-6'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[160px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-gray-600 hover:text-[#00df9a]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
                <h2 className='text-2xl font-bold py-6'>Double User</h2>
                <p className='text-4xl font-bold'>$249</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[160px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-gray-600 hover:text-[#00df9a]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 text-center rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
                <h2 className='text-2xl font-bold py-6'>Mutiple User</h2>
                <p className='text-4xl font-bold'>$349</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>2 TB Storage</p>
                    <p className='py-2 border-b mx-8'>4 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 8 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[160px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-gray-600 hover:text-[#00df9a]'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards