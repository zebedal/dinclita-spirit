import styles from './Homepage.module.css'
import doggy from '../assets/img/dog-removebg.png'
import puppy from '../assets/img/puppy.jpg'
import PlayButton from '../components/svg/PlayButton'
import Youtube from '../components/svg/Youtube'
import Facebook from '../components/svg/Facebook'
import Instagram from '../components/svg/Instagram'
import dog from '../assets/img/service-box-puppy.jpg'
import pethotel from '../assets/img/pet-hotel.jpg'
import Button from '../components/UI/Button'
import React from 'react'

const Homepage = props => (


    <React.Fragment>

        <section className={styles.landing}>
            <div className={styles['blur-overlay']}></div>
            <div className={styles['lateral-text']}><p>SOME SUPPORT TEXT</p></div>
            <div className={styles.doggy}>
                <div className={styles['hero-title']}>
                    <span>CA</span>&nbsp;<span>NE</span>
                </div>
                <img src={doggy} alt="criador de cães" />
            </div>

            <div className={`container ${styles['video-box']}`}>
                <div>
                    <h5 className={styles.subtitle}>Última Ninhada</h5>
                    <p className={styles.light}>11 de Julho</p>
                    <p>#dinclitaspirit.canecorso</p>
                </div>
                <div>
                    <img src={puppy} alt="cane corso"></img>
                    <PlayButton />
                </div>
            </div>
            <div className={styles['lateral-controls']}>
                <div className={styles.social}>
                    <Youtube />
                    <Facebook />
                    <Instagram />
                </div>
                <div className={styles['slider-controls']}>
                    <div className={styles.current}>
                        <span>03</span>
                        <span>&nbsp;/05</span>
                    </div>
                    <div className={`${styles.control} ${styles.green}`}>
                        <svg width="6.641" height="10.754" viewBox="0 0 6.641 10.754"><path d="M1.264,0,0,1.264,4.1,5.377,0,9.491l1.264,1.264L6.641,5.377Z" fill="#fff" /></svg>
                    </div>
                    <div className={`${styles.control} ${styles.grey}`}>
                        <svg width="6.641" height="10.754" viewBox="0 0 6.641 10.754"><path d="M1.264,0,0,1.264,4.1,5.377,0,9.491l1.264,1.264L6.641,5.377Z" fill="#fff" /></svg>
                    </div>
                </div>
            </div>
        </section>

        <section className={`${styles.content} ${styles.services}`}>
            <div className="container">
                <h2>Conheça os nossos serviços</h2>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                <div className={styles['services-wrapper']}>

                    <div className={styles['service-box']}>
                        <img src={dog} alt="" />
                        <div>
                            <h5 className={styles['service-box-title']}>Criação de cães</h5>
                            <Button text="Saber mais" />
                        </div>
                    </div>

                    <div className={styles['service-box']}>
                        <img src={pethotel} alt="" />
                        <div>
                            <h5 className={styles['service-box-title']}>Criação de cães</h5>
                            <Button text="Saber mais" />
                        </div>
                    </div>

                    <div className={styles['service-box']}>
                        <img src={dog} alt="" />
                        <div>
                            <h5 className={styles['service-box-title']}>Criação de cães</h5>
                            <Button text="Saber mais" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </React.Fragment>
)

export default Homepage