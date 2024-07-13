import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {

    const toggle=useSelector(store=>store.configurations?.toggleMenu);

  return toggle && (
    <div className='px-6 w-48 shadow-xl h-svh '>
            <ul className='mx-4 py-4'>
            <li className='text-lg my-2'>Home</li>
            <li className='my-2'>Shorts</li>
            <li className='my-2'>Subscriptions</li>

            <li className='text-lg font-bold my-2 mt-6'> Explore</li>
            <li className=' text-lg  my-2'>Music</li>
            <li className=' text-lg  my-2'>Sports</li>
            <li className=' text-lg  my-2'>Games</li>
            <li className=' text-lg  my-2'>Movies</li>
            <li className=' text-lg  my-2'>Live</li>
            <li className=' text-lg  my-2'>Videos</li>

            <li className='text-lg font-bold my-2 mt-6'> Subscriptions</li>
            <li className=' text-lg  my-2'>Music</li>
            <li className=' text-lg  my-2'>Sports</li>
            <li className=' text-lg  my-2'>Games</li>
            <li className=' text-lg  my-2'>Movies</li>
            <li className=' text-lg  my-2'>Live</li>
            <li className=' text-lg  my-2'>Videos</li>
           
        </ul>
    </div>
  )
}

export default SideBar;