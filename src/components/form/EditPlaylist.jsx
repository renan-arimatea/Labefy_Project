import React from 'react'
import axios from 'axios'
import { axiosConfig, baseUrl } from '../constants/urls'
import {MusicContainer, MusicCard, PlaylistDiv, Player, MusicData, MusicPlayer, MusicProgres} from "./EditPlaylistStyled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause, faForwardSetp, faBackwardStep, faForwardStep} from '@fortawesome/free-solid-svg-icons'
import { click } from '@testing-library/user-event/dist/click'

 class EditPlaylist extends React.Component {


    state = {

        showPlaylist: [],
        name: '', 
        artist: '',
        url: '',
    }

    componentDidMount = () => {
        this.abrePlaylist()
    }
    
    abrePlaylist = () => {

        axios
        .get(`${baseUrl}/${this.props.playlistSelecionada.id}/tracks`, axiosConfig)

        .then((res) => {
            this.setState({showPlaylist: res.data.result.tracks})
        })

        .catch((err) => { 
            alert("Algo deu errado. Tente novamente!")
        })
    }

    deletaMusica = (musica) => {

        axios

        .delete(`${baseUrl}/${this.props.playlistSelecionada.id}/tracks/${musica}`, axiosConfig)

        .then(() => this.abrePlaylist())

        .catch(() => alert("Algo deu errado. Tente novamente!"))
    }

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    criaMusica = (e) => {

        e.preventDefault()

        const body = {

            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        }

        axios

        .post(`${baseUrl}/${this.props.playlistSelecionada.id}/tracks`, body, axiosConfig)

        .then(() => {
            this.abrePlaylist();
        })

        .catch((err) => {
            alert("Algo deu errado. Tente novamente!");
            console.log(err);
        })

        this.setState({
            name: "",
            artist: "",
            url: ""
        })

    }


    tocarMusica = () => {

        let music = document.querySelector('audio');

        document.querySelector('.btn_play').addEventListener('click', this.tocarMusica);

        music.play()

        document.querySelector('.btn_play').style.display ='none'
        document.querySelector('.btn_pause').style.display ='block'

    }

       
    pausarMusica = () => {

        let music = document.querySelector('audio');

        document.querySelector('.btn_pause').addEventListener('click', this.pausarMusica);

        music.pause()

        document.querySelector('.btn_pause').style.display ='none'
        document.querySelector('.btn_play').style.display ='block'
        
    }


    // pularMusica = () => {


    //     document.querySelector('.btn_pause').addEventListener('click', this.pularMusica);

    //     this.music.play()

    //     document.querySelector('.btn_pause').style.display ='none'
    //     document.querySelector('.btn_play').style.display ='block'
        
    // }

    // voltarMusica = () => {

    //     document.querySelector('.btn_pause').addEventListener('click', this.voltarMusica);

    //     this.music.pause()

    //     document.querySelector('.btn_pause').style.display ='none'
    //     document.querySelector('.btn_play').style.display ='block'
        
    // }

    atualizarBarra = () => {

        let music = document.querySelector('audio');

        let bar = document.querySelector('progress')

        music.addEventListener('timeupdate', this.atualizarBarra)

        bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'

    }

    mediaPlayer = () => {
        this.tocarMusica()
        this.atualizarBarra()
    }

  render() {


    const playlistRenderizada = this.state.showPlaylist.map((musica, i) => {

        return (

            <MusicCard key={musica.id}>
                <p>{musica.name}</p>

                <p>{musica.artist}</p>

                <button onClick={() => {if(window.confirm('Deletar Música?')) {this.deletaMusica(musica.id)}}}> x </button>

                <audio src={musica.url} ref="audio_tag" type="audio/mp3" controls=""></audio>
            </MusicCard>
        )
    })


    return (

        <MusicContainer>
            <input
                type="text"
                placeholder="Nome da Música"
                name='name'
                value={this.state.name}
                onChange={this.changeInputValues} 
            />

            <input
                type="text"
                placeholder="Nome do Artista"
                name='artist'
                value={this.state.artist}
                onChange={this.changeInputValues} 
            />
            
            <input
                type="text"
                placeholder="Url"
                name='url'
                value={this.state.url}
                onChange={this.changeInputValues} 
            />

            <br/>
            
            <button onClick={this.criaMusica}>Adicionar Música</button>

            <br/>

            <PlaylistDiv>{playlistRenderizada}</PlaylistDiv>

            <Player>
                <MusicData >
                    <p>Nome da música</p>
                    <i>Artista</i>
                </MusicData>
                <MusicProgres>
                    <div className='bar'>
                        <progress  value="0" max="1"></progress>
                        <div className='dot'></div>
                    </div>
                    <div className='time'>
                        <p className='start'>0:00</p>
                        <p className='end'>3:40</p>
                    </div>
                </MusicProgres>
                <MusicPlayer>
                    <FontAwesomeIcon className='btn btn_arrow' icon={faBackwardStep}/>
                    <FontAwesomeIcon className='btn btn_play' icon={faCirclePlay} onClick={this.mediaPlayer}/>
                    <FontAwesomeIcon className='btn btn_pause' icon={faCirclePause} onClick={this.pausarMusica}/>
                    <FontAwesomeIcon className='btn btn_arrow' icon={faForwardStep}/>
                </MusicPlayer>
            </Player>

            <button onClick={this.props.renderizaPaginaPlaylist}>Voltar</button>
        </MusicContainer>
    )
}
}

export default EditPlaylist
