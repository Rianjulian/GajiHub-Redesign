import React from "react"
import { Feature } from "../constant/index"

const Features = () => {
    return (
        <section className="bg-light-grey grid py-10 mt-10 | md:px-0 md:py-10 md:mt-20">
            <div className="grid py-10 px-6 mt-10 gap-10 | md:gap-16 md:px-20 md:py-10 md:mt-20">
                <h1 className="inter font-bold text-2xl leading-normal | md:text-[40px] md:w-4/5">Fitur unggulan dari <span className="text-gradient">Payroll dan HRIS GajiHub</span> yang akan membantu anda</h1>
                <div className="grid gap-8 | md:grid-cols-2 | xl:grid-cols-3">
                    {
                        Feature.map((features, index) => (
                            <div className="bg-white grid content-start gap-4 px-10 py-10 rounded-md">
                                <img src={features.img} alt="icons" />
                                <h1 className="inter font-medium text-lg text-soft-purple">{features.title}</h1>
                                <p className="inter text-xs text-secondary leading-6 font-normal">{features.describe}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features