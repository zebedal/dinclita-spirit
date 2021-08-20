import styles from './Cane.module.css'
import cane from '../assets/img/bulldog1.jpg'
import cane2 from '../assets/img/bulldog2.jpg'
import cane3 from '../assets/img/cane3.jpg'
import cane4 from '../assets/img/cane4.jpg'
import puppy1 from '../assets/img/canecorso/1.jpg'
import puppy2 from '../assets/img/canecorso/2.jpg'
import puppy3 from '../assets/img/canecorso/3.jpg'
import puppy4 from '../assets/img/canecorso/4.jpg'
import puppy5 from '../assets/img/canecorso/5.jpg'
import puppy6 from '../assets/img/canecorso/6.jpg'
import { SRLWrapper } from "simple-react-lightbox";
import { Fragment } from 'react'
import Button from '../components/UI/Button'
import LogoDark from '../components/svg/LogoDark'

const BullDog = props => {


    return (
        <Fragment>
            <section className={styles.Section}>
                <div className={`container ${styles.Container}`}>

                    <div className={styles.col40}>
                        <h1>Bulldog Francês</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget porta felis. Donec interdum pharetra mauris vel imperdiet. Mauris eros urna, vehicula et ex vitae, sodales cursus sem. Donec fringilla sagittis eros eget convallis. Suspendisse sit amet tortor nulla. Sed sit amet finibus arcu, id vehicula lacus. Etiam ipsum arcu, tempor et facilisis a, euismod sed dui.</p>
                        <br />
                        <p>
                            Maecenas ultrices neque ac tellus fringilla, in consequat justo tempor. Cras fringilla magna quis mi finibus, eu imperdiet ante aliquam. Nunc a dui nec est blandit congue. Fusce luctus sem ut est scelerisque, ac imperdiet arcu hendrerit. Etiam eu lacus nec tortor gravida tincidunt quis a magna. Quisque ac nibh felis. Nulla dictum tellus sed ligula cursus, non dignissim mi faucibus. Duis turpis quam, vestibulum id hendrerit quis, semper vel leo. Proin congue arcu at orci consectetur suscipit. In at turpis quam. Donec accumsan elit suscipit nibh bibendum, quis tempor sem bibendum.
                        </p>
                        <br />
                        <h3>História da raça</h3>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in pretium ligula. Proin sit amet tortor elementum, luctus enim at, facilisis magna. Nulla semper tortor vel ligula ultrices, nec molestie purus laoreet. Integer cursus ultricies arcu. Donec faucibus fringilla nibh quis finibus. Vivamus ut auctor dolor. Proin nec rhoncus ligula.
                        </p>
                        <p>Nullam non condimentum nisl. Fusce justo dui, ultrices vel urna quis, pharetra hendrerit purus. Nulla ac erat et mauris vestibulum vehicula. Quisque cursus leo non fermentum mollis. Quisque fringilla elit vitae pulvinar hendrerit. Sed porta viverra nisl, sed pellentesque quam consectetur vel.</p>
                        <br />
                        <h4>Principais características</h4>
                        <br />
                        <ol>
                            <li>Quisque cursus leo non fermentum mollis</li>
                            <li>Quisque cursus leo non fermentum mollis</li>
                            <li>Quisque cursus leo non fermentum mollis</li>
                            <li>Quisque cursus leo non fermentum mollis</li>
                            <li>Quisque cursus leo non fermentum mollis</li>
                            <li>Quisque cursus leo non fermentum mollis</li>
                        </ol>
                    </div>

                    <div className={styles.col60}>
                        <div className={styles['image-grid']}>
                            <SRLWrapper>
                                <div className={styles['grid-item']}>
                                    <img src={cane} alt="cane corso" />
                                </div>
                                <div className={styles['grid-item']}>
                                    <img src={cane2} alt="cane corso" />
                                </div>
                                <div className={styles['grid-item']}>
                                    <img src={cane3} alt="cane corso" />
                                </div>
                                <div className={styles['grid-item']}>
                                    <img src={cane4} alt="cane corso" />
                                </div>
                            </SRLWrapper>
                        </div>
                    </div>

                </div>
            </section>


            <div className="container" style={{ textAlign: 'center' }}>

                <h2 >Última ninhada</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in dui semper, consectetur odio vel, mattis urna. Proin congue nec lorem nec dictum. Etiam nec sapien viverra, scelerisque libero eu, sagittis neque. Proin rhoncus ex ultrices erat elementum tincidunt. Nam faucibus sit amet nisi ac lobortis. Nunc sem nunc, faucibus venenatis velit sit amet, consectetur auctor nulla. Donec ligula tortor, suscipit ultricies gravida in, tincidunt id ante. Morbi sed hendrerit enim, eget molestie mi.</p>

                <div className={styles['ninhada-gallery']}>

                    <div className={styles.ninhadaItem}>
                        <div className={styles.col40}>
                            <p className={styles.dogName}>Niro</p>
                            <p><span>Idade:</span>&nbsp;18 semanas</p>
                            <p><span>Pai:</span>&nbsp;Outro cão qualquer</p>
                            <p><span>Mãe:</span>&nbsp;Mais uma cadela</p>
                            <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis diam pretium, posuere metus eu, vestibulum orci. Donec ultricies sed nibh vitae vestibulum. Phasellus dui erat, vehicula et ex at, interdum placerat nisl. Nulla tristique ante sed purus hendrerit, in pellentesque ex vehicula
                            </p>
                            <Button text="Marcar Visita" margin="left"/>
                        </div>
                        <div className={styles.col60}>
                            <img src={puppy1} alt="cao ninhada cane corso" />
                        </div>
                    </div>

                    <div className={styles.ninhadaItem}>
                    <div className={styles.col60}>
                            <img src={puppy2} alt="cao ninhada cane corso" />
                        </div>
                        <div className={styles.col40}>
                        <p className={styles.dogName}>Dakota</p>
                            <p><span>Idade:</span>&nbsp;18 semanas</p>
                            <p><span>Pai:</span>&nbsp;Outro cão qualquer</p>
                            <p><span>Mãe:</span>&nbsp;Mais uma cadela</p>
                            <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis diam pretium, posuere metus eu, vestibulum orci. Donec ultricies sed nibh vitae vestibulum. Phasellus dui erat, vehicula et ex at, interdum placerat nisl. Nulla tristique ante sed purus hendrerit, in pellentesque ex vehicula
                            </p>
                            <Button text="Marcar Visita" margin="left"/>
                        </div>
                    </div>

                    <div className={styles.ninhadaItem}>
                        <div className={styles.col40}>
                        <p className={styles.dogName}>Angelus</p>
                            <p><span>Idade:</span>&nbsp;18 semanas</p>
                            <p><span>Pai:</span>&nbsp;Outro cão qualquer</p>
                            <p><span>Mãe:</span>&nbsp;Mais uma cadela</p>
                            <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis diam pretium, posuere metus eu, vestibulum orci. Donec ultricies sed nibh vitae vestibulum. Phasellus dui erat, vehicula et ex at, interdum placerat nisl. Nulla tristique ante sed purus hendrerit, in pellentesque ex vehicula
                            </p>
                            <Button text="Marcar Visita" margin="left"/>
                        </div>
                        <div className={styles.col60}>
                            <img src={puppy3} alt="cao ninhada cane corso" />
                        </div>
                    </div>

                    <div className={styles.ninhadaItem}>
                    <div className={styles.col60}>
                            <img src={puppy4} alt="cao ninhada cane corso" />
                        </div>
                        <div className={styles.col40}>
                        <p className={styles.dogName}>Mark</p>
                            <p><span>Idade:</span>&nbsp;18 semanas</p>
                            <p><span>Pai:</span>&nbsp;Outro cão qualquer</p>
                            <p><span>Mãe:</span>&nbsp;Mais uma cadela</p>
                            <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis diam pretium, posuere metus eu, vestibulum orci. Donec ultricies sed nibh vitae vestibulum. Phasellus dui erat, vehicula et ex at, interdum placerat nisl. Nulla tristique ante sed purus hendrerit, in pellentesque ex vehicula
                            </p>
                            <Button text="Marcar Visita" margin="left"/>
                        </div>
                    </div>

                    <div className={styles.ninhadaItem}>
                        <div className={styles.col40}>
                        <p className={styles.dogName}>Sups</p>
                            <p><span>Idade:</span>&nbsp;18 semanas</p>
                            <p><span>Pai:</span>&nbsp;Outro cão qualquer</p>
                            <p><span>Mãe:</span>&nbsp;Mais uma cadela</p>
                            <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis diam pretium, posuere metus eu, vestibulum orci. Donec ultricies sed nibh vitae vestibulum. Phasellus dui erat, vehicula et ex at, interdum placerat nisl. Nulla tristique ante sed purus hendrerit, in pellentesque ex vehicula
                            </p>
                            <Button text="Marcar Visita" margin="left"/>
                        </div>
                        <div className={styles.col60}>
                            <img src={puppy5} alt="cao ninhada cane corso" />
                        </div>
                    </div>

                    <div className={styles.ninhadaItem}>
                    <div className={styles.col60}>
                            <img src={puppy6} alt="cao ninhada cane corso" />
                        </div>
                        <div className={styles.col40}>
                        <p className={styles.dogName}>Goofy</p>
                            <p><span>Idade:</span>&nbsp;18 semanas</p>
                            <p><span>Pai:</span>&nbsp;Outro cão qualquer</p>
                            <p><span>Mãe:</span>&nbsp;Mais uma cadela</p>
                            <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis diam pretium, posuere metus eu, vestibulum orci. Donec ultricies sed nibh vitae vestibulum. Phasellus dui erat, vehicula et ex at, interdum placerat nisl. Nulla tristique ante sed purus hendrerit, in pellentesque ex vehicula
                            </p>
                            <Button text="Marcar Visita" margin="left"/>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`container ${styles.contact}`}>
                <LogoDark size={200} />
                <p style={{margin: '40px 0'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu sapien pretium, vehicula ex et, molestie urna. Nam egestas, ligula posuere convallis volutpat, est metus scelerisque justo, vitae maximus orci mi eget lacus. Etiam malesuada purus eu lacus rutrum, vitae accumsan nibh egestas.
                </p>
                <Button text="Contactar" />
            </div>


        </Fragment>
    )
}
export default BullDog