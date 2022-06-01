import React from "react";
import {Link} from "react-router-dom"
import { NavbarMenu } from "./HeaderStyled";
import labefy from "../../images/labefy.png"

class Header extends React.Component {
    render () {
        return (
            <NavbarMenu>
                <Link to="/"><img src={labefy} alt="logo labefy"/></Link>
                <nav>
                   <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/playlists">Minha Playlist</Link></li>
                       <li><Link to="/aboutus">Sobre nós</Link></li>
                   </ul>
                </nav>
            </NavbarMenu>
        )
    }
}

export default Header
