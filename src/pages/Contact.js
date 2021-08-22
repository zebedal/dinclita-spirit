import styles from './Contact.module.css'
import Button from '../components/UI/Button'
import { Fragment } from 'react'
import Facebook from '../components/svg/Facebook'
import Instagram from '../components/svg/Instagram'
import Youtube from '../components/svg/Youtube'

const Contact = props => {

    const handleSubmit = e => {
        console.log(e)
    }


    return (
        <Fragment>
            <div className={`container ${styles.Container}`} >

                <div className={styles.col40}>
                    <h1>Enviar mensagem</h1>
                    <br />

                    <p style={{ marginTop: '10px' }}>Se tiver alguma dúvida sobre os nossos serviços ou outra qualquer deixe-nos uma mensagem e responderemos o mais rapidamente possível</p>

                    <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>

                        <div className={styles.formLine}>
                            <label htmlFor="nome">Nome: </label>
                            <input type="text" placeholder="Nome" name="nome" required />
                        </div>

                        <div className={styles.formLine}>
                            <label htmlFor="email">Email: </label>
                            <input type="email" placeholder="Email" name="email" required />
                        </div>

                        <div className={styles.formLine}>
                            <label htmlFor="tel">Telefone: </label>
                            <input type="tel" placeholder="Telefone" name="tel" required />
                        </div>

                        <div className={styles.formLine}>
                            <label htmlFor="text" style={{ verticalAlign: 'top' }}>Mensagem: </label>
                            <textarea placeholder="Mensagem" rows="10" cols="50"></textarea>
                        </div>
                        <br />
                        <Button text="Enviar" margin="left" tipo="submit" />
                    </form>
                </div>

                <div className={styles.col60}>
                    <h3 className={styles.subTitle}>Contactos</h3>
                    <div className={styles.contactosWrapper}>
                        <p className={styles.contact}>
                            <svg width="19.781" height="19.781" viewBox="0 0 19.781 19.781">
                                <path d="M19.061.95,15.044.023A.933.933,0,0,0,13.981.56L12.127,4.887a.925.925,0,0,0,.267,1.082l2.341,1.916a14.318,14.318,0,0,1-6.846,6.846L5.972,12.389a.926.926,0,0,0-1.082-.267L.564,13.977a.938.938,0,0,0-.541,1.066L.95,19.061a.927.927,0,0,0,.9.719A17.924,17.924,0,0,0,19.78,1.854.926.926,0,0,0,19.061.95Z" transform="translate(0.001 0.001)" fill="#5B6533" />
                            </svg>
                            <span>&nbsp;914 339 972</span>
                        </p>
                        <p className={styles.contact}>
                            <svg width="19.5" height="20.998" viewBox="0 0 19.5 20.998">
                                <path d="M18.978,6.562A.509.509,0,0,0,19.5,6.07V4.429a.509.509,0,0,0-.522-.492h-.871V1.969A2.032,2.032,0,0,0,16.018,0H2.089A2.032,2.032,0,0,0,0,1.969V19.03A2.032,2.032,0,0,0,2.089,21H16.018a2.032,2.032,0,0,0,2.089-1.969V17.061h.871a.509.509,0,0,0,.522-.492v-1.64a.509.509,0,0,0-.522-.492h-.871V11.811h.871a.509.509,0,0,0,.522-.492V9.679a.509.509,0,0,0-.522-.492h-.871V6.562ZM9.054,5.25a2.711,2.711,0,0,1,2.786,2.625A2.711,2.711,0,0,1,9.054,10.5,2.711,2.711,0,0,1,6.268,7.874,2.711,2.711,0,0,1,9.054,5.25Zm4.875,9.712a.9.9,0,0,1-.975.787h-7.8a.9.9,0,0,1-.975-.787v-.787A2.69,2.69,0,0,1,7.1,11.811h.218a4.738,4.738,0,0,0,3.465,0H11a2.69,2.69,0,0,1,2.925,2.362Z" fill="#5B6533" />
                            </svg>
                            <span>&nbsp;Rua da Agricultura, 2985-104 Montijo</span>
                        </p>
                        <p className={styles.contact} >
                            <svg width="19" height="15.2" viewBox="0 0 19 15.2">
                                <path d="M20.1,6H4.9A1.9,1.9,0,0,0,3.01,7.9L3,19.3a1.906,1.906,0,0,0,1.9,1.9H20.1A1.906,1.906,0,0,0,22,19.3V7.9A1.906,1.906,0,0,0,20.1,6Zm0,3.8-7.6,4.75L4.9,9.8V7.9l7.6,4.75L20.1,7.9Z" transform="translate(-3 -6)" fill="#5B6533" />
                            </svg>
                            <span>&nbsp;rm.di@hotmail.com</span>
                        </p>
                        <br />
                        <h4>Redes sociais</h4>
                        <div className={styles.social}>
                            <Facebook size="20" fill="#363636" />
                            <Instagram size="20" fill="#363636" />
                            <Youtube size="20" fill="#363636" />
                        </div>
                        <br/>
                        <h4>Horário de Funcionamento</h4>
                        <p style={{marginTop:'10px'}}>Aberto todos os dias das 09:00 ás 19:00</p>
                        
                    </div>
                </div>

            </div>


            <div className={`container ${styles.ContainerMap}`} >

                <div className={styles.mapWrapper}>
                    <h3 className={styles.subTitle}>Onde estamos?</h3>
                    <br />
                    <p>Estamos localizados nas Faias a 20 minutos do centro do Montijo e da ponte Vasco da Gama</p>
                    <br />
                    <iframe
                        title="map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAkqfaZk-qSuvsv_JdHIIh07xZompHUBYI&q=pegões"}>
                    </iframe>
                </div>

            </div>

        </Fragment>
    )
}

export default Contact