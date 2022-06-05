import React from "react";
import {Link} from "react-router-dom"
import {Box1, Box2, Box3, HomeContainer, MainContent, LogoLabefy, Banner_principal, Box4 } from "./HomeStyled"
import labefy_white from "../../images/labefy-black_logo.png"
import Woman_Headphones from "../../images/headphones.jpg"
import banner from "../../images/banner.jpg"
import banner1 from "../../images/BannerDesktop.png"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import baackgroundVideo from "../../videos/Labefy.mp4"


const Home = () => {
    return (
        <HomeContainer>

            <LogoLabefy>
                <img src={labefy_white} alt="" />
            </LogoLabefy>

            <h1>Playlists selecionadas e <span>personalizadas</span>.</h1>

            <Link to="/playlists"><button>Começar</button></Link>

            <Banner_principal>
                <img src={banner1} alt="" />
            </Banner_principal>

            <video autoPlay loop  muted id="video" controls="play">
                <source src={baackgroundVideo} type="video/mp4"/>
            </video>
            
            <h2>Até onde suas playlists podem chegar <span>?</span></h2>

            <MainContent>
                <Box1>
                    <p>
                        Deixe as suas playlists envolver você com as músicas que você mais gosta. Crie momentos e experiências personalizadas.
                    </p>
                    <img src={Woman_Headphones} alt="mulher escutando música em seu headphone" />
                </Box1>

                <Box2>
                    <p>
                        Descubra novas músicas com sugestões baseadas no que você já gosta de escutar. Desfrute de bandas favoritas e novos artistas.
                    </p>
                    <img src={banner2} alt="artista musical envolvido em um cenário com fumaça rosa" />
                </Box2>

                <Box3>
                    <p>
                        Você está no controle: Confira as escolhas dos nossos editores em playlists selecionadas e personalizadas.
                    </p>
                    <img src={banner} alt="artista musical envolvido em um cenário com fumaça rosa" />
                </Box3>

                <Box4>
                <p>
                    Cante, componha, crie experiências: toque uma música de qualquer artista e gênero, ou uma que combine com seu humor.
                </p>
                <img src={banner3} alt="artista musical envolvido em um cenário com fumaça rosa" />
                </Box4>
            </MainContent>
        </HomeContainer>
    )
}

export default Home
