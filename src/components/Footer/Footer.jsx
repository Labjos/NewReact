import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsappSquare, faFacebookSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import logoBlack from '../../imagenes/logo.png';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"




export const Footer = () => {


    return (
        <div className = "footer">
          
            <div className="pie">
                <div id="iconoWas"><FontAwesomeIcon icon={faWhatsappSquare}/>
                    </div>
                <div id="iconoFace"><FontAwesomeIcon icon={faFacebookSquare} /></div>
                <div id="iconoInstagram"><i class="fab fa-instagram-square"></i></div>
                <div id="iconoYotube"><FontAwesomeIcon icon={faYoutubeSquare} /></div>
                <div id="iconoMail"><FontAwesomeIcon icon={faEnvelopeSquare} /></div>
                <div id="email">info@black53red.com</div>
                <img id="logoBlackRed"  src={ logoBlack } alt="logo BlackRed" />
            </div>

        </div>
       
    )

}