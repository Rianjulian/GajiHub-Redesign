import React from "react"
import { Link } from "react-router-dom"
import { Testimonials } from "../constant/index"
import "../icon/all.css"

const Testimonial = () => {
  return (
    <section className="bg-light-grey grid py-10 mt-10 | md:px-0 md:py-10 md:mt-0">
      <div className="grid py-10 px-6 mt-10 gap-5 | md:gap-16 md:px-20 md:py-10 md:mt-20">
        <h1 className="inter font-bold text-[40px] | md:w-4/5">Mereka Yang Sudah Menggunakan Software <span className="text-gradient">Payroll dan HRIS GajiHub</span></h1>
        <div className="grid gap-8 | md:grid-cols-2 | xl:grid-cols-3">
          {
            Testimonials.map((testimonials, index) => (
              <div className="bg-white grid content-start rounded-lg">
                <Link to="/" className="relative w-full h-full grid place-items-center hover:rounded-t-lg hover:bg-white hover:opacity-95">
                  <i className="fa fa-play text-white absolute"></i>
                  <img src={testimonials.img} alt="icons" className="rounded-t-lg" />
                </Link>
                <div className="grid gap-5 p-5">
                  <p className="inter text-md text-slate-700 leading-7 font-normal">{testimonials.describe}</p>
                  <h1 className="inter font-medium text-md text-pink-600">- {testimonials.title}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Testimonial