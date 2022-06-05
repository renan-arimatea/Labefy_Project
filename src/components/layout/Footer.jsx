import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {Footercontainer} from "./FooterStyled"

class Footer extends React.Component {
    render () {
        return (
            
        <Footercontainer className="footer">
                <ul className="socialList">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a>
                    </li>

                    <li>
                        <a href="https://twitter.com/" target="_blank"><FaTwitter/></a>
                    </li>
                </ul>

                <ul className="informations-list">
                    <li>Sobre o Labefy</li>
                    <li>Aviso de Privacidade</li>
                    <li>Termos de Uso</li>
                    <li>Docs</li>
                    <li>API</li>
                    <li>Parcerias</li>
                    <li>Cookies</li>
                    <li>Blog</li>
                    <li>Dúvidas</li>
                    <li>Trabalhe Conosco</li>
                    <li>Contato</li>
                </ul>

            <p className="copy_rigth"><span>Labefy</span> &copy; 2022 - Todos os direitos reservados.</p>
        </Footercontainer>
            
        )
    }
}

export default Footer
