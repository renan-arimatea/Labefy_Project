import styled from "styled-components";

export const Main = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    padding: 5em;
    margin: auto;

    background-image: url(${process.env.PUBLIC_URL + '/imgs/404-ErrorPage.jpg'});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    h1 {
        font-size: 2.5em;
        margin-bottom: .5em;
        color: #FFFF;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 2em;
        text-align: center;
        padding: 1em;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        font-size: 2.5em;
        text-align: center;
        padding: 1em;
    }
}

    p {
        margin-bottom: 1.5em;
        background-color: #222;
        padding: .5em;
        color: #7AFFA2;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: .8em;
        text-align: center;
        padding: 1em;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        font-size: 1.5em;
        text-align: center;
        padding: 1em;
    }
        
    }

    button {
    background-color: black;
    color: #FFF; text-shadow: black 0.1em 0.1em 0.2em;
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 4em;
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
`
