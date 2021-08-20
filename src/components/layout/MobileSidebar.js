import styles from './MobileSidebar.module.css'
import Facebook from '../svg/Facebook'
import Instagram from '../svg/Instagram'
import Youtube from '../svg/Youtube'
import Logo from '../svg/Logo'
import {Link} from 'react-router-dom'

const MobileSidebar = ({ show, toggleSidebar }) => {

    
    return (
        <div className={`${styles.sidebar} ${show ? styles.open : ""}`}>
            <div className={styles.Header}>
                <Logo size="100" />
                <svg onClick={toggleSidebar} width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <line x1="2.12132" y1="3" x2="26" y2="26.8787" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <line x1="3" y1="26.8787" x2="26.8787" y2="3" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>
            <div className={styles.menu}>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre Nós</Link>
                <Link to="/pethotel">Pet Hotel</Link>
                <Link to="/canecorso">Cane Corso</Link>
                <Link to="/bulldog">French Bulldog</Link>
                <Link to="/contactos">Contactos</Link>
            </div>

            <div className={styles.social}>
                <p>Siga-nos nas redes sociais</p>
                <div className={styles['social-icons-wrapper']}>
                    <Facebook />
                    <Instagram />
                    <Youtube />
                </div>
                <br />
                <p><span>Tel.</span>&nbsp;914 339 972</p>
                <p><span>Email</span>&nbsp;rm.di@hotmail.com</p>
            </div>

        </div>
    )




}

export default MobileSidebar