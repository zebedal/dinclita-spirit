import Facebook from "../svg/Facebook"
import Instagram from "../svg/Instagram"
import Youtube from '../svg/Youtube'
import Logo from "../svg/Logo"
import styles from './Footer.module.css'

const Footer = props => (

    <footer className={styles.Footer}>
        <div className={styles['footer-header']}>
            <div className={`container ${styles.Container}`}>
                <div >
                    <span>Share</span>
                    <Facebook />
                    <Instagram />
                </div>
                <div style={{display: 'flex', alignItems:'center',cursor: 'pointer'}}>Topo <svg  width="13.108" height="8.054" viewBox="0 0 13.108 8.054">
  <path  d="M17.865,17.933,13.433,13.5,9,17.933" transform="translate(-6.879 -12)" fill="none" stroke="#5b6533" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
</svg>
</div>
            </div>
        </div>
        <div className="container">
            <div className={styles['footer-content']}>
                <div className={styles['footer-column']}>
                    <Logo />
                    <p style={{color: '#C2C2C2', fontSize: '14px'}}>Adipisicing incididunt officia ad ex eiusmod Lorem.<br /> Consequat nostrud culpa nostrud et Lorem amet.</p>
                </div>
                <div className={styles['footer-column']}>
                    <div>
                        <h5>Raças</h5>
                        <p><a href="#">Cane Corso Italiano</a></p>
                        <p><a href="#">French Bulldog</a></p>
                        <h5>Serviços</h5>
                        <p><a href="#">Criação</a></p>
                        <p><a href="#">Pet Hotel</a></p>
                        <p><a href="#">Outro</a></p>
                    </div>
                    <div>
                        <h5>Sobre Nós</h5>
                        <p><a href="#">Apresentação</a></p>
                        <p><a href="#">Media</a></p>
                        <h5>Suporte</h5>
                        <p><a href="#">Contacte-nos</a></p>
                    </div>

                </div>
                <div className={styles['footer-column']}>
                    <h5>Contactos</h5>
                    <p className={styles.contact}>
                        <svg width="19.781" height="19.781" viewBox="0 0 19.781 19.781">
                            <path d="M19.061.95,15.044.023A.933.933,0,0,0,13.981.56L12.127,4.887a.925.925,0,0,0,.267,1.082l2.341,1.916a14.318,14.318,0,0,1-6.846,6.846L5.972,12.389a.926.926,0,0,0-1.082-.267L.564,13.977a.938.938,0,0,0-.541,1.066L.95,19.061a.927.927,0,0,0,.9.719A17.924,17.924,0,0,0,19.78,1.854.926.926,0,0,0,19.061.95Z" transform="translate(0.001 0.001)" fill="#c2c2c2" />
                        </svg>
                        <span>&nbsp;914 339 972</span>
                    </p>
                    <p className={styles.contact}>
                        <svg width="19.5" height="20.998" viewBox="0 0 19.5 20.998">
                            <path d="M18.978,6.562A.509.509,0,0,0,19.5,6.07V4.429a.509.509,0,0,0-.522-.492h-.871V1.969A2.032,2.032,0,0,0,16.018,0H2.089A2.032,2.032,0,0,0,0,1.969V19.03A2.032,2.032,0,0,0,2.089,21H16.018a2.032,2.032,0,0,0,2.089-1.969V17.061h.871a.509.509,0,0,0,.522-.492v-1.64a.509.509,0,0,0-.522-.492h-.871V11.811h.871a.509.509,0,0,0,.522-.492V9.679a.509.509,0,0,0-.522-.492h-.871V6.562ZM9.054,5.25a2.711,2.711,0,0,1,2.786,2.625A2.711,2.711,0,0,1,9.054,10.5,2.711,2.711,0,0,1,6.268,7.874,2.711,2.711,0,0,1,9.054,5.25Zm4.875,9.712a.9.9,0,0,1-.975.787h-7.8a.9.9,0,0,1-.975-.787v-.787A2.69,2.69,0,0,1,7.1,11.811h.218a4.738,4.738,0,0,0,3.465,0H11a2.69,2.69,0,0,1,2.925,2.362Z" fill="#c2c2c2" />
                        </svg>
                        <span>&nbsp;Rua das Camélias 44,  2870-214 Montijo</span>
                    </p>
                    <p className={styles.contact}>
                        <svg width="19" height="15.2" viewBox="0 0 19 15.2">
                            <path d="M20.1,6H4.9A1.9,1.9,0,0,0,3.01,7.9L3,19.3a1.906,1.906,0,0,0,1.9,1.9H20.1A1.906,1.906,0,0,0,22,19.3V7.9A1.906,1.906,0,0,0,20.1,6Zm0,3.8-7.6,4.75L4.9,9.8V7.9l7.6,4.75L20.1,7.9Z" transform="translate(-3 -6)" fill="#c2c2c2" />
                        </svg>
                        <span>&nbsp;rm.di@hotmail.com</span>
                    </p>
                    <h5>Segue-nos</h5>
                    <div style={{display: 'flex', gap:'10px'}}>
                        <Youtube size="25"/>
                        <Facebook size="25"/>
                        <Instagram size="25"/>
                    </div>
                </div>
            </div>
        </div>
        <p style={{textAlign: 'center', color:'#C2C2C2'}}>© 2021 Dinclita Spirit Todos os direitos reservados</p>
    </footer>

)

export default Footer