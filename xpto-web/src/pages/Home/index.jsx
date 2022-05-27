import React from "react";
import Navbar from "../../components/Navbar/index.jsx";
import { SocialMediaContainer, Block, BlockContainer, BudgetTitle, Company, CompanyContainer, Content, HomeContainer, LeftSide, ObsContainer, PlayerContainer, RightSide } from "./styles.js";
import Player from "./components/Player.jsx";
import { FaCheck, FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Home = () => {

    return (
        <HomeContainer>
            <Navbar />
            <Content>
                <LeftSide>
                    <PlayerContainer>
                        <Player url='https://youtu.be/1c_W_4cNLn0' />
                    </PlayerContainer>
                    <p>Apresentação da Empresa</p>
                    <h6>Fique por dentro de tudo em nossas redes sociais:</h6>
                    <SocialMediaContainer>
                        <a href="/">
                            <FaYoutube color="var(--dark-green)" size="30px" />
                        </a>
                        <a href="/">
                            <FaFacebook color="var(--dark-green)" size="30px" />
                        </a>
                        <a href="/">
                            <FaInstagram color="var(--dark-green)" size="30px" />
                        </a>
                        <a href="/">
                            <FaLinkedin color="var(--dark-green)" size="30px" />
                        </a>
                    </SocialMediaContainer>
                </LeftSide>

                <RightSide>
                    <BudgetTitle>
                        A <b>CONSULTORIA</b> que Você Mais Precisa
                    </BudgetTitle>
                    <hr />
                    <BlockContainer>
                        <Block>
                            <div className="check-container">
                               <FaCheck color="var(--whatsapp-green)" size="15px" /> 
                            </div>
                            <div className="desc-container">
                                Análise de processos
                            </div>
                            
                        </Block>
                        <Block>
                            <div className="check-container">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                            </div>
                            <div className="desc-container">
                                Dedução e solução ágil
                            </div>
                        </Block>
                        <Block>
                            <div className="check-container">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                            </div>
                            <div className="desc-container">
                                Aplicabilidade geral 
                            </div>
                        </Block>
                    </BlockContainer>
                    <hr />
                    <ul>
                        <li>Atuação em Todo o Vale do Paraíba</li>
                        <li>+20 Anos de Atendimento Full Time</li>
                    </ul>
                    <h6>Mais de 10 empresas da região estão com nossa acessoria ativa</h6>
                    <CompanyContainer>
                        <Company src={`${process.env.PUBLIC_URL}/empresas_ribbon.png`}
                         />
                    </CompanyContainer>
                    <ObsContainer>
                    <p>Para quaisquer dúvidas a respeito do contrato, acesse nossa página de orçamentos para sanar todas as eventuais questões.</p>
                    </ObsContainer>
                </RightSide>
            </Content>

        </HomeContainer>
    )
}
export default Home;