import styles from './Layout.module.css'
import Header from './Header'
import MobileSidebar from './MobileSidebar'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Layout = props => {

    const {pathname} = useLocation()

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    useEffect(() => {
        setMobileSidebarOpen(false)
    }, [pathname])


    const toggleMobileSideNav = () => {
        setMobileSidebarOpen(!mobileSidebarOpen)
    }

    return (
        <div className={styles.wrapper}>
            <Header toggleMobileNav={toggleMobileSideNav} />
            <MobileSidebar show={mobileSidebarOpen} toggleSidebar={toggleMobileSideNav} />
            {props.children}
            <Footer />
        </div>
    )
}




export default Layout