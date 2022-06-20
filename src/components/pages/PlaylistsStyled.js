import styled from "styled-components";


export const PlaylistContent = styled.div`

background-image: url(${process.env.PUBLIC_URL + '/imgs/playlistBackground.jpg'});
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

padding: 5em 4em;
width: 100%;
min-height: 100vh;

font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: #000000;
color: #FFF;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100vw;
    font-size: .7em;
    padding: 5em 2em;
    align-items: center;
    text-align: center;
}

@media screen and (min-device-width : 481px) and (max-device-width : 850px) {
    width: 100vw;
    font-size: 1.5em;
    padding:5em 2em;
    align-items: center;
    text-align: center;
}
`
