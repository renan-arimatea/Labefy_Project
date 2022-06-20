import React from 'react'
import axios from 'axios'
import { axiosConfig, baseUrl } from '../constants/urls'
import {MusicContainer, MusicCard, PlaylistDiv, Player, MusicData, MusicPlayer, MusicProgres} from "./EditPlaylistStyled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep} from '@fortawesome/free-solid-svg-icons'

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


    pularMusica = () => {

        let indexMusic = 0
       
        document.querySelector('.forward').addEventListener('click', () => {
            indexMusic++
            this.renderizarMusica(indexMusic)
            
        });

    }

    voltarMusica = () => {

        let indexMusic = 0

        document.querySelector('.backward').addEventListener('click', () => {
            indexMusic--
            this.renderizarMusica(indexMusic)
        });
        
    }

    renderizarMusica = (index) => {

        let music = document.querySelector('audio');
        let musicName = document.querySelector('.description p')
        let artistName = document.querySelector('.description i')

        music.setAttribute('src', this.state[index].url)
        music.addEventListener('loadeddata', () => {
            musicName.textContent = this.state[index].name
            artistName.textContent = this.state[index].artist
            this.musicDuration.textContent = this.segundosParaMinutos(Math.floor(music.duration))
        })
    }


    atualizarBarra = () => {

        let music = document.querySelector('audio');
        let bar = document.querySelector('progress')

        music.addEventListener('timeupdate', this.atualizarBarra)
        bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'

        let musicTime = document.querySelector('.start')
        musicTime.textContent = this.segundosParaMinutos (Math.floor(music.currentTime))

        let musicDuration = document.querySelector('.end')
        musicDuration.textContent = this.segundosParaMinutos(Math.floor(music.duration))
    }

    segundosParaMinutos = (segundos) => {
        let minuteArea = Math.floor(segundos / 60)
        let secondsArea = segundos % 60
        if (secondsArea < 10) {
            secondsArea = '0' + secondsArea
        }

        return minuteArea+':'+secondsArea
    }

    mediaPlayer = () => {
        this.tocarMusica()
        this.atualizarBarra()
        this.renderizarMusica(this.indexMusic)
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
                <MusicData className='description'>
                    <p>Nome da música</p>
                    <i>Artista</i>
                </MusicData>
                <MusicProgres>
                    <div className='bar'>
                        <progress  value="0" max="1"></progress>
                        <div className='dot'></div>
                    </div>
                    <div className='time'>
                        <p className='start'></p>
                        <p className='end'></p>
                    </div>
                </MusicProgres>
                <MusicPlayer>
                    <FontAwesomeIcon className='btn btn_arrow backward' icon={faBackwardStep} onClick={this.voltarMusica}/>
                    <FontAwesomeIcon className='btn btn_play' icon={faCirclePlay} onClick={this.mediaPlayer}/>
                    <FontAwesomeIcon className='btn btn_pause' icon={faCirclePause} onClick={this.pausarMusica}/>
                    <FontAwesomeIcon className='btn btn_arrow forward' icon={faForwardStep} onClick={this.pularMusica}/>
                </MusicPlayer>
            </Player>

            <button onClick={this.props.renderizaPaginaPlaylist}>Voltar</button>
        </MusicContainer>
    )
}
}

export default EditPlaylist
