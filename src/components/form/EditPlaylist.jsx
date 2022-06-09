import React from 'react'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player'
import { axiosConfig, baseUrl } from '../constants/urls'
import {MusicContainer, MusicCard, PlaylistDiv} from "./EditPlaylistStyled"


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
    

  render() {

    const playlistRenderizada = this.state.showPlaylist.map((musica, i) => {

        return (

            <MusicCard key={musica.id}>

                <p>{musica.name}</p>

                <p>{musica.artist}</p>

                <audio src={musica.url} ref="audio_tag" controls></audio>
                

                <button onClick={() => {if(window.confirm('Deletar Música?')) {this.deletaMusica(musica.id)}}}> x </button>

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

            <button onClick={this.props.renderizaPaginaPlaylist}>Voltar</button>
          
        </MusicContainer>
    )
  }
}

export default EditPlaylist
