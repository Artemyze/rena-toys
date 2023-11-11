import {motion} from "framer-motion";
import log from "../img/projects/01.jpg"

export const Motion = () => {
    return (
        <>
        <motion.img
            src={log}
            animate={{rotate: 360}}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeOut",
            }}
        />
        </>
    )
}