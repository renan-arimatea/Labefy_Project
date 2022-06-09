import React from "react";
import { PlaylistContent } from "./PlaylistsStyled";
import CreatePlaylist from "../form/CreatePlaylist";
import ShowPlaylists from "../form/ShowPlaylists";

class Playlists extends React.Component {

    state = {
        tela: "cadastro"
    }

    escolheTela = () => {

        switch(this.state.tela) {

            case "cadastro":
                return <CreatePlaylist irParaLista={this.irParaLista}/>

            case "lista":
                return <ShowPlaylists irParaCadastro={this.irParaCadastro}/>

            default:
              return <p>Ops, algo deu errado...</p> 
        }
    }

    irParaCadastro = () => {
        this.setState({tela: "cadastro"})
    }

    irParaLista = () => {
        this.setState({tela: "lista"})
    }

    render () {
        return (
            <PlaylistContent>
               {this.escolheTela()}
            </PlaylistContent>
        )
    }
}

export default Playlists
