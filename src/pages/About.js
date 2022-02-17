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
                <p>Chamo me Rodrigo Miguel, tenho 20 anos e sou o criador/fundador deste projeto.

                Esta aventura foi algo que surgiu naturalmente na minha vida, há alguns anos atrás, uma vez que cresci rodeado de animais e a criação sempre foi a minha paixão. A reprodução é, para mim, o culminar de toda a dedicação e empenho que damos ao animais ao longo da sua vida, numa tentativa de lhes proporcionar as melhores condições para que se sintam seguros em trazer prole ao mundo e assim dar continuidade ás suas espécies.</p>
                <br />
                <p>A cinófilia foi uma atividade que entrou na minha vida muito mais tarde, se comparada com a criação de outras espécies das quais sou possuidor e único cuidador desde os sete anos de idade. Apesar de ter crescido com cães, apenas aos 15 anos de idade é que despertei para o mundo das raças caninas, exposições de beleza, provas de trabalho e obediência, etc… é um mundo. A raça que me cativou desde o início foi definitivamente o cane corso italiano, uma vez que eu procurava um cão de grande porte, com capacidade de guarda e que acima de tudo fosse versátil para se adaptar a todo o tipo de situações e funções para que fosse necessário. Assim que vi o primeiro cão criado de forma correta, com a genética correta e temperamento ideal nunca mais o consegui esquecer e daí a ter o primeiro exemplar foi “um pulinho” e não podia ter pedido melhor cão para começar, mais do que valeu a pena os quase 3 anos de espera!. </p>
                <br />
                <p>O hotel, “PET HOTEL da Quinta Miguel” surgiu de mãos dadas com o projeto “D`inclita Spirit”, uma vez que ao construirmos as instalações para alojar os nossos Cães de criação nos empenhámos muito em proporcionar lhes as melhores condições possíveis, com o máximo de conforto e comodidade. No fundo, quisemos levar o conforto de um lar para o canil e revogar toda e qualquer ideia, arcaica, de canil como sendo um espaço frio de sentimentos, sujo e de aprisionamento. Quando a construção foi sendo finalizada e começámos a mostrar o espaço e a receber visitas, tanto presenciais como através das nossas redes sociais, começámos também a receber bastantes elogios e alguns pedidos de hospedagem temporária e assim começámos a desenvolver este projeto que nada tem haver com a criação, senão apenas proporcionar um local idóneo e seguro para que os nossos hóspedes se sintam igualmente em casa quando os donos precisam de se ausentar e os deixam connosco</p>
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
                                <img src={pessoal3} alt="criador de caes" />
                            </div>
                            <h5 className={styles.name}>Sandra Almeida</h5>
                            <p className={styles.position}>Responsável / Tratadora</p>
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