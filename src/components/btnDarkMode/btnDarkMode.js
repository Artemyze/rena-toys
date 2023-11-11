import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import './btnDarkMode.css'
import {useEffect, useRef} from "react";
import {useLocalStorage} from '../utils/useLocalStorage'
import detectDarkMode from "../utils/detectDarkMode";

export const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())
    const btnRef = useRef(null)
    useEffect(() => {
        if (darkMode === 'light') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            btnRef.current.classList.remove('dark-mode-btn--active')
            document.body.classList.remove('dark')
        }
    }, [darkMode])
    const toogleDarkMode = () => {
        setDarkMode((val) => val==='light' ? 'dark': 'light')
    }
    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toogleDarkMode}>

            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    )
}
