import styles from './About.module.css'
import React from 'react'
import pessoal1 from '../assets/img/pessoal1.png'
import pessoal2 from '../assets/img/pessoal2.png'
import pessoal3 from '../assets/img/pessoal3.png'
import Button from '../components/UI/Button'
import test from '../assets/img/testemunhos/testemunho1.jpg'

const PetHotel = props => {

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

            <section className={styles.pessoal}>
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
            </section>

            <section className={styles.visita}>
                <div className={styles['image-container']}>
                    <div className={`container ${styles.Container}`} >
                        <div>
                            <h2 className={styles.impact}>Agende já a sua <br /><span>visita</span></h2>
                            <Button text="Marcar visita" margin="left" />
                        </div>
                        <div className={styles['testemunhos-wrapper']}>
                            <div className={styles.testemunhos}>
                                <img src={test} alt="hotel para caes" />
                                <p>"Excelentes condições, funcionários simpáticos e óptimo tratamento dos animais"</p>
                                <p className={styles['testemunho-name']}>José Matias</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}


export default PetHotel