import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ScrollToTop() {
    const { pathname} = useLocation();
    console.log([pathname])

    useEffect(() => {
        window.scroll(0,-10)
        console.log(pathname)
    }, [pathname]);
    return null;
}