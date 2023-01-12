import React, { useState } from "react"
import { BrowserRouter, Outlet, Link } from "react-router-dom";
import Logo from '../assets/logo.svg'
import "../icon/all.css"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const hamburgerButton = () => {
    setNav(!nav)
  }
  return (
    <>
      <nav className="grid grid-flow-col py-10 px-6 justify-between items-center | md:px-20 md:py-5 xl:grid-flow-col">
        <img src={Logo} alt="logo" />
        <button onClick={hamburgerButton} id="hamburgerButton" type="button" aria-label="Navigasi-Button"
          className="font-bold text-xl text-pink-500 md:hidden xl:hidden">☰</button>
        <div className="hidden inter items-center | md:flex gap-10 | xl:flex xl:gap-10">
          <div>
            <Link to="/" className="text-base">Solusi Sistem <i className="fa fa-chevron-down ml-2"></i></Link>
          </div>
          <div>
            <Link to="/courses" className="text-base">Harga</Link>
          </div>
          <div>
            <Link to="/resource" className="text-base">Blog</Link>
          </div>
          <div>
            <Link to="/about" className="text-base">Login</Link>
          </div>
        </div>
        <div
          className="hidden bg-yellow-300 text-black py-4 px-7 rounded-full | hover:bg-yellow-500 | md:block">
          <Link to="/login" className="text-sm font-semibold pb-1">Jadwalkan Demo</Link>
        </div>
      </nav>
      <section
        className={!nav ? "z-20 fixed left-[-100%] top-0 w-full h-screen inset-0 bg-light-purple grid gap-y-10 grid-cols-2 py-11 px-6 justify-between content-start ease-in-out duration-300 delay-75 md:hidden" : "fixed bg-white left-0 top-0 w-full  h-screen grid gap-y-10 grid-cols-2 py-11 px-6 justify-between content-start  ease-in-out duration-300 delay-75"}
        id="drawer">
        <img src={Logo} alt="logo" />
        <button id="close" type="button" onClick={hamburgerButton} aria-label="Navigasi-Button"
          className="closeButton xl:hidden justify-self-end text-pink-500 font-bold text-xl">X</button>
        <div className="col-start-1 col-end-4 text-center flex flex-col xl:px-5 xl:gap-10 justify-self-center" id="menu">
          <div className="w-full border-y border-slate-300 py-5">
            <Link to="index.html" className="px-20 text-lg">Solusi Sistem <i className="fa fa-chevron-down"></i></Link>
          </div>
          <div className="w-full border-b border-slate-300 py-5">
            <Link to="course.html" className="px-20 text-lg">Harga</Link>
          </div>
          <div className="w-full border-b border-slate-300 py-5">
            <Link to="resource.html" className="px-20 text-lg">Blog</Link>
          </div>
          <div className="w-full border-b border-slate-300 py-5">
            <Link to="about-us" className="px-20 text-lg">Login</Link>
          </div>
          <div
            className="bg-yellow-300 text-black px-7 py-3 mt-5 rounded-sm | xl:px-7 xl:py-2 hover:bg-yellow-500 ">
            <Link to="login.html" className="text-lg px-3">Coba Demo</Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Navbar