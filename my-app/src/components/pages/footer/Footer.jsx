import React from 'react'
import { useTranslation } from 'react-i18next'
import social from "../../../assets/images/Frame 741.png"

const Footer = () => {

  let { t } = useTranslation()

  return (
    <div>
       <div className="bg-black text-white dark:bg-slate-900 flex justify-between p-[20px_35px] sm:flex-wrap shadow-[-10px_0px_10px_gray] ">
        <div className="sm:mt-[10px] ">
          <h2 className='text-[25px] font-semibold '>{t("Login.12")}</h2>
          <h3 className='text-[20px] font-semibold mt-[20px] '>{t("Login.13")}</h3>
          <h4>{t("Login.14")}</h4>
          <input className='bg-transparent border-[2px] border-solid border-[white] p-[10px_20px] rounded-[5px] mt-[10px] ' placeholder='Enter Your email' type="email" />
        </div>
        <div className="sm:mt-[20px]">
          <h2 className='text-[25px] font-semibold '>{t("Login15")}</h2>
          <h4 className='w-[175px] mt-[18px] '>{t("Login.16")}</h4>
          <h4 className='mt-[18px] '>{t("Login.17")}</h4>
          <h4 className='mt-[18px] '>{t("Login.18")}</h4>
        </div>
        <div className="sm:mt-[20px]">
          <h2 className='text-[25px] font-semibold '>{t("Login.19")}</h2>
          <h4 className='mt-[15px] '>{t("Login.20")}</h4>
          <h4 className='mt-[15px] '>{t("Login.21")}</h4>
          <h4 className='mt-[15px] '>{t("Login.22")}</h4>
          <h4 className='mt-[15px] '>{t("Login.23")}</h4>
        </div>
        <div className="sm:mt-[20px]">
          <h2 className='text-[25px] font-semibold '>{t("Login.24")}</h2>
          <h4 className='mt-[15px] '>{t("Login.25")}</h4>
          <h4 className='mt-[15px] '>{t("Login.26")}</h4>
          <h4 className='mt-[15px] '>{t("Login.27")}</h4>
          <h4 className='mt-[15px] '>{t("Login.28")}</h4>          
        </div>
        <div className="sm:mt-[20px]">
        <h2 className='text-[25px] font-semibold '>{t("Login.29")}</h2>
        <img src={social} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Footer
