import styled from "styled-components";

export const NavbarMenu = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: .2em;

    background-color: #000;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .8em;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: row;
        font-size: .8em;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: flex;
        flex-direction: row;
        font-size: 1em;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    @media only screen and (min-device-width : 1921px) {
        padding: .2em 20%;
    }
    
    img {
        width: 60px;
        padding: .2em;
        margin-left: 1em;
        color: white;

        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 50px;
        }
    }

    ul {
        display: flex;
        padding: 1em;
        text-align: center;
        margin-left: 10em;

        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction: row;
            text-align: center;
            justify-content: space-around;
            margin: 1em 0;
            padding: 1em 0;
        }

        @media only screen and (min-device-width : 481px) and (max-device-width : 850px) {
            display: flex;
            flex-direction: row;
            text-align: center;
            justify-content: space-around;
            margin: 1em 0;
            padding: 1em 0;
        }
    }

    li {
        margin-right: 1em;
        text-decoration: none;
        list-style: none;
    }

    li a {
        text-decoration: none;
        color: #FFFF;
    }

    li a:hover {
        cursor: pointer;
        color: #7AFFA2;
        transition: 0.5s;
    }
`
