import {motion, AnimatePresence} from "framer-motion";
import{useState} from "react";
import {Motion} from "../Motion";

export const Collapsible = (props) => {
    const {
        title = 'click me',
        children
    } = props
    const [isVisible, setVisible] = useState(false)
    const handleVisibility = () => setVisible(!isVisible)
    return (
        <>
            <div className="div"
                 onClick={handleVisibility}
                 style={{
                     backgroundColor: '#ddd',
                     width: 300,
                     padding: '.8rem 1.2rem',
                 }}
            >
                <AnimatePresence>
                    {
                        isVisible && (
                            <motion.div
                                initial={{height: 0}}
                                animate={{height: 'auto'}}
                                exit={{height: 0}}
                                style={{overflow: 'hidden', border: '1px solid #ddd'}}
                            >
                                <div style={{padding: '.8rem 1/2rem'}}>
                                    {children}
                                </div>
                            </motion.div>
                        )
                    }

                </AnimatePresence>

            </div>
        </>
    )
}
