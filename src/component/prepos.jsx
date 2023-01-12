import React from "react"
import dashborad from "../assets/hr-dashboard.png"

const Prepos = () => {
  return (
    <>
      <section className="py-3 my-20 | md:px-20 md:my-48 ">
        <div className="bg-soft-pink grid gap-10 px-10 pt-20 md:rounded-3xl">
          <div className="grid justify-items-center gap-5">
            <h1 className="inter text-xl font-bold md:text-[40px] text-white md:w-5/6">Proses Manajemen HR dalam satu sistem</h1>
            <p className="inter text-sm md:text-base text-white leading-7 font-normal md:w-5/6">Dengan satu platform untuk data karyawan, HR, dan operasional, semua orang dapat mengakses data secara real time untuk membuat keputusan yang tepat. Anda dapat mengandalkan software payroll dan HR GajiHub untuk menghadirkan teknologi yang mendorong pertumbuhan bisnis dan menjaga keamanan data Anda.</p>
          </div>
          <div className="relative">
            <img src={dashborad} alt="dashboard" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Prepos