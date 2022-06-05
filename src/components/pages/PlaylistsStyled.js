import styled from "styled-components";


export const PlaylistContent = styled.div`

background-image: url("https://images.unsplash.com/photo-1504509546545-e000b4a62425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
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
