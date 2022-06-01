import styled from "styled-components"

export const HomeContainer = styled.div`
    
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
padding: 5em 4em;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-image: url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
min-height: 100vh;


h1 {
    font-size: 2.5em;
    margin-bottom: .5em;
    color: #FFFF;
}

h1 span {
    color: #7AFFA2;
    padding: 0 0.2em;
    background-color: #222;

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

p {
    margin-bottom: 1.5em;
    background-color: #222;
    padding: .5em;
    color: #7AFFA2;
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

export const VideoContent = styled.div`

    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    
`
