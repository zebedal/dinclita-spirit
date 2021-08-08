import { motion } from "framer-motion"
import NavLinkDetail from "./NavLinkDetail"
import {useState} from 'react'


const navLinks = {
    start: {
        opacity: 0,
        scale: 0
    },
    end: {
        opacity: 1,
        scale: 1
    }
}

const NavLink = ({videoSrc, name}) => {

    const [loadVideo, setLoadVideo] = useState(false);

    const handleVideo = () => {
        setLoadVideo(true);
    }

    return (
        <motion.a href="#" variants={navLinks} onMouseEnter={handleVideo}>{name}
           <NavLinkDetail loadVideo={loadVideo} videoSrc={videoSrc} />
        </motion.a>
    )
}


export default NavLink