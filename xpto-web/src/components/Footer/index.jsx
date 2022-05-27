import React from 'react'
import { SocialMediaContainer, Column, Content, SocialColumn, PoweredByContainer, FooterContainer, Logo } from './styles'
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <Content>
            <Column>
                    <Logo src={`${process.env.PUBLIC_URL}/logo_xpto_branco.png`}
                        sizes="(media-condition) width" />
                </Column>
                <Column>
                    <h4>Empresa</h4>
                    <h6>Carreira<br />Notícias<br />Sustentabilidade</h6>
                </Column>
                <Column>
                    <h4>Produtos</h4>
                    <h6>Plataforma de Análise<br />Plataforma Integradora</h6>
                </Column>
                <Column>
                    <h4>Serviços</h4>
                    <h6>Matriz de Rastreabilidade<br />Dedução e Aplicação<br />Acessoria Extendida</h6>
                </Column>
                <SocialColumn>
                    <h4>Siga-nos</h4>
                    <SocialMediaContainer>
                    <a href="/">
                            <FaYoutube color="var(--green-gray)" size="30px" />
                        </a>
                        <a href="/">
                            <FaFacebook color="var(--green-gray)" size="30px" />
                        </a>
                        <a href="/">
                            <FaInstagram color="var(--green-gray)" size="30px" />
                        </a>
                        <a href="/">
                            <FaLinkedin color="var(--green-gray)" size="30px" />
                        </a>
                    </SocialMediaContainer>
                </SocialColumn>
            </Content>
            <PoweredByContainer>
                Desenvolvido por: Fabricio Cursino
            </PoweredByContainer>
        </FooterContainer>
    )
}
export default Footer;