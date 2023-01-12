import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import absensi from "../assets/absensi.png"
import izin from "../assets/izin.png"
import jadwal from "../assets/jadwal.png"
import media from "../assets/media.png"
import tracking from "../assets/tracking.png"
import Playstore from "../assets/play-store.svg"
import Appstore from "../assets/app-store.svg"

const Promotion = () => {
  return (
    <section className="bg-light-grey py-10 px-6 | md:grid-cols-2 md:px-20 md:py-20">
      <div className="bg-promotion rounded-3xl grid mx-[-40px] | md:grid-cols-2 md:mb-28">
        <div className="px-10 py-20 grid content-center gap-10 | md:py-5 md:px-8">
          <h1 className="inter text-2xl text-white font-bold | md:text-[40px] md:leading-snug">Bagaimana Mobile Apps GajiHub Mentransformasi Perusahaan Anda?</h1>
          <div className="flex gap-5">
            <a href="app.js"><img src={Playstore} alt="play-store" /></a>
            <a href="app.js"><img src={Appstore} alt="app-store" /></a>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
        spaceBetween={30}
        loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide><img src={absensi} alt="absensi" className="w-3/5 pt-10" /></SwiperSlide>
            <SwiperSlide><img src={izin} alt="absensi" className="w-3/5 pt-10" /></SwiperSlide>
            <SwiperSlide><img src={jadwal} alt="absensi" className="w-3/5 pt-10" /></SwiperSlide>
            <SwiperSlide><img src={tracking} alt="absensi" className="w-3/5 pt-10" /></SwiperSlide>
            <SwiperSlide><img src={media} alt="absensi" className="w-3/5 pt-10" /></SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Promotion