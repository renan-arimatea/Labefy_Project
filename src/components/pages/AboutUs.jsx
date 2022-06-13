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

                    <div>
                        <iconContent_1><img src={icon_3} alt="icone de albuns" /></iconContent_1>
                        <p>O <span>Labefy</span> lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ducimus adipisci reiciendis nam atque ipsam, magni hic! At tempora, quia odit asperiores consectetur laborum consequatur nostrum voluptates commodi iusto sapiente! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi, voluptatibus, temporibus ea quidem numquam ab perferendis ducimus amet ratione maiores veritatis esse similique corporis deleniti, qui explicabo sed officiis? Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </Container_1>

                <br/>

                <Container_2>
                    <img src="https://images.unsplash.com/photo-1557315360-6a350ab4eccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="mulher com headphones" />

                    <div>
                        <iconContent_2><img src={icon_2} alt="icone de microfone" /></iconContent_2>
                        <p>O <span>Labefy</span> lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum alias consequuntur aperiam libero ratione est perspiciatis, tenetur sit. Quia ad adipisci impedit expedita at voluptatem consectetur aliquam porro. Maiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates tenetur ullam earum harum? Nostrum, quis omnis eaque molestias modi ab minima doloremque debitis vitae, laborum exercitationem quisquam rerum, illum assumenda?</p>
                    </div>
                </Container_2>
            </Main>
        )
    }
}

export default AboutUs
