import styles from './Homepage.module.css'
import doggy from '../assets/img/dog-removebg.png'
import puppy from '../assets/img/puppy.jpg'
import PlayButton from '../components/svg/PlayButton'
import Youtube from '../components/svg/Youtube'
import Facebook from '../components/svg/Facebook'
import Instagram from '../components/svg/Instagram'
import dog from '../assets/img/service-box-puppy.jpg'
import pethotel from '../assets/img/pet-hotel.jpg'
import videoImage from '../assets/img/pet-hotel-video.jpg'
import new1 from '../assets/img/new1.jpg'
import new2 from '../assets/img/new2.jpg'
import logo from '../assets/img/logo-white.svg'
import Button from '../components/UI/Button'
import React, { useState, useEffect } from 'react'
import YoutubeEmbed from '../components/UI/YoutubeEmbed'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import related from '../data/related'
import Related from '../components/homepage/Related'
import Logo from '../components/svg/Logo'

const Homepage = props => {

    const [videoOpen, setVideoOpen] = useState(false);

    const inViewoptions = {
        triggerOnce: true,
        threshold: 0.1
    }

    const [ref, inView, entry] = useInView(inViewoptions)
    const [ref1, inView1, entry1] = useInView(inViewoptions)
    const [ref2, inView2, entry2] = useInView(inViewoptions)
    const [ref3, inView3, entry3] = useInView(inViewoptions)


    useEffect(() => {
        if (videoOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    })

    const handleClick = () => {
        setVideoOpen(!videoOpen);
    }

    const variants = {
        start: {
            opacity: 0,
            scale: 0.5,
            translateX: '-50%',
        },
        end: {
            opacity: 1,
            scale: 1,
            translateX: '-50%',
            transition: {
                duration: 0.5
            }
        }
    }


    return (
        <React.Fragment>

            <YoutubeEmbed embedId="vT9l91mJ_F0" open={videoOpen} toggleVideo={handleClick} />

            <section className={styles.landing}>
                <div className={styles['blur-overlay']}></div>
                <div className={styles['lateral-text']}><p>SOME SUPPORT TEXT</p></div>
                <motion.div className={styles.doggy} variants={variants} initial="start"
                    animate="end">
                    <div className={styles['hero-title']}>
                        <span>CA</span>&nbsp;<span>NE</span>
                    </div>
                    <img src={doggy} alt="criador de cães" />
                </motion.div>

                <div className={`container ${styles['video-box']}`}>
                    <div>
                        <h5 className={styles.subtitle}>Última Ninhada</h5>
                        <p className={styles.light}>11 de Julho</p>
                        <p>#dinclitaspirit.canecorso</p>
                    </div>
                    <div className={styles['small-video-wrapper']} style={{ cursor: 'pointer' }}>
                        <img src={puppy} alt="cane corso"></img>
                        <PlayButton click={handleClick} />
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

            <section ref={ref} className={`${styles.content} ${styles.services} ${inView ? styles.obs : null}`}>
                <div className="container">
                    <h2>Conheça os nossos serviços</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                    <div className={styles['services-wrapper']}>

                        <div className={styles['service-box']}>
                            <img src={dog} alt="criação de cães cane corso" />
                            <div>
                                <h5 className={styles['service-box-title']}>Criação de cães</h5>
                                <Button text="Saber mais" />
                            </div>
                        </div>

                        <div className={styles['service-box']}>
                            <img src={pethotel} alt="criação de bulldog frances" />
                            <div>
                                <h5 className={styles['service-box-title']}>Criação de cães</h5>
                                <Button text="Saber mais" />
                            </div>
                        </div>

                        <div className={styles['service-box']}>
                            <img src={dog} alt="hotel para cães" />
                            <div>
                                <h5 className={styles['service-box-title']}>Criação de cães</h5>
                                <Button text="Saber mais" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section ref={ref1} className={`${styles.content} ${styles.video} ${inView1 ? styles.obs : null}`}>
                <div className={styles['video-wrapper']}>
                    <img src={videoImage} alt="hotel para animais" />
                    <img src={logo} alt="dinclita spirit cane corso" />
                    <div>
                        <PlayButton />
                        <p>Ver Vídeo</p>
                    </div>
                </div>
            </section>

            <section ref={ref2} className={`${styles.content} ${styles['new-members']} ${inView2 ? styles.obs : null}`}>
                {/* <div className={styles['new-members-img-wrapper']}>
                    <img src={littleDog} alt="" />
                </div> */}

                <div className={`container ${styles['content-wrapper']}`}>

                    <div className={styles.content}>
                        <h2>NOVOS MEMBROS DA FAMÍLIA</h2>
                        <p>Adipisicing cillum dolor id anim ullamco Lorem minim id sit aliqua amet deserunt ad. Et ex reprehenderit mollit in sunt cillum. Commodo fugiat ex anim voluptate nisi ea id eu magna sint occaecat in mollit. Ut eiusmod quis in reprehenderit. Do ullamco deserunt non ipsum proident id duis nisi ea irure culpa eiusmod. Ea anim ipsum sit ullamco velit non voluptate aliquip cillum tempor velit mollit.</p>
                        <Button text="Saber mais" />
                    </div>

                    <div className={styles.babies}>
                        <div className={styles['baby-box']}>
                            <img src={new1} alt="" />
                            <p>Doggy 1</p>
                        </div>
                        <div className={styles['baby-box']}>
                            <img src={new2} alt="" />
                            <p>Doggy 2</p>
                        </div>
                    </div>
                </div>

            </section>

            <section ref={ref3} className={`${styles.content} ${styles['related']} ${inView3 ? styles.obs : null}`}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Relacionado</h2>
                    <div className={styles['related-wrapper']}>
                        {related.map((item, index) => <Related imgUrl={item.imgUrl} title={item.title} text={item.text} key={index}/>)}
                    </div>
                </div>
            </section>

            

        </React.Fragment>
    )

}

export default Homepage