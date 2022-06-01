import React from "react";
import { Main, Container_1, Container_2 } from "./AboutUsStyled";
import icon_2 from "../../images/icon_2.webp"
import icon_3 from "../../images/icon_3.webp"


class AboutUs extends React.Component {
    render () {
        return (
            <Main>
                <h1>A <span>música</span> move o mundo</h1>
                <Container_1>
                    <img src="https://images.unsplash.com/photo-1525183480399-e8706926adac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profissional mixando uma faixa de música" />

                    <iconContent_1><img src={icon_3} alt="icone de microfone" /></iconContent_1>

                    <p>O <span>Labefy</span> apoia artistas oferecendo ferramentas para criar, lançar e medir o alcance das músicas em todo o mundo. Descubra diversas maneiras de promover conteúdo no Labefy, como MusicKit, feeds RSS, widgets, diretrizes de marca, artes para ícones e mais.</p>

                </Container_1>

                <br/>

                <Container_2>
                    <img src="https://images.unsplash.com/photo-1557315360-6a350ab4eccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="mulher com headphones" />

                    <iconContent_2><img src={icon_2} alt="icone de microfone" /></iconContent_2>
                
                    <p>O <span>Labefy</span> é um serviço de streaming em que você pode ouvir mais de 90 milhões de músicas. Ele tem recursos incríveis para você baixar suas faixas favoritas e ouvir sem conexão, ver as letras em tempo real, escutar em todos os seus aparelhos, receber recomendações personalizadas de novas músicas, playlists feitas por nossos editores e muito mais. Além de tudo isso, você tem acesso a conteúdo original e exclusivo.</p>
                </Container_2>
            </Main>
        )
    }
}

export default AboutUs
