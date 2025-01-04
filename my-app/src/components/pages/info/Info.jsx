import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from "../../../assets/images/lj (1).png"
import img2 from "../../../assets/images/lj (3).png"
import img3 from "../../../assets/images/lj (4).png"
import img4 from '../../../assets/images/lj (5).png'
import img5 from "../../../assets/images/lj (2).png"
import img6 from "../../../assets/images/Frame 922.png"
import img7 from "../../../assets/images/Colour Chnage.png"
import img8 from "../../../assets/images/lj (8).png"
import img9 from "../../../assets/images/lj (10).png"

const Info = () => {
   
    let { t } = useTranslation()

  return (
    <div className='dark:bg-slate-900 text-[white] pt-[50px] pb-[25px] '>
      <p className="mt-[40px] ml-[120px] sm:ml-[25px] sm:text-[13px] ">{t("Info.11")}</p>
      <div className="flex justify-center gap-[20px] mt-[50px] mb-[30px]">
        <div className="flex justify-center items-center gap-[20px]">
          <div className="flex flex-col gap-[17px]">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="">
          <p className="text-[35px] sm:text-[30px] sm:w-[90%] ">{t("Info.1")}</p>
          <img src={img6} alt="" />
          <p className="text-[30px] mt-[15px]">{t("Info.2")}</p>
          <p className="w-[400px] text-[gray] mt-[10px] ">{t("Info.3")}</p>
          <p className='w-[100%] h-[2px] bg-gray-500 '></p>
          <div className="flex items-center gap-[10px]">
            <p className="mb-[0px]">{t("Info.4")}</p>
            <img src={img7} className="mt-[25px]" alt="" />
          </div>
          <div className="">
            <p className=''>{t("Info.5")}</p>
            <img src={img8} alt="" />
          </div>
          <div className="flex items-center justify-center gap-[15px] mt-[15px] ">
            <input className='border border-solid border-gray-400 p-[5px_20px] rounded-[5px] ' placeholder='Number' type="number" />
            <button className='bg-[#DB4444] text-[white] p-[5px_15px] rounded-[5px] '>Buy Now</button>
            <img src={img9} alt="" />
          </div>
          <div className="w-[380px] h-[150px] border border-solid border-gray-300 p-[15px] mt-[15px] rounded-[5px] ">
             <div className="flex items-center w-[100%] h-[60px] gap-[10px] ">
                <img src="/src/assets/images/lj (12).png" alt="" />
                <div className="">
                    <p className='text-[16px] font-semibold relative top-[10px] '>{t("Home.6")}</p>
                    <p className='text-[12px] mt-0 '>{t("Home.7")}</p>
                </div>
             </div>
             <p className='bg-gray-400 w-[100%] h-[1px] '></p>
             <div className="flex items-center w-[100%] h-[60px] gap-[10px] ">
             <img src="/src/assets/images/lj (12).png" alt="" />
                <div className="">
                    <p className='text-[16px] font-semibold relative top-[10px] '>{t("Home.8")}</p>
                    <p className='text-[12px] mt-0 '>{t("Home.9")}</p>
                </div>
             </div>
          </div>
          </div>
    </div>
    <div className="w-[90%] sm:w-[80%] sm:flex-wrap sm:ml-[50px] mt-[50px] mb-[50px] m-auto flex justify-between">
        <div className="p-[20px] mt-[20px] w-[320px]">
          <img src="/src/assets/images/Frame 570 (1).png" alt="" />
          <p className='text-[20px] mt-[22px] font-semibold'>{t("Home.16")}</p>
          <div className="flex ">
            <p className=' text-[red]'>{t("Home.17")}</p>
          </div>
          <img src="/src/assets/images/Frame 566.png" alt="" />
        </div>

        <div className="p-[20px] mt-[20px] w-[320px]">
          <img src="/src/assets/images/Frame 570 (2).png" alt="" />
          <p className='text-[20px] mt-[20px] font-semibold'>{t("Home.18")}</p>
          <div className="flex ">
            <p className=' text-[red]'>{t("Home.19")}</p>
          </div>
          <img src="/src/assets/images/Frame 566.png" alt="" />
        </div>

        <div className="p-[20px] mt-[20px] w-[320px]">
          <img src="/src/assets/images/phu;n (3).png" alt="" />
          <p className='text-[20px] mt-[15px] font-semibold'>{t("Home.22")}</p>
          <div className="flex ">
            <p className=' text-[red]'>{t("Home.21")}</p>
          </div>
          <img src="/src/assets/images/Frame 566.png" alt="" />
        </div>

        <div className="p-[20px] mt-[20px] w-[320px]">
          <img src="/src/assets/images/phu;n (6).png" alt="" />
          <p className='text-[20px] mt-[15px] font-semibold'>{t("Home.22")}</p>
          <div className="flex ">
            <p className=' text-[red]'>{t("Home23")}</p>
          </div>
          <img src="/src/assets/images/Frame 566.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Info
