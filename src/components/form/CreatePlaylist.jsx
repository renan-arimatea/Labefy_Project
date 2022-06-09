import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../constants/urls";
import { PlaylistMain } from "./CreatePlaylistStyled";


class CreatePlaylist extends React.Component {

    state = {
        playlist: "",
    }

    handlePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    }

    criaPlaylist = (e) => {

       e.preventDefault()

        const body = {
            name: this.state.playlist,
        }

        axios.post(baseUrl, body, axiosConfig)

        .then(() => {
            alert("Playlist criada com sucesso")
        })

        .catch((err) => {
            alert("Algo deu errado. Tente novamente!")
        })

        this.setState({playlist: ""})

    }

    render () {
        return (
            <PlaylistMain>
                <div className="playlist_container">

                    <h3>Comece criando as suas <span>playlists</span>.</h3>

                    <input
                        placeholder="Nome da Playlist..."
                        type="text"
                        value={this.state.playlist}
                        onChange={this.handlePlaylist}
                    />

                    <button onClick={this.criaPlaylist}>Criar Playlist</button>
                </div>

                <p>Você também pode <span>acessar</span> as playlists já criadas.</p>

                <button onClick={this.props.irParaLista}>Minhas Playlists</button>
            </PlaylistMain>
            
        )
    }
}

export default CreatePlaylist
