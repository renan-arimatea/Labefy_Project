import styled from "styled-components";

export const CardPlaylists = styled.div`

display: flex;
justify-content: space-between;
border: 1px solid #7AFFA2;
border-radius: 2em;
background-color: #000000;
margin: 1em;
padding: 1em;
width: 20em;
height: 3em;

:hover {
    cursor: pointer;
    color: #7AFFA2;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1em;
    max-height: 1em;
    padding: 0.59em;
    margin-top: -.3em;
}

.btn_Delete {
    :hover {
        cursor: pointer;
        color: red;
        border: 2px solid red;
    }
}
`

export const PlaylistContent = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h3 {
    padding: 1.5em;
}

h3 span {
    color: #7AFFA3;
    padding: 0 0.2em;
    background-color: #000000;
}

button {
        width: 10em;
        height: 2em;
        margin-left: 1em;
        border-radius: 2em;
        border: 1px solid #7AFFA2;
        margin-bottom: 1em;

        background-color: black;
        color: #FFF; text-shadow: black 0.1em 0.1em 0.2em;
        font-size: 1.2em;
        font-weight: 600;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.5s;
        color: #7AFFA2;
    }
`