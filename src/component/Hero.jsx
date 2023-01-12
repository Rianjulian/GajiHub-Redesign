import React from "react"
import heroImage from "../assets/hero-image.png"

const Hero = () => {
    return(
    <section className="grid items-center px-5 py-3 gap-20 | sm:grid-rows-2 md:grid-rows-none md:grid-cols-2 md:relative md:px-20 md:my-5 md:gap-24 | xl:grid-cols-2">
      <div className="w-full grid gap-10 | md:my-24">
        <div className="w-full grid gap-4">
          <h1 className="inter font-bold text-[40px]">Menghemat waktu dan biaya dengan sistem <span className="text-gradient">Payroll dan HRIS terbaik.</span></h1>
          <p className="inter text-base text-secondary leading-7 font-normal">Dengan software payroll GajiHub, Anda bisa mengelola proses penggajian, HR dan Absensi dalam satu software terintegrasi. Solusi All-in-one untuk pengelolaan data karyawan menjadi lebih mudah, efisien dan praktis.</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="app.js" className="flex items-center inter bg-soft-pink text-white px-5 py-4 rounded-full | hover:bg-red-600 hover:transition-all">Daftar Gratis Sekarang <i className="fa fa-arrow-right bg-red-600 p-2 rounded-full ml-5"></i></a>
        </div>
      </div>
      <div className="xl:absolute md:w-[800px] xl:right-[-180px] xl:top-10">
        <img src={heroImage} alt="coding"/>
      </div>
    </section>
    )
}

export default Hero