import React from "react"
import Logo from '../assets/logo.svg'
import Playstore from "../assets/play-store.svg"
import Appstore from "../assets/app-store.svg"

const Footer = () => {
    return (
        <footer className="py-12 px-10 grid justify-start gap-10 | grid-template md:px-20 md:py-32 md:justify-between md:items-start">
            <div className="grid gap-5 w-3/4">
                <img src={Logo} alt="logo" />
                <a href="app.js" className="inter no-underline font-normal text-base">+62 81 222 8000 70</a>
                <a href="app.js" className="inter no-underline font-normal text-base">hello@gajihub.com</a>
                <a href="app.js" className="inter no-underline font-normal text-base">PT Kledo Berhati Nyaman
                    Jl. Kledokan No B10, Catur Tunggal, Depok, DIY, 55281</a>
                <div className="flex gap-5">
                    <a href="app.js"><img src={Playstore} alt="play-store" /></a>
                    <a href="app.js"><img src={Appstore} alt="app-store" /></a>
                </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
                <div className="grid content-start gap-5">
                    <h1 className="inter font-medium text-xl">TENTANG KAMI</h1>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Tentang</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Tutorials</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Blog</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Karir</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Keamanan</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Jadwalkan Demo</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Login</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Download Proposal</a>
                </div>
                <div className="grid content-start gap-5">
                    <h1 className="inter font-medium text-xl">LAYANAN</h1>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Penggajian & THR</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Kelola PPh 21</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Kelola BPJS</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Akuntansi</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Analisa Data</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Kelola Cuti & Izin</a>
                </div>
                <div className="grid content-start gap-5">
                    <h1 className="inter font-medium text-xl">TOOL BISNIS</h1>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Kalkulator PPH 21</a>
                    <a href="app.js" className="inter no-underline font-normal text-sm">Template Slip Gaji</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer