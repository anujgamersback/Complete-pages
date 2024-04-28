import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header";
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='flex-1 overflow-y-auto px-10'>
        <Outlet/>
    </div>
  )
}
export default Layout