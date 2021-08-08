import styles from './Header.module.css'
import Logo from '../svg/Logo'
import MenuToggler from '../svg/MenuToggler'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import NavLink from './Navlink'

const container = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}



const Header = ({toggleMobileNav}) => {

    const [navigationOpen, setNavigationOpen] = useState(false);
  

    const toggleNav = () => {
        setNavigationOpen(!navigationOpen);
    }

    let mobile = window.innerWidth < 750;

    console.log(mobile)
   

    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <span><Logo /></span>
                    <span><MenuToggler toggleNav={mobile ? toggleMobileNav : toggleNav} navOpen={navigationOpen} /></span>
                </div>
            </header>
            <div className={`${styles.navigation}`}>
                <motion.div variants={container} initial="start" animate={navigationOpen ? "end" : ""}>
                    <NavLink name="Sobre Nós" videoSrc="video.mp4" />
                    <NavLink name="Pet Hotel" videoSrc="video2.mp4" />
                    <NavLink name="Cane Corso" videoSrc="video3.mp4" />
                    <NavLink name="French Bulldog" videoSrc="video4.mp4" />
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default Header