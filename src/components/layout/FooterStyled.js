import styled from "styled-components";

export const Footercontainer = styled.div`

    background-color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FFF;
    padding: 3em;
    text-align: center; 

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 1.5em 0;
    }

    @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
       padding: 1.8em 0;
   }

ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}

li {
    font-size: 0.8em;
    margin: 1em 1em 2em 2em;
    cursor: pointer;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: .6em;
        text-align: center;
        margin: .3em ;
        padding: 1em .2em;
    }

    @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
        font-size: .65em;
        text-align: center;
        padding: .8em .2em;
            
    }
}

ul {
    text-decoration: none;
    list-style: none;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: block;
    }

}

svg {
    font-size: 2em;
    cursor: pointer;
    color: #FFF;
}

svg:hover {
    color: #7AFFA2;
    transition: 0.5s;
    transform: scale(1.1);
}

p {
    font-size: 0.9em;
    margin-top: 1.2em;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: .7em;
        margin-top: 1.5em;
    }

    @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
        font-size: 1em;
    }
}

span {
    font-weight: bold;
    color: #7AFFA2;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .socialList {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 1.2em;
    }
}

@media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
    .socialList {
        font-size: 1.5em;
    }
}
`