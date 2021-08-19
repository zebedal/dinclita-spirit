import { motion } from "framer-motion"
import NavLinkDetail from "./NavLinkDetail"
import {useState} from 'react'
import { Link } from 'react-router-dom'

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

const NavLink = ({videoSrc, name, to}) => {

    const [loadVideo, setLoadVideo] = useState(false);

    const handleVideo = () => {
        setLoadVideo(true);
    }

    return (
        <motion.span variants={navLinks} onMouseEnter={handleVideo}>
            <Link to={to}>{name}
                <NavLinkDetail loadVideo={loadVideo} videoSrc={videoSrc} />
            </Link>
        </motion.span>
        
    )
}


export default NavLink