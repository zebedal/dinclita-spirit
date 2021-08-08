import { motion } from "framer-motion"

const variants = {

    start: {
        opacity: 1
    },
    end: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const children = {
    start: {
        opacity: 1
    },
    startNavOpen: obj => ({
        opacity: 1,
        translateX: obj.x, 
        translateY: obj.y,
        fill: '#819B26'   
    }),
    hover: obj => ({
        translateX: obj.x, 
        translateY: obj.y,
        scale: 0.9,
        rotate: 180,
        opacity: 0.6,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    })
}



const MenuToggler = ({toggleNav, navOpen}) => {


    return (
        <motion.svg variants={variants}  onClick={toggleNav} whileHover="hover" initial="start" animate={navOpen ? "startNavOpen" : "end"} width="59" height="51" viewBox="-15 -10 59 51" fill="none" style={{cursor: 'pointer'}}>
            <motion.rect variants={children} custom={{x:-3, y: -3}}  width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x:0, y: -3}}  x="10.0612" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: 3, y: -3}} x="20.1224" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: -3, y: 0}} y="11.0612" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: 0, y: 0}} x="10.0612" y="11.0612" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: 3, y: 0}} x="20.1224" y="11.0612" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: -3, y: 3}} y="22" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: 0, y: 3}} x="10.0612" y="22" width="8.87755" height="8.87755" rx="1" fill="white" />
            <motion.rect variants={children} custom={{x: 3, y: 3}} x="20.1224" y="22" width="8.87755" height="8.87755" rx="1" fill="white" />
        </motion.svg>
    )




}



export default MenuToggler