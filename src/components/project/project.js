import "./project.css"
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

export function Project(props) {
    return (
        <NavLink to={`/project/${props.index}`}>
            <motion.li
                className="project"
                whileHover={{scale: 1.1}}>
                <motion.img
                    initial={{
                        z: 0
                    }}
                    src={props.project.img}
                    whileHover={{
                        rotateZ: 2,
                    }}
                    whileDrag={{
                        rotateZ: -2,
                    }}
                    transition={{
                        repeat: 3,
                        ease: 'easeIn',
                        type: 'just',
                        duration: 1,
                        repeatType: 'reverse'
                    }}
                    alt="Project img"
                    className="project__img"/>
                <h3 className="project__title">{props.project.title}</h3>
            </motion.li>

        </NavLink>
    )
}
