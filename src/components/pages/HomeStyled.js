import styled from "styled-components"

export const HomeContainer = styled.div`
    
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: none;
padding: 5em 4em;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-image: url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;

    h1 {
        font-size: 3em;
        margin-top: 0;
        margin-bottom: .5em;
        color: #F6F6F6;
        text-shadow: black 0.1em 0.1em 0.2em;
    }

    h1 span, h2 span {
        color: #7AFFA3;

        -webkit-animation-name: blinker;
            -webkit-animation-duration: 1s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-name: blinker;
            -moz-animation-duration: 1s;
            -moz-animation-timing-function: linear;
            -moz-animation-iteration-count: infinite;
            animation-name: blinker;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            @-moz-keyframes blinker {
                0% {
                    opacity: 1.0;
                }
                50% {
                    opacity: 0.0;
                }
                100% {
                    opacity: 1.0;
                }
            }

            @-webkit-keyframes blinker {
                0% {
                    opacity: 1.0;
                }
                50% {
                    opacity: 0.0;
                }
                100% {
                    opacity: 1.0;
                }
            }

            @keyframes blinker {
                0% {
                    opacity: 1.0;
                }
                50% {
                    opacity: 0.0;
                }
                100% {
                    opacity: 1.0;
                }
            }
    }

    h2 {
        font-size: 3em;
        color: #F6F6F6;
        text-shadow: black 0.1em 0.1em 0.2em;
        margin: 2em 0;
    }


    p {
        margin-bottom: 1.5em;
        background-color: #222;
        padding: .5em;
        color: #7AFFA2;
        border-radius: 0 1em;
    }

    button {
        background-color: black;
        color: #FFF; text-shadow: black 0.1em 0.1em 0.2em;
        font-size: 1.2em;
        font-weight: bold;
        margin: 1em;
        padding: 1em 4em;
        border: 1px solid #7AFFA2;
        border-radius: 1.5em;
    }

    button a {
        text-decoration: none;
        color: #FFF;
        
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.5s;
    }

    video {
        height: 600px;
        width: min-content;
        cursor: pointer;
        margin-top: 2em;
    }
`

export const LogoLabefy = styled.div`

    img {
        width: 100px;

    }

    img:hover {
        cursor: pointer;
        animation: treme 0.2s;
        animation-iteration-count: 4;
    }

    @keyframes treme {
        0% {margin-left: 0;}
        25% {margin-left: 5px;}
        50% {margin-left: 0;}
        75% {margin-left: -5px;}
        100% {margin-left: 0;}
    }
`

export const Banner_principal = styled.div`

width: 100%;

    img {
       height: 100%;
       width: 100%;
       margin: 2em 0;
    }
`

export const MainContent = styled.div`

display: flex;
`

export const Box1 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
border-radius: 2em;

max-width: 20em;

    img {
        width: 300px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        border: 1px solid green;
        background-color: black;
        margin-bottom: 0;
    }

`

export const Box2 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
max-width: 20em;

    img {
        width: 300px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        background-color: black;
        margin-bottom: 0;
        border: 1px solid green
    }

`
export const Box3 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
max-width: 20em;

    img {
        width: 300px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        background-color: black;
        border: 1px solid green;
        margin-bottom: 0
    }

`
