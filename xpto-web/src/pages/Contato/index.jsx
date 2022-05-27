import React from "react";
import Navbar from "../../components/Navbar";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaAt, FaPhone, FaMap } from 'react-icons/fa'
import { ContactChannels, ContactContainer, Content, SocialMediaContainer, LeftSide, RightSide } from "./styles";
import Footer from "../../components/Footer";



const Contact = () => {
    return (
        <ContactContainer>
            <Navbar />
            <Content>
                <LeftSide>
                    <h4>Siga-nos nas redes sociais:</h4>
                    <SocialMediaContainer>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/">
                                            <FaYoutube color="var(--youtube-red)" size="30px" />
                                        </a>
                                    </td>
                                    <td>YouTube</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/">
                                            <FaFacebook color="var(--facebook-blue)" size="30px" />
                                        </a>
                                    </td>
                                    <td>Facebook</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/">
                                            <FaInstagram color="var(--last-instagram)" size="30px" />
                                        </a>
                                    </td>
                                    <td>Instagram</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/">
                                            <FaLinkedin color="var(--linkedin-blue)" size="30px" />
                                        </a>
                                    </td>
                                    <td>LinkedIn</td>
                                </tr>
                            </tbody>
                        </table>
                    </SocialMediaContainer>
                    
                </LeftSide>
                <RightSide>
                    <ContactChannels>
                        <h4>Canais de contato:</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <FaWhatsapp color="var(--whatsapp-green)" size="30px" />
                                    </td>
                                    <td>WhatsApp</td>
                                    <td>(12) 99999-9999</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FaPhone color="var(--call-green)" size="30px" />
                                    </td>
                                    <td>Telefone</td>
                                    <td>(12) 0000-0000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FaAt color="var(--email-black)" size="30px" />
                                    </td>
                                    <td>E-mail</td>
                                    <td>contato@XPTO.com</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FaMap color="var(--dark-blue)" size="30px" />
                                    </td>
                                    <td>Endereço</td>
                                    <td>Quadra 108 Sul Alameda 8, 330 Bairro: Plano Diretor Sul<br />Palmas - TO , CEP: 77020-108</td>
                                </tr>
                            </tbody>
                        </table>
                    </ContactChannels>
                </RightSide>

            </Content>
            <Footer />
        </ContactContainer>
    )
}
export default Contact;