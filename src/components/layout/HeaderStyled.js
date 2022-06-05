import styled from "styled-components";

export const NavbarMenu = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: auto;
    padding: .2em;

    background-image: linear-gradient(to right, #000000, #000000, #340D10, #000000, #000000);
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1em;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: row;
        font-size: .8em;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
        display: flex;
        flex-direction: row;
        font-size: 1em;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    
    img {
        width: 60px;
        padding: .2em;
        margin-left: 1em;
        color: white;
    }

    ul {
        display: flex;
        padding: 1em;
        text-align: center;
        margin-left: 10em;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            display: flex;
            flex-direction: row;
            text-align: center;
            justify-content: space-around;
            margin: 1em 0;
            padding: 1em 0;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 850px) {
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
