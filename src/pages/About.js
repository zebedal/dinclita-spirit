import styles from './About.module.css'
import React from 'react'
import pessoal1 from '../assets/img/pessoal1.png'
import pessoal2 from '../assets/img/pessoal2.png'
import pessoal3 from '../assets/img/pessoal3.png'
import Button from '../components/UI/Button'
import test from '../assets/img/testemunhos/testemunho1.jpg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'



const equipaVariants = {
    start: {
        y: 100,
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
            damping: 10
        }
    }
}

const lettering = {
    start: {
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const letras = {
    start: {
        
        scaleY:0,
        originY: 1
    },
    end: {
        
        scaleY:1,
        transition:{
            type: 'spring',
            stiffness: 200,
            
        }
    }
}

const PetHotel = props => {

    const inViewoptions = {
        triggerOnce: true,
        threshold: 0.1
    }

    const [ref, inView, entry] = useInView(inViewoptions)
    const [ref1, inView1, entry1] = useInView(inViewoptions)

    return (
        <React.Fragment>
            <div className={styles.Header}>
                <h2>Sobre Nós</h2>
            </div>
            <div className={`container ${styles.Container}`} >
                <h4 className={styles.subtitle}>A Dinclita Spirit é um centro canino, de bem-Estar e comportamento Animal, em atividade desde o ano 2010. Somos atualmente uma referência regional neste segmento, onde se destacam o Hotel e a criação das raças Canne Corso e Bulldog Francês.</h4>
                <br />
                <p>Com uma área de cerca de 5000 m2, o nosso espaço está localizado no concelho do Montijo, a 10 minutos de Lisboa e junto aos acessos da A2 e A33, o que permite que chegue até nós de forma rápida e cómoda.</p>
                <br />
                <p>A Dinclita Spirit é composta por uma equipa multidisciplinar que alicerça os seus serviços no conhecimento científico mais recente, respondendo aos desafios atuais, onde os animais têm um papel fundamental na dinâmica e equilíbrio familiar. </p>
                <br />
                <p>Temos como missão garantir que os animais que ficam ao nosso cuidado usufruam de elevados índices de bem-estar, conforto e segurança. Promovemos momentos de passeio, atividades e rotinas de alimentação, garantindo uma resposta adaptada às necessidades físicas e emocionais de cada animal. Dispomos de assistência veterinária e acompanhamento contínuo durante toda a sua permanência na nossa quinta.</p>
            </div>

            <motion.section className={styles.pessoal} ref={ref} variants={equipaVariants} initial="start" animate={`${inView ? "end" : ""}`}>
                <div className={`container ${styles.Container}`} >
                    <h2>Equipa</h2>
                    <p>Conheça a nossa equipa</p>
                    <div className={styles['pessoal-wrapper']}>

                        <div className={styles.pessoal}>
                            <div className={styles['image-wrapper']}>
                                <img src={pessoal1} alt="criador de caes" />
                            </div>
                            <h5 className={styles.name}>Rodrigo Miguel</h5>
                            <p className={styles.position}>Responsável / Criador</p>
                        </div>

                        <div className={styles.pessoal}>
                            <div className={styles['image-wrapper']}>
                                <img src={pessoal2} alt="criador de caes" />
                            </div>
                            <h5 className={styles.name}>Ana Gouveia</h5>
                            <p className={styles.position}>Tratadora</p>
                        </div>

                        <div className={styles.pessoal}>
                            <div className={styles['image-wrapper']}>
                                <img src={pessoal3} alt="criador de caes" />
                            </div>
                            <h5 className={styles.name}>Sandra Almeida</h5>
                            <p className={styles.position}>Tratadora</p>
                        </div>
                    </div>
                    <Button text="saber mais" />
                </div>
            </motion.section>

            <section className={styles.visita}>
                <div className={styles['image-container']}>
                    <div className={`container ${styles.Container}`} >
                        <div>
                            <h2 className={styles.impact}>Agende já a sua <br />
                            <motion.span variants={lettering} initial="start" animate={inView1 ? "end" : ""} ref={ref1}>
                                <motion.span className={styles.letra} variants={letras}>v</motion.span>
                                <motion.span className={styles.letra} variants={letras}>i</motion.span>
                                <motion.span className={styles.letra} variants={letras}>s</motion.span>
                                <motion.span className={styles.letra} variants={letras}>i</motion.span>
                                <motion.span className={styles.letra} variants={letras}>t</motion.span>
                                <motion.span className={styles.letra} variants={letras}>a</motion.span>
                            </motion.span>
                            </h2>
                            <Button text="Marcar visita" margin="left" />
                        </div>
                        <motion.div className={styles['testemunhos-wrapper']} initial={{y: 100, opacity: 0}} animate={inView1 ? {y:0, opacity:1, transition:{delay: 1.2}} : ""}>
                            <div className={styles.testemunhos}>
                                <img src={test} alt="hotel para caes" />
                                <p>"Excelentes condições, funcionários simpáticos<br /> e óptimo tratamento dos animais"</p>
                                <p className={styles['testemunho-name']}>José Matias</p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}


export default PetHotel