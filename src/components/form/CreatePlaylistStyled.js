import styled from "styled-components";

export const PlaylistMain = styled.div`

background: rgba(0, 0, 0, 0.8);
padding: 5em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 3em;
}

@media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
    padding: 3em;
}

h3 {
    font-size: 2em;
    text-shadow: black 0.1em 0.1em 0.2em;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 1.6em;
    }

    @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
        font-size: 1.6em;
    }
}

h3 span {
    color: #7AFFA2;
}

p {
    margin-top: 2em;
    font-size: 1.2em;
    padding: 1em;
    text-shadow: black 0.1em 0.1em 0.2em;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 1.3em;
    }

    @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
        font-size: 1.2em;
    }
}

p span {
    color: #7AFFA2;
}

input {
    width: 20em;
    height: 2em;
    border-radius: 2em;
    margin-top: 4em;
    border: 1px solid #7AFFA2;
    text-align: center;

    background-color: black;
    color: #FFF;
    font-size: 1.2em;
    font-weight: 600;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 80vw;
        font-size: 1.4em;
    }
}

input::placeholder {
    font-size: 0.8em;
    text-align: center;
}

input:focus {
    border: 1px solid #FFF;
}

button {
    width: 10em;
    height: 2em;
    margin-top: 2em;
    margin-left: 1em;
    border-radius: 2em;
    border: 1px solid #7AFFA2;

    background-color: black;
    color: #FFF; text-shadow: black 0.1em 0.1em 0.2em;
    font-size: 1.2em;
    font-weight: 600;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 12em;
        font-size: 1.4em;
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
    color: #7AFFA2;
}
`
