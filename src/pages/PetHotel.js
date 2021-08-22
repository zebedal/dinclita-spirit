import styles from './PetHotel.module.css'
import React from 'react'
import video from '../assets/video/pethotel.mp4'
import { SRLWrapper } from "simple-react-lightbox";
import {PATH, images}  from '../data/petHotelImages'
import Button from '../components/UI/Button'

const PetHotel = props => {

    return (
        <React.Fragment>
            <div className={styles.Header}>
                <h2>Hotel para cães</h2>
            </div>
            <div className={`container ${styles.Container}`} >
                <p>No pet_hotel_daquintamiguel, o seu cão pode hospedar-se num dos 666 amplos alojamentos individuais, todos com zona coberta, onde se encontram confortáveis camas, e equipados com bebedouros automáticos. Todos os nossos hóspedes usufruem diariamente de parques de passeio individuais, com a possibilidade de banho numa agradável piscina para brincadeiras, sempre ao som de música ambiente que servirão de cenário perfeito para umas férias inesquecíveis.</p><br />
                <p>Os hóspedes da Quinta têm um constante acompanhamento médico-veterinário, incluindo também tratamentos ou medicações a hóspedes em recuperação, irresistíveis refeições e seguro de responsabilidade civil.</p><br />
                <p>Zelando pela saúde dos nossos simpáticos hóspedes, solicitamos a todos que tragam a Caderneta de Vacinas. As vacinas do seu “amigo” (incluindo a vacina específica contra a chamada “tosse de canil” ) deverão estar em dia e ter sido administradas com, pelo menos, 5 dias de antecedência em relação à sua data de entrada.</p><br />
                <p>Para mais informações ou reservas contacte-nos para <a href="#">geral@dinclitaspirit.pt</a> ou através do número 91 379 50 80</p>
                <br />
                <br />
                <h3>COMODIDADES (EXTRA)</h3>
                <br />
                <ul>
                    <li>Box com aquecimento</li>
                    <li>Sessão de lazer divertida no Relvado/Piscina exterior</li>
                    <li>Play Time Extra</li>
                    <li>Banho no dia de saída</li>
                    <li>Dietas especiais incluindo até arroz com carne</li>
                    <li>Tratamentos de enfermagem veterinária</li>
                    <li>Treinos de Obediência</li>
                </ul>
                <Button text="Saber mais" margin="left" />
                <div className={styles.video}>
                    <video controls>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
                <div className={styles.galleryWrapper} style={{textAlign:'center'}}>
                    <h2>Galeria de imagens</h2>
                    <p style={{marginTop: '10px'}}>Id occaecat do nostrud ad sit exercitation anim tempor nulla do. Fugiat veniam dolor sint commodo sint enim est irure tempor veniam occaecat mollit duis quis. Ut magna ipsum nulla cillum.</p>
                    <div className={styles.gallery}>
                        <SRLWrapper>
                            {images.map((img, idx) => <img className={styles.galleryItem} src={`${PATH}${img}`} key={idx} alt={img} />)}
                        </SRLWrapper>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

 
export default PetHotel