import React from 'react'
import { useTranslation } from 'react-i18next'

const CheckOut = () => {

    let { t } = useTranslation()

    return (
        <div className='p-[50px_20px] '>
            <p>{t("CheckOut.2")}</p>
            <h1 className='text-gray-400 font-semibold text-[40px] '>{t("CheckOut.1")}</h1>
            <div className="w-[490px] h-[550px] rounded-[5px] shadow-[0px_0px_10px_gray] p-[15px_20px] ">
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='First Name' type="text" />
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='Last Name ' type="text" />
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='Street Adress' type="text" />
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='Apartment, floor, etc, (option)' type="text" />
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='Town/City' type="text" />
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='Phone Number' type="text" />
               <input className='w-[450px] h-[40px] border border-solid border-gray-400  p-[5px_10px] rounded-[5px] outline-none mt-[30px] ' placeholder='Email Adress' type="text" />
               <div className="flex items-center gap-[10px] mt-[10px] ">
               <input className='w-[18px] h-[18px] bg-[#DB4444] text-[white] ' type="checkbox" />
               <p className='relative top-[8px]  '>{t("CheckOut.10")}</p>
               </div>
               <div className="w-[440px] h-[600px] shadow-[0px_0px_10px_gray] ">
                   <div className="">
                    <div className="">
                        <img src="/my-app/src/assets/images/" alt="" />
                    </div>
                    <p>$650</p>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default CheckOut
