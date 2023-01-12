import React, { useState } from "react"
import { Link } from "react-router-dom";
import "../icon/all.css"

const Price = () => {
    const [closed, setOpen] = useState(true)
    const OpenAccordion = () => {
        setOpen(false)
    }
    return (
        <section className="grid gap-5 bg-black py-10 px-6 | md:px-20 md:py-24">
            <h1 className="inter font-bold text-white text-[40px] | md:w-1/2">Berkembang dengan sistem <span className="text-gradient">Payroll dan HRIS GajiHub</span></h1>
            <div className="grid gap-5 | md:grid-cols-2 md:mt-10 | xl:grid-cols-3">
                <div className="bg-white px-10 py-12 rounded-sm">
                <h2 className="inter bg-orange-500 px-3 w-fit text-white mb-5 text-lg font-bold">GRATIS</h2>
                    <h1 className="inter text-4xl text-black font-semibold">Rp 0</h1>
                    <span className="inter text-sm font-normal">Unlimited Karyawan</span>
                    <div className="mt-8 grid justify-items-start gap-y-5">
                        <div className="w-full grid grid-flow-col gap-x-4">
                            <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" open>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>Payroll</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-orange-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Hitung Payroll Otomatis</li>
                                    <li>Slip Gaji Realtime via Mobile Apps</li>
                                    <li>Integrasi Payroll Bank</li>
                                    <li>Integrasi dengan Absensi & HRIS</li>
                                    <li>Dan Lainnya</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>Absensi</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-orange-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Validasi Presensi via GPS</li>
                                    <li>Realtime Approval Presensi</li>
                                    <li>Swafoto Presensi</li>
                                    <li>Perhitungan Keterlambatan</li>
                                    <li>Dan Lainnya</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>HRIS</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-orange-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Sosial Media Internal</li>
                                    <li>Employee Self Service Mobile Apps</li>
                                    <li>Kalender Libur Perusahaan</li>
                                    <li>Realtime Approval Cuti & Izin</li>
                                    <li>Dan Lainnya</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>Ekstra</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-orange-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Basic Support - via Email</li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className="cta mt-20 grid grid-flow-row gap-y-4">
                        <button className="py-3 px-3 bg-soft-pink hover:bg-pink-800 text-white rounded-sm"><Link to="#">Daftar</Link></button>
                        <button className="py-3 px-3 text-pink-600 hover:bg-neutral-100"><Link to="#">Rincian Paket</Link></button>
                    </div>
                </div>
                <div className="bg-white px-10 py-12 rounded-sm">
                <h2 className="inter bg-soft-pink px-3 w-fit text-white mb-5 text-lg font-bold">PRO</h2>
                    <h1 className="inter text-4xl text-black font-semibold">Rp 4.900</h1>
                    <span className="inter text-sm font-normal">/Bulan/Karyawan</span>
                    <div className="mt-8 grid justify-items-start gap-y-5">
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg">
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    Semua Fitur Paket Free
                                </summary>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" open>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                <span>Absensi</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-pink-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Manajemen Shift Kerja</li>
                                    <li>Validasi Presensi via IP Address</li>
                                    <li>Multi Lokasi Presensi</li>
                                    <li>Kunjungan Klien</li>
                                    <li>Dan Lainnya</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                <span>HRIS</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-pink-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Cloud Storage Penyimpanan Data Karyawan</li>
                                    <li>Pengaturan Cuti Khusus</li>
                                    <li>Statistik Karyawan</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                <span>Ekstra</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-pink-600 list-disc pl-5 py-3 space-y-3 text-slate-600">
                                    <li>Monthly Auto Backup</li>
                                    <li>Prioritas support</li>
                                    <li>Free Import Data Karyawan</li>
                                    <li>Free Training Admin</li>
                                    <li>Free Konsultasi Implementasi</li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className="cta mt-20 grid grid-flow-row gap-y-4">
                        <button className="py-3 px-3 bg-soft-pink hover:bg-pink-800 text-white rounded-sm"><Link to="#">Daftar</Link></button>
                        <button className="py-3 px-3 text-pink-600 hover:bg-neutral-100"><Link to="#">Rincian Paket</Link></button>
                    </div>
                </div>
                <div className="bg-white px-10 py-12 rounded-sm">
                    <h2 className="inter bg-pink-700 px-3 w-fit text-white mb-5 text-lg font-bold">ELITE</h2>
                    <h1 className="inter text-4xl text-black font-semibold">Rp 11.900</h1>
                    <span className="inter text-sm font-normal">/Bulan/Karyawan</span>
                    <div className="mt-8 grid justify-items-start gap-y-5">
                        <div className="w-full grid grid-flow-col gap-x-4">
                            <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    Semua Fitur Paket Pro
                                </summary>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" open>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>Payroll</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-pink-700 list-disc pl-5 py-3 space-y-3 text-slate-700">
                                    <li>Multi Rekening Bank Pembayaran</li>
                                    <li>BPJS Kesehatan & Ketenagakerjaan</li>
                                    <li>Hitung Prorata Gaji Otomatis</li>
                                    <li>Statistik Penggajian</li>
                                    <li>Dan Lainnya</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>Absensi</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-pink-700 list-disc pl-5 py-3 space-y-3 text-slate-700">
                                    <li>Simpan Foto Presensi 2 tahun</li>
                                </ul>
                            </details>
                        </div>
                        <div className="w-full grid grid-flow-col gap-x-4">
                        <details className="open:bg-white open:max-w-lg open:ring-0 open:ring-white dark:open:ring-white/10 rounded-lg" onClick={OpenAccordion}>
                                <summary className="inter w-full text-md font-bold flex flex-row gap-x-5 xl:gap-x-40 justify-between items-center list-none marker:text-transparent xl:text-base hover:text-red-600">
                                    <span>Ekstra</span> <i className="fa fa-chevron-down ml-2 text-gray-400"></i>
                                </summary>
                                <ul className="marker:text-pink-700 list-disc pl-5 py-3 space-y-3 text-slate-700">
                                    <li>Free Training Admin & Karyawan</li>
                                    <li>Prioritas Utama Support</li>
                                    <li>Daily Auto Backup</li>
                                    <li>Free Dedicated Implementation Specialist</li>
                                    <li>Free Import Data Karyawan & Setting Pajak</li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className="cta mt-20 grid grid-flow-row gap-y-4">
                        <button className="py-3 px-3 bg-soft-pink hover:bg-pink-800 text-white rounded-sm"><Link to="#">Daftar</Link></button>
                        <button className="py-3 px-3 text-pink-600 hover:bg-neutral-100"><Link to="#">Rincian Paket</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Price