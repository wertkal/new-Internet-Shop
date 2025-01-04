import React from 'react'
import { useTranslation } from 'react-i18next';

const LanguegeSelector = () => {

    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage); // Изменяем язык
    }
        return (
            <div>
                <select className="border-[2px] border-solid border-gray-500 p-[5px_18px] rounded-[5px] bg-gray-500 text-white outline-none " onChange={handleLanguageChange} value={i18n.language}>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="tj">Таджикский</option>
                </select>
            </div>
        )
    }

    export default LanguegeSelector
