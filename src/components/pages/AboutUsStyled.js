import styled from "styled-components"

export const Main = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    padding: 3em;
    margin: auto;

    background-image: url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        background-color: #000;
        background-image: url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'});
        background-position: center;
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1 {
        font-size: 2em;
        color: #FFF;
        text-shadow: black 0.1em 0.1em 0.2em;
        text-align: center;
        justify-content: center;
        padding-bottom: 1em;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            font-size: 1.5em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            font-size: 2.6em;
        }
    }

    h1 span {
        color: #7AFFA3;
        padding: 0 0.2em;
        background-color: #000000;

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
`

export const Container_1 = styled.div`

    display: flex;
    text-align: center;
    width: 90vw;
    background-color: #000;
    color: #fff;
    padding: .5em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        width: 100vw;
        background-color: #000;
        color: #fff;
        padding: .5em;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: flex;
        width: 100vw;
        background-color: #000;
        color: #fff;
        padding: .5em;
    }

    @media screen and (min-device-width : 1921px) {
        display: flex;
        width: 60vw;
        background-color: #000;
        color: #fff;
        padding: .5em;
    }


    img {
        height: 700px;
        width: 30%;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            height: 300px;
            width: 50%;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            height: 600px;
            width: 45%;
        }
    }

    img:hover {
        transform: scale(1.1);
        transition: .4s;
        border-radius: 3em;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 100vw;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: 100vw;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }

        iconContent_1 img {
            width: 300px;
            height: 215px;
            align-items: center;
            justify-content: center;
            padding: 1em;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 120px;
                height: 90px;
                align-items: center;
                justify-content: center;
                padding: 1em;
            }

            @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
                width: 240px;
                height: 180px;
                align-items: center;
                justify-content: center;
                padding: 1em;
            }
        }

        iconContent_1 img:hover {
            transform: scale(1.1);
            transition: .3s;
        }

        p {
            margin-top: 1em;
            text-align: center;
            padding: 2em;
            width: 70%;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 100%;
                padding: .1em;
                font-size: .5em;
            }

            @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
                width: 100%;
                padding: .1em;
                font-size: .8em;
            }
        }

        p span {
            color: #7AFFA2;
            padding: 0 0.2em;
        }
    }            
`

export const Container_2 = styled.div`

    display: flex;
    flex-direction: row-reverse;
    text-align: center;
    width: 90vw;
    background-color: #000;
    color: #fff;
    padding: .5em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: row-reverse;
        width: 100vw;
        background-color: #000;
        color: #fff;
        padding: .5em;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: flex;
        flex-direction: row-reverse;
        width: 100vw;
        background-color: #000;
        color: #fff;
        padding: .5em;
    }

    @media screen and (min-device-width : 1921px) {
        display: flex;
        width: 60vw;
        background-color: #000;
        color: #fff;
        padding: .5em;
    }
    
    img {
        height: 700px;
        width: 30%;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            height: 300px;
            width: 50%;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            height: 600px;
            width: 45%;
        }
    }

    img:hover {
        transform: scale(1.1);
        transition: .4s;
        border-radius: 3em;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 100vw;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
            width: 100vw;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }

        iconContent_2 img {
            width: 300px;
            height: 215px;
            align-items: center;
            justify-content: center;
            padding: 1em;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 120px;
                height: 90px;
                align-items: center;
                justify-content: center;
                padding: 1em;
            }

            @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
                width: 240px;
                height: 180px;
                align-items: center;
                justify-content: center;
                padding: 1em;
            }
        }

        iconContent_2 img:hover {
            transform: scale(1.1);
            transition: .3s;
        }

        p {
            margin-top: 1em;
            text-align: center;
            padding: 2em;
            width: 70%;

            @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
                width: 100%;
                padding: .1em;
                font-size: .5em;
            }

            @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
                width: 100%;
                padding: .1em;
                font-size: .8em;
            }
        }

        p span {
            color: #7AFFA2;
            padding: 0 0.2em;
        }
    }           
       
`
