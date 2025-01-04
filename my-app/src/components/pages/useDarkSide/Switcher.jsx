import useDarkSide from '../../../components/pages/useDarkSide/UseDarkSide'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const Switcher = () => {

    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide, setDarkSide] = useState(
        colorTheme === 'light' ? true : false
    )

    const toggleDarkMode = checked => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <div>
            <DarkModeSwitch
                size={50}
                checked={darkSide}
                onChange={toggleDarkMode}
            />
        </div>
    )
}

export default Switcher
