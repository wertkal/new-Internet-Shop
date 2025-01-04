import React from 'react'
import { useTranslation } from 'react-i18next'

const Category = () => {

    let { t } = useTranslation()

    return (
        <div className='p-[50px_0px] '>
            <p className='text-[30px] font-semibold text-center'>Whilist</p>

            <div className="w-[90%] m-auto mt-[50px]">
                <div className="flex justify-between flex-wrap">

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/Frame 570.png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/Frame 570 (1).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/phu;n (2).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/phu;n (3).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/phu;n (6).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/phu;n (3).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/phu;n (4).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/images/phu;n (2).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/images/Frame 566.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category
