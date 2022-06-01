import React, {useState} from "react";
import {Link} from "react-router-dom"
import {HomeContainer, VideoContent, VideoDescription} from "./HomeStyled"



const Home = () => {

    const [youtubeID] = useState('xAjn7o8mFSo')

    return (
        <HomeContainer>
            <h1>Bem vindo ao <span>Labefy</span></h1>

            <p>Playlists selecionadas e personalizadas.</p>

            <VideoContent>
                <iframe className='video'
                    title='Youtube player'
                    frameborder='0'
                    width="60%"
                    height="560"
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                </iframe>
            </VideoContent>
            <Link to="/playlists"><button>Começar</button></Link>
        </HomeContainer>
    )
}

export default Home
