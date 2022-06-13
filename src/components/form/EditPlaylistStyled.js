
import styled from "styled-components";

export const MusicContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
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
/* width: max-content; */
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
    width: 50vw;
    height: 1.5em;
    margin: 0 .3em;
    background: black;
    font-size: 1em;
}
`

export const Player = styled.div`

    padding: 1em 3em;
    margin: 1.3em;
    color: #f2f2f2;
    border: 1px solid #7AFFA2;

    align-items: center;
    justify-content: center;


    .btn {
        padding: 0 .2em;
       
        :hover{
            cursor: pointer;
            color: #7AFFA2;
            transition: .3s;
        }
    }

    .btn_play, .btn_pause{
        font-size: 2.5em;
    }

    .btn_arrow {
        font-size: 1.5em;
        margin: 0 1em;
    }

    .btn_pause {
        display: none;
    }
`

export const MusicData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:.8em;

    p {
        font-size: 1em;
    }

    i {
        font-size: .9em;
        padding: .5em 0 1em 0;
    }
`

export const MusicProgres = styled.div`

    .time {
        width: 15em;
        margin-top: 1em;
    }

    .bar {
        display: flex;
        align-items: center;
        width: 15em;
        height: .4em;
        border: 1px solid #57f988;
        border-radius: 1em;
    }

    .dot {
        width: 1em;
        height: 1em;
        display: flex;
        justify-content: flex-start;
        background-color: #eee;
        border-radius: 50%;
        margin-left: -.8em;
        background-color: #57f988;
    }

    .time {
        display: flex;
        justify-content: space-between;
        width: 18.5em;
        font-size: .8em;
    }

    progress {
        height: .4em;
        width: 0%;
        background-color: #57f988;
    }
`

export const MusicPlayer = styled.div `
    display: flex;
    flex-direction: row;
    padding: 1em;
    align-items: center;
    justify-content: center;
`

export const PlaylistDiv = styled.div`
margin-bottom: 1em;

`
