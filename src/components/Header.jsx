import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenuBtn } from '../redux/configurationSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const searchText=useRef(null);
    const dispatch=useDispatch();
    const navigate=useNavigate();

  return (
    <div className='grid grid-flow-col shadow-lg bg-gray-300'>
        <div className="flex col-span-1">
            <img onClick={()=>{dispatch(toggleMenuBtn())}} alt="menu" className='h-12 m-2 p-2 cursor-pointer' src="https://www.svgrepo.com/download/313139/hamburger-menu.svg"/>
            <img onClick={()=>{navigate("/")}} alt="menu" className='h-12 m-2 p-2 cursor-pointer' src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"/>
        </div>
        <div className="col-span-10">
            <input ref={searchText} type='text' className='w-[40%] my-4 p-1 border border-black'/>
            <button  onClick={()=>{}} className='my-3 p-1 border border-black bg-gray-300'>Search</button>
        </div>
        <div className="col-span-1">
            <img  onClick={()=>{}} className="h-12 m-2 p-2 cursor-pointer" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        </div>
    </div>
   
  )
}

export default Header