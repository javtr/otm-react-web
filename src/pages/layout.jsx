import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/pure/navBar';
import Footer from '../components/pure/footer';
import ScrollToTop from "react-scroll-to-top";
import { IconContext } from "react-icons";
import { BsFillArrowUpCircleFill } from "react-icons/bs";


export default function layout() {
  return (
    <div className='layout'>

      <ScrollToTop 
      className='gl-goTop--cont'
      smooth
       component={

        <IconContext.Provider value={{ className: "gl-goTop" }}>
          <div>
            <BsFillArrowUpCircleFill />
          </div>
        </IconContext.Provider>

      } />



      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  )
}
