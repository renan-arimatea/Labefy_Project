import React from "react";
import { Main } from "./ErrorPageStyled";
import {Link} from "react-router-dom"

const ErrorPage = () => {
  return (
    <Main>
      <h1> Alto lá viajante!</h1>

      <p> Você chegou a uma área desconhecida... temos que voltar. </p>

      <Link to="/"><button>Voltar</button></Link>

    </Main>
  );
};

export default ErrorPage;
