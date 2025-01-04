import { React, useState} from 'react'
import logo from "../../../assets/images/Group 1116606595.png"
import { Link } from 'react-router-dom'
import LanguegeSelector from "../i18N/LanguegeSelector"
import heart from "../../../assets/images/Wishlist.png"
import shop from "../../../assets/images/Cart1 with buy.png"
import user from "../../../assets/images/user (1).png"
import Switcher from "../useDarkSide/Switcher"
import { useTranslation } from 'react-i18next'
import menu from "../../../assets/images/material-symbols-light_menu.png"
import { Button, Drawer } from 'antd';

const Header = () => {

  let { t } = useTranslation()

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-[10px_30px] sm:p-[5px_10px] bg-[white] dark:bg-slate-900 shadow-[10px_0px_10px_gray] ">
        <img onClick={showLoading} className='hidden sm:block w-[45px] h-[35px] text-whi ' src={menu} alt="" />
        <Drawer
          closable
          destroyOnClose
          title={<p>Loading Drawer</p>}
          placement="right"
          open={open}
          loading={loading}
          onClose={() => setOpen(false)}
        >
          <Link to={"/home"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.1")}</p>
          </Link>
          <Link to={"/contact"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.2")}</p>
          </Link>
          <Link to={"/about"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.3")}</p>
          </Link>
          <Link to={"/register"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.4")}</p>
          </Link>
          <Link to={'/category'}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.5")}</p>
          </Link>
          <Link to={"/info"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.6")}</p>
          </Link>
          <Link>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.7")}</p>
          </Link>
          <Link>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.8")}</p>
          </Link>
        </Drawer>
        <img className='sm:hidden ' src={logo} alt="" />
        <div className="flex items-center gap-[25px] dark:text-white mt-[20px] sm:hidden ">
          <Link to={"/home"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.1")}</p>
          </Link>
          <Link to={"/contact"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.2")}</p>
          </Link>
          <Link to={"/about"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.3")}</p>
          </Link>
          <Link to={"/register"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.4")}</p>
          </Link>
          <Link to={'/category'}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.5")}</p>
          </Link>
          <Link to={"/info"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.6")}</p>
          </Link>
          <Link to={"/checkOut"}>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.7")}</p>
          </Link>
          <Link>
            <p className='hover:scale-110 hover:text-orange-600 '>{t("Login.8")}</p>
          </Link>
        </div>
        <div className="flex items-center ">
          <LanguegeSelector />
          <img className='dark:text-[white] sm:hidden ' src={heart} alt="" />
          <img className='dark:text-[white] sm:hidden ' src={shop} alt="" />
          <Link to={"/log"}>
          <img className='dark:text-[white] sm:hidden ' src={user} alt="" />
          </Link>
          <Switcher />  
        </div>
      </div>
    </div>
  )
}

export default Header
