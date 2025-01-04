import React from 'react'
import { useTranslation } from 'react-i18next'
import 'animate.css';
import img1 from "../../../assets/images/;ub (3).png"
import img2 from "../../../assets/images/;ub (1).png"
import img3 from "../../../assets/images/;ub (2).png"
import img4 from "../../../assets/images/Services (1).png"
import image1 from "../../../assets/images/Frame 874.png"
import image2 from "../../../assets/images/Frame 876.png"
import image3 from "../../../assets/images/Frame 874.png"
import div from "../../../assets/images/Frame 883.png"
import one from '../../../assets/images/Services.png'
import two from "../../../assets/images/Services (3).png"
import three from "../../../assets/images/Services (2).png"

const About = () => {

    let { t } = useTranslation()

    return (
        <div className='p-[35px_100px] dark:bg-slate-900 dark:text-white '>
            <h3 className='text-gray-500  '>Home / <span className='text-black '>About</span></h3>
            <div className="">
                <h1 className='text-[55px] font-bold '>{t("About.1")}</h1>
                <p className='mt-[30px] w-[500px] sm:w-[100%] '>{t("About.2")}</p>
                <p className='mt-[20px] w-[480px] sm:w-[100%] '>{t("About.3")}</p>
            </div>
            <div className="flex items-center justify-between w-[95%] m-[50px_auto] sm:flex-col ">
                <div className="p-[10px_20px] animate__animated animate__zoomInDown ">
                    <img className='w-[80px] h-[80px] m-auto ' src={img1} alt="" />
                    <h2 className='text-center mt-[10px] font-black text-[25px] '>{t("About.4")}</h2>
                    <p>{t("About.5")}</p>
                </div><div className="p-[10px_20px] bg-[#DB4444] text-white animate__animated animate__zoomInDown ">
                    <img className='w-[80px] h-[80px] m-auto ' src={img2} alt="" />
                    <h2 className='text-center mt-[10px] font-black text-[25px] '>{t("About.6")}</h2>
                    <p>{t("About.7")}</p>
                </div><div className="p-[10px_20px] animate__animated animate__zoomInDown ">
                    <img className='w-[80px] h-[80px] m-auto ' src={img3} alt="" />
                    <h2 className='text-center mt-[10px] font-black text-[25px] '>{t("About.8")}</h2>
                    <p>{t("About.9")}</p>
                </div><div className="p-[10px_20px] animate__animated animate__zoomInDown ">
                    <img className='w-[80px] h-[80px] m-auto ' src={img4} alt="" />
                    <h2 className='text-center mt-[10px] font-black text-[25px] '>{t("About.10")}</h2>
                    <p>{t("About.11")}</p>
                </div>
            </div>
            <div className="flex items-center justify-between w-[95%] m-[50px_auto] gap-[20px] sm:flex-col ">
                <div className="">
                    <img src={image1} alt="" />
                    <div className="p-[0px_8px] mt-[20px] ">
                    <h2 className='text-[25px] font-semibold '>{t("About.12")}</h2>
                    <p>{t("About.13")}</p>
                    </div>
                </div>
                <div className="">
                    <img src={image2} alt="" />
                    <div className="p-[0px_8px] mt-[20px] ">
                    <h2 className='text-[25px] font-semibold '>{t("About.14")}</h2>
                    <p>{t("About.15")}</p>
                    </div>
                </div>
                <div className="">
                    <img src={image3} alt="" />
                    <div className="p-[0px_8px] mt-[20px] ">
                    <h2 className='text-[25px] font-semibold '>{t("About.16")}</h2>
                    <p>{t("About.17")}</p>
                    </div>
                </div>
            </div>
            <img className='w-[160px] h-[22px] mt-[10px_auto] ml-[500px] sm:ml-[15px] animate-animated animate__flipInY ' src={div} alt="" />
            <div className="flex items-center justify-between w-[95%] m-[50px_auto] sm:flex-col  ">
                <div className="">
                    <img className='m-auto ' src={one} alt="" />
                    <h3 className='text-[20px] font-semibold mt-[20px] text-center '>{t("About.18")}</h3>
                    <p className='text-center '>{t("About.19")}</p>
                </div>
                <div className="">
                    <img className='m-auto ' src={two} alt="" />
                    <h3 className='text-[20px] font-semibold mt-[20px] text-center '>{t("About.20")}</h3>
                    <p className='text-center '>{t("About.21")}</p>
                </div>
                <div className="">
                    <img className='m-auto ' src={three} alt="" />
                    <h3 className='text-[20px] font-semibold mt-[20px] text-center '>{t("About.22")}</h3>
                    <p className='text-center '>{t("About.23")}</p>
                </div>
            </div>
        </div>
    )
}

export default About
