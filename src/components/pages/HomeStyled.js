import styled from "styled-components"

export const HomeContainer = styled.div`
    
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: none;
padding: 5em 4em;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-image: url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80'});
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        background-color: #000;
        background-image:url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1507246249828-b7a6c99f2ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'});
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1 {
        font-size: 3em;
        margin-top: 0;
        margin-bottom: .5em;
        color: #F6F6F6;
        text-shadow: black 0.1em 0.1em 0.2em;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 100vw;
            font-size: 2em;
            text-align: center;
            padding: .2em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: 100vw;
            font-size: 3em;
            text-align: center;
            padding: .2em;
        }

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

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 100vw;
            font-size: 2em;
            text-align: center;
            padding: .2em;
            margin: 1em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: 100vw;
            font-size: 3em;
            text-align: center;
            padding: .2em;
            margin: 1em;
        }
    }


    p {
        margin-bottom: 1.5em;
        background-color: #222;
        padding: .5em;
        color: #7AFFA2;
        font-size: .8em;
        border-radius: 0 1em;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            font-size: .7em;
            padding: 1em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            font-size: .8em;
            padding: 1em;
        }

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

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: auto;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: auto;
        }
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

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 100vw;
            height: auto;
            margin-top: .2em;
            padding:.1em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: 100vw;
            height: auto;
            margin-top: .2em;
            padding:.1em;
        }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100vw;
        padding: 2em;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        width: 100vw;
        padding: 2em;
    }
`

export const LogoLabefy = styled.div`

    img {
        width: 100px;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 80px;
            margin: .1em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: 100px;
            margin: .1em;
        }
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

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100vw;
        height: 25vh;
        margin-bottom: 3em;
        padding:.2em;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        width: 100vw;
        height: 30vh;
        margin-bottom: 3em;
        padding:.2em;
    }

    @media screen and (min-device-width : 1921px) {
        width: 50vw;
        height: 60vh;
        margin-bottom: 3em;
        padding:.2em;
    }
`

export const MainContent = styled.div`

display: flex;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    
}

@media screen and (min-device-width : 481px) and (max-device-width : 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    align-items: center;
}

`

export const Box1 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
border-radius: 2em;

max-width: 20em;

    img {
        width: 280px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        border: 1px solid green;
        background-color: black;
        margin-bottom: 0;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: block;
        width: 100vw;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: block;
        width: auto;
    }

`

export const Box2 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
max-width: 20em;

    img {
        width: 280px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        background-color: black;
        margin-bottom: 0;
        border: 1px solid green
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: block;
        width: 100vw;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: block;
        width: auto;
    }

`
export const Box3 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
max-width: 20em;

    img {
        width: 280px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        background-color: black;
        border: 1px solid green;
        margin-bottom: 0
    }
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: block;
        width: 100vw;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: block;
        width: auto;
    }
    
`

export const Box4 = styled.div`

display: block;
margin: 1em;
align-items: center;
text-align: center;
max-width: 20em;

    img {
        width: 280px;
        border-radius: 0 0 1em 1em;
    }

    p {
        color: #F6F6F6;
        background-color: black;
        border: 1px solid green;
        margin-bottom: 0
    }
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: block;
        width: 100vw;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: block;
        width: auto;
    }

`
