import React from "react"
import { mediaNews } from "../constant"


const Media = () => {
  return (
    <section className="bg-light-grey py-10 px-0 | md:grid-cols-2 md:px-20 md:py-20">
      <div className="bg-gradient-to-r from-red-600 to-pink-700 md:rounded-3xl py-5 grid gap-5 justify-items-center | md:mb-28 md:py-10">
        <h1 className="inter text-[40px] text-white font-bold | md:leading-snug">Telah Diliput Oleh</h1>
        <div className="px-5 py-5 flex flex-wrap justify-center gap-10 | md:py-5 md:px-8">
        {
            mediaNews.map((media, index) => (
                  <img src={media.img} alt="media" className="hover:translate-y-[-5px] hover:shadow-md hover:transition-all"/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Media