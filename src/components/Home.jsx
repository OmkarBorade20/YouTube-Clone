import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'
import VideContainer from './VideContainer'

const Home = () => {
  const toogleMenu=useSelector(store=>store.configurations?.toggleMenu)
  return (
    <div className='grid grid-flow-col '>
        <SideBar/>
        <VideContainer/>

    </div>
  )
}

export default Home