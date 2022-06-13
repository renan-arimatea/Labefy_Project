import React from 'react'
import axios from 'axios'
import { axiosConfig, baseUrl } from '../constants/urls'
import {MusicContainer, MusicCard, PlaylistDiv, Player} from "./EditPlaylistStyled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause, faForwardFast, faBackwardFast} from '@fortawesome/free-solid-svg-icons'
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

        document.querySelector('.btn_play').addEventListener('click', this.playMusica);

        music.play()

        document.querySelector('.btn_pause').style.display ='block'
        document.querySelector('.btn_play').style.display ='none'
        
    }

    pausarMusica = () => {

        let music = document.querySelector('audio');

        document.querySelector('.btn_pause').addEventListener('click', this.pausarMusica);

        music.pause()

        document.querySelector('.btn_pause').style.display ='none'
        document.querySelector('.btn_play').style.display ='block'
        
    }

    pularMusica = () => {

        let music = document.querySelector('audio');

        document.querySelector('.btn_pause').addEventListener('click', this.pausarMusica);

        music.pause()

        document.querySelector('.btn_pause').style.display ='none'
        document.querySelector('.btn_play').style.display ='block'
        
    }

    voltarMusica = () => {

        let music = document.querySelector('audio');

        document.querySelector('.btn_pause').addEventListener('click', this.pausarMusica);

        music.pause()

        document.querySelector('.btn_pause').style.display ='none'
        document.querySelector('.btn_play').style.display ='block'
        
    }

  render() {

    const playlistRenderizada = this.state.showPlaylist.map((musica, i) => {

        return (

            <MusicCard key={musica.id}>
                <p>{musica.name}</p>

                <p>{musica.artist}</p>

                <button onClick={() => {if(window.confirm('Deletar Música?')) {this.deletaMusica(musica.id)}}}> x </button>

                <audio src={musica.url} ref="audio_tag" type="audio/ogg" controls=""></audio>
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
                <FontAwesomeIcon className='btn btn_previous' icon={faBackwardFast} onClick={this.tocarMusica}/>
                <FontAwesomeIcon className='btn btn_play' icon={faCirclePlay} onClick={this.tocarMusica}/>
                <FontAwesomeIcon className='btn btn_pause' icon={faCirclePause} onClick={this.pausarMusica}/>
                <FontAwesomeIcon className='btn btn_next' icon={faForwardFast} onClick={this.pausarMusica}/>
            </Player>

            <button onClick={this.props.renderizaPaginaPlaylist}>Voltar</button>
          
        </MusicContainer>
    )
}
}

export default EditPlaylist
