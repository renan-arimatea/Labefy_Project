
import styled from "styled-components";

export const MusicContainer = styled.div`

display: flex;
flex-direction: column;
width: max-content;
height: max-content;

border: 1px solid #7AFFA2;
margin: 1em;
padding: 1em;
font-size: 1em;
background-color: #000000;


button {
    width: 10em;
    height: 2em;
    margin: auto;
    
    border-radius: 2em;
    border: 1px solid #7AFFA2;

    background-color: black;
    color: #FFF; 
    text-shadow: black 0.1em 0.1em 0.2em;
    font-size: .9em;
}

button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
    color: #7AFFA2;
}

input {
    width: 20em;
    height: 2em;
    border-radius: 2em;
    margin-top: .3em;
    border: 1px solid #7AFFA2;
    text-align: center;

    background-color: black;
    color: #FFF;
    font-size: 1em;
    font-weight: 500;
}

input::placeholder {
    font-size: 0.8em;
    text-align: center;
}

input:focus {
    border: 1px solid #FFF;
    font-size: 1em;
}
`

export const MusicCard = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: max-content;
height: auto;

margin: auto;
padding: 0.5em;
border-bottom: 1px solid #7AFFA2;

font-size: 1em;
font-weight: 500;
background-color: #000000;


p {
    padding: 0 1em;
    margin: auto;
    font-size: .8em;
    text-align: justify;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1em;
    max-height: 1em;
    padding: 0.59em;
}

button:hover {
    cursor: pointer;
    color: red;
    border: 1px solid red
}

audio {
    width: 2vw;
    height: 1em;
    margin: 0 .3em;
}
`

export const PlaylistDiv = styled.div`
margin-bottom: 1em;

`
