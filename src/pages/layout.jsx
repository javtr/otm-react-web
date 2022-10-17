import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/pure/navBar';
import Footer from '../components/pure/footer';


export default function layout() {
  return (
    <div className='layout'>
      <NavBar></NavBar>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}
