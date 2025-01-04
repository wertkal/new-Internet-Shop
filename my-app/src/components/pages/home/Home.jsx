import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home = () => {

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className='w-[100%] dark:bg-slate-900 dark:text-white pt-[50px] relative z-[-1] pb-[40px] '>
      <div className="w-[90%] sm:flex-wrap justify-between items-center m-auto flex mt-[50px]">
        <div className="xs:flex xs:flex-wrap xs:justify-evenly text-[20px]">
          <p>{t('Home.1')}</p>
          <p className='mt-[20px]'>{t('Home.2')}</p>
          <p className='mt-[20px]'>{t('Home.3')}</p>
          <p className='mt-[20px]'>{t('Home.4')}</p>
          <p className='mt-[20px]'>{t('Home.5')}</p>
          <p className='mt-[20px]'>{t('Home.6')}</p>
          <p className='mt-[20px]'>{t('Home.7')}</p>
          <p className='mt-[20px]'>{t('Home.8')}</p>
          <p className='mt-[20px]'>{t('Home.9')}</p>
        </div>

        <div className="w-[900px] sm:w-[100%] border-2 h-[500px] text-center">
          <Swiper navigation={false} loop={true} modules={[Navigation, Autoplay]} className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}>
            <SwiperSlide><img className='w-[900px] h-[490px]' src="/src/assets/images/Frame 685.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[900px] h-[490px]' src="/src/assets/images/Frame 600.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[900px] h-[490px]' src="/src/assets/images/Frame 560.png" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <img className='ml-[50px] mt-[100px]' src="/src/assets/Frame 626.png" alt="" />
      <div className="w-[500px] sm:w-[100%]  justify-evenly ml-[400px] sm:ml-[0px] sm:mt-[50px] flex items-end m-auto xs:flex-wrap">
        <div>
          <p className='text-[20px] font-semibold'>{t('Home.10')}</p>
          <span className='text-[45px] font-bold'>03</span>
          <span className='text-[red] text-[30px] font-semibold'>:</span>
        </div>
        <div>
          <p className='text-[20px] font-semibold'>{t('Home.11')}</p>
          <span className='text-[45px] font-bold'>23</span>
          <span className='text-[red] text-[30px] font-semibold'>:</span>
        </div>

        <div>
          <p className='text-[20px] font-semibold'>{t('Home.12')}</p>
          <span className='text-[45px] font-bold'>19</span>
          <span className='text-[red] text-[30px] font-semibold'>:</span>
        </div>

        <div>
          <p className='text-[20px] font-semibold'>{t('Home.13')}</p>
          <span className='text-[45px] font-bold'>19</span>
        </div>
      </div>
      <div className="w-[90%] sm:w-[80%] sm:flex-wrap sm:ml-[50px] mt-[50px] m-auto flex justify-between">
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
      <div className="text-center mt-[50px]">
        <Link to={"/sign"}>
          <button></button>
        </Link>
      </div>

      <div className="w-[90%] sm:mt-[70px] m-auto">
        <img src="/src/assets/Frame 623.png" alt="" />
        <p className='text-[40px] font-semibold'>{t('Home.24')}</p>

        <div className="flex mt-[50px] sm:items-center flex-wrap justify-between items-center">
          <img src="/src/assets/images/libj , (1).png" alt="" />
          <img src="/src/assets/images/libj , (2).png" alt="" />
          <img src="/src/assets/images/libj , (3).png" alt="" />
          <img src="/src/assets/images/libj , (4).png" alt="" />
          <img src="/src/assets/images/libj , (5).png" alt="" />
          <img src="/src/assets/images/libj , (6).png" alt="" />
        </div>
      </div>
<div className="ml-[60px] ">
      <div className="flex items-center gap-[10px] font-black ">
          <button className='w-[20px] h-[40px] bg-[#db4444] rounded-[5px] '></button>
          <p className='text-[#db4444] mt-[20px] '>{t("Home.10")}</p>
      </div>
      <h1 className='text-[30px] font-bold '>{t("Home.25")}</h1>
</div>

      <div className="w-[90%] sm:w-[80%] sm:flex-wrap sm:ml-[50px] mt-[50px] m-auto flex justify-between">
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
      {/* <div className="w-[90%] m-auto mt-[50px]">
        <img src="/src/assets/images/Frame 570.png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
          <img src="/src/assets/images/Frame 570.png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>

          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.20')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.21")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          <div className="">

          <img src="/src/assets/images/Frame 570 (1).png" alt="" />
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.22')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.23")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
        </div>
          </div>
      </div>

      <div className="rounded-md mt-[50px] flex-wrap bg-black dark:bg-slate-900 dark:border-[2px] dark:border-solid dark:border-[white] w-[90%] flex items-center justify-evenly m-auto p-[20px]">
        <div className="">
          <p className='text-[20px] text-green-600'>{t('home.17')}</p>
          <p className='mt-[30px] text-[40px] font-semibold text-white'>{t('home.18')}</p>
          <img className='mt-[50px]' src="/src/assets/Frame 601.png" alt="" />
          <button className='mt-[30px] p-[10px] text-[20px] rounded-md bg-green-600 text-white'></button>
        </div>
        <img src="/src/assets/Frame 694.png" alt="" />
      </div> */}
     




      <img className='w-[90%] m-auto  ' src="/src/assets/images/Frame 600.png" alt="" />



      <div className="w-[95%] sm:w-[80%] m-auto mt-[400px] flex flex-wrap sm:flex-col sm:m-[50px_auto] sm:ml-[70px] ">
         <div className="">
         <img src="/src/assets/images/Frame 570.png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/Frame 570 (1).png" alt="" />
        <div className="flex sm:w-[75%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/Frame 570 (2).png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/phu;n (4).png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/phu;n (4).png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/phu;n (4).png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/phu;n (4).png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
         <div className="">
         <img src="/src/assets/images/phu;n (4).png" alt="" />
        <div className="flex sm:w-[80%] sm:flex-wrap sm:ml-[30px] justify-between">
          <div className="p-[20px] mt-[20px] w-[320px]">
            <p className='text-[25px] font-semibold'>{t('Home.16')}</p>
            <div className="flex ">
              <p className=' text-[red]'>{t("Home.17")}</p>
            </div>
            <img src="/src/assets/images/Frame 566.png" alt="" />
          </div>
          </div>
         </div>
      </div>
      <button className='bg-[#DB4444] text-[white] font-black text-[22px] p-[10px_30px] ml-[500px] sm:ml-[70px] mt-[20px] '>View All Products</button>
      <div className=" ml-[50px] sm:ml-[60px] sm:mt-[30px] ">
        <div className="flex items-center gap-[5px] ">
          <button className='bg-[#db4444] w-[20px] h-[40px] rounded-[5px] '></button>
          <p className='text-[#db4444] mt-[15px] font-black '>{t("Home.36")}</p>
        </div>
        <h1 className='text-[40px] font-semibold  '>{t("Home.37")}</h1>
      </div>

      <div className="w-[90%] m-auto sm:ml-[40px] ">
        <img src="" alt="" />
        <p className='text-[40px] font-semibold'>{t('')}</p>
        <img src="/src/assets/Frame 739.png" className='w-[100%] mt-[30px]' alt="" />
      </div>

      <div className="w-[90%] sm:flex-wrap m-auto flex justify-evenly mt-[70px] mb-[150px] ">
        <div className="text-center mt-[30px] w-[350px]">
          <img className='ml-[130px]' src="/src/assets/images/Services.png" alt="" />
          <p className='text-[25px] mt-[20px] font-semibold'>FREE AND FAST DELIVERY</p>
          <p className='text-[20px]'>Free delivery for all orders over $140</p>
        </div>

        <div className="text-center mt-[30px] w-[350px]">
          <img className='ml-[130px]' src="/src/assets/images/Services (3).png" alt="" />
          <p className='text-[25px] mt-[20px] font-semibold'>FREE AND FAST DELIVERY</p>
          <p className='text-[20px]'>Free delivery for all orders over $140</p>
        </div>

        <div className="text-center mt-[30px] w-[350px]">
          <img className='ml-[130px]' src="/src/assets/images/Services (2).png" alt="" />
          <p className='text-[25px] mt-[20px] font-semibold'>FREE AND FAST DELIVERY</p>
          <p className='text-[20px]'>Free delivery for all orders over $140</p>
        </div>
      </div>

      
    </div>
  )
}

export default Home