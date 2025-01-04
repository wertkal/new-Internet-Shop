import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Reagister = () => {

 let { t } = useTranslation()

  return (
    <div className='dark:bg-slate-900 pt-[70px] relative z-[-1] pb-[50px] '>
       <div className="w-[400px] pt-[25px] m-[0px_auto] border-[2px] border-solid border-gray-400 rounded-[5px] h-[350px] p-[0px_10px] dark:bg-slate-900 dark:text-[white] ">
               <h1 className='text-[36px] font-semibold '>{t("Register.1")}</h1>
               <p>{t("Login.10")}</p>
               <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] ' placeholder='Name' type="text" />
               <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] ' placeholder='Password' type="text" />
               <p className='text-[#db4444] w-[170px] m-[0px_auto] text-center '>{t("Register.2")}</p>
               <Link to={"/errorFile"}>
               <button className='bg-[#DB4444] text-[white] w-[380px] h-[45px] mt-[30px] m-[5px_auto] '>Create Account</button>
               </Link>
            </div>
    </div>
  )
}

export default Reagister
