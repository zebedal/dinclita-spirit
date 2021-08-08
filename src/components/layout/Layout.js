import styles from './Layout.module.css'
import Header from './Header'
import MobileSidebar from './MobileSidebar'
import { useState } from 'react'

const Layout = props => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    const toggleMobileSideNav = () => {
        setMobileSidebarOpen(!mobileSidebarOpen)
    }

    return (
        <div className={styles.wrapper}>
            <Header toggleMobileNav={toggleMobileSideNav} />
            <MobileSidebar show={mobileSidebarOpen} toggleSidebar={toggleMobileSideNav} />
            {props.children}
        </div>
    )
}




export default Layout