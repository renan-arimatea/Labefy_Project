import React, {useState} from "react";
import {Link} from "react-router-dom"
import { NavbarMenu } from "./HeaderStyled";
import labefy from "../../images/labefy-logo-name.png"

const Header =() => {

    const [classOn, setClassOn] = useState(false);

    return (
        <NavbarMenu>
            <Link to="/"><img src={labefy} alt="logo labefy"/></Link>
            <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}/>
            <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
                <nav className="list">
                    <ul className="listItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/playlists">Minha Playlist</Link></li>
                        <li><Link to="/aboutus">Sobre nós</Link></li>
                    </ul>
                </nav>
        </NavbarMenu>
    )
}

export default Header
