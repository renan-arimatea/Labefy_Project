import React from "react";
import axios from "axios";
import { CardPlaylists, PlaylistContent } from "./ShowPlaylistsStyled";
import EditPlaylist from "./EditPlaylist"
import { axiosConfig, baseUrl } from "../constants/urls";


class ShowPlaylists extends React.Component {

    state = {
        nome: '',
        playlists: [],
        detalhe: false,
        playlistSelecionada: '',
    }

    renderizaDetalhe = (mostraPlaylist) => {
        this.setState({detalhe: true, playlistSelecionada:  mostraPlaylist})
    }

    renderizaPaginaPlaylist = () => {
        this.setState({detalhe: false})
    }

    componentDidMount() {
        this.pegaPlaylist()
    }

    pegaPlaylist = () => {

        axios
        .get(baseUrl, axiosConfig)

        .then(response => {
            this.setState({playlists: response.data.result.list})
        })
        
        .catch(err => {
            console.log(err)
        })
    }

    deletaPlaylist = (idPlaylist) => {

        axios
        .delete(`${baseUrl}/${idPlaylist}`, axiosConfig)

        .then(res => {
            this.pegaPlaylist()

        }).catch(err => {
            alert("Algo deu errado! Tente novamente.")
            console.log(err)
        });
    }


    render() {
        
        if (this.state.detalhe) {

            return (
                <EditPlaylist
                    renderizaPaginaPlaylist={this.renderizaPaginaPlaylist}
                    playlistSelecionada={this.state.playlistSelecionada}
                />
            )
          }

        const AllPlaylists = this.state.playlists.map((playlist, i) => {

            return (
                <CardPlaylists>
                    <div key={playlist.id} onClick={() => this.renderizaDetalhe(playlist)}>
                        {playlist.name}
                    </div>

                    <button className="btn_Delete" onClick={() => {if(window.confirm('Deseja deletar esta playlist?')) {this.deletaPlaylist(playlist.id)}}}>x</button>
                </CardPlaylists>
            )
        })

        return (
            <PlaylistContent>
                   <h3>Minhas <span>playlists</span></h3>
                    {AllPlaylists}
                    <button onClick={this.props.irParaCadastro}>+ Adicionar</button>
                </PlaylistContent> 
        )
    }
}

export default ShowPlaylists
