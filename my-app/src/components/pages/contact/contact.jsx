import React from 'react'
import { useTranslation } from 'react-i18next'
import call from "../../../assets/images/icons-phone.png"
import email from "../../../assets/images/icons-mail.png"

const Contact = () => {

    let { t } = useTranslation()

    return (
        <div className='dark:bg-slate-900 relative z-[-1] p-[80px] pb-[240px] dark:text-[white] '>
            <p className='text-gray-400 text-[14px] '>Home / <span className='text-gray-400 '>Contact</span></p>

            <div className="flex items-center gap-[30px] sm:flex-col ">
                <div className="w-[330px] h-[435px] p-[40px] shadow-[0px_0px_10px_gray] rounded-[10px] ">
                    <div className="flex items-center gap-[10px] ">
                        <img src={call} alt="" />
                        <h3 className='mt-[10px] text-[20px] font-semibold '>{t("Contact.1")}</h3>
                    </div>
                    <p className='mt-[20px] text-[14px] '>{t("Contact.2")}</p>
                    <p className='mt-[20px] '>{t("Contact.3")}</p>
                    <p className='w-[100%] m-[15px_auto] h-[2px] bg-gray-400 '></p>
                    <div className="flex items-center gap-[10px] ">
                        <img src={email} alt="" />
                        <h3 className='mt-[15px] text-[20px] font-semibold '>{t("Contact.4")}</h3>
                    </div>
                    <p className='mt-[20px] text-[14px] '>{t("Contact.5")}</p>
                    <p className='mt-[20px] '>{t("Contact.6")}</p>
                    <p className=''>{t("Contact.7")}</p>
                </div>
                <div className="w-[750px] sm:w-[380px] sm:mt-[20px] sm:ml-[25px] h-[380px] sm:h-[470px] p-[50px_40px] sm:p-[10px_5px] shadow-[0px_0px_15px_gainsboro] rounded-[10px]">
                    <div className="flex items-center gap-[10px] sm:flex-col ">
                        <input className='w-[220px] sm:w-[90%] h-[45px] border border-solid border-gray-400 p-[5px_15px] rounded-[5px] ' placeholder='Name' type="text" />
                        <input className='w-[220px] sm:w-[90%] h-[45px] border border-solid border-gray-400 p-[5px_15px] rounded-[5px] ' placeholder='Email' type="text" />
                        <input className='w-[220px] sm:w-[90%] h-[45px] border border-solid border-gray-400 p-[5px_15px] rounded-[5px] ' placeholder='Phone' type="text" />
                    </div>
                    <textarea className='w-[680px] h-[200px] sm:mt-[30px] sm:w-[90%] sm:ml-[5px] border border-solid border-gray-400 p-[15px_15px] rounded-[5px] mt-[10px] ' placeholder='Your Massage' name="" id=""></textarea>
                    <button className='text-[white] bg-[#DB4444] w-[200px] h-[45px] p-[5px_10px] rounded-[5px] ml-[70%] sm:ml-[40%] mt-[10px] '>Send Massage</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
