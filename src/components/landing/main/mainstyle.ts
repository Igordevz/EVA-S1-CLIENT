"use client";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  background: black;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content h1 {
    font-family: "JetBrains Mono", monospace;
    font-family: "AR One Sans", sans-serif;

    background: #c917cf;
    background: linear-gradient(to right, #c917cf 29%, #0cafcf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 60px;
    color: white;
  }
  .content p {
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
  .content span {
  /* Seu estilo atual para o texto */
  margin-top: 40px;
  max-width: 50%;
  text-align: center;
  font-size: 21px;
  font-family: "JetBrains Mono", monospace;
  color: white;
  position: relative; /* Adicione esta linha para posicionamento relativo */

  /* Pseudo-elemento para a bolinha de digitação */
  &::after {
    content: "";
    display: inline-block;
    margin-top: 4px;
    width: 20px; /* Largura da bolinha */
    height: 20px; /* Altura da bolinha */
    background-color: white; /* Cor da bolinha */
    border-radius: 50%; /* Forma de uma bolinha */
    margin-left: 5px; /* Espaço entre a bolinha e o texto */
    opacity: 0; /* Inicialmente invisível */
    animation: typing 1s infinite; /* Animação para a bolinha */
  }
}

/* Animação para a bolinha */
@keyframes typing {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

  .buttons{
    margin-top: 50px;
    display: flex;
    gap: 30px;
  }
  .content a {
    background: radial-gradient(
          circle at 100% 100%,
          #000000 0,
          #000000 7px,
          transparent 7px
        )
        0% 0%/8px 8px no-repeat,
      radial-gradient(circle at 0 100%, #000000 0, #000000 7px, transparent 7px)
        100% 0%/8px 8px no-repeat,
      radial-gradient(circle at 100% 0, #000000 0, #000000 7px, transparent 7px)
        0% 100%/8px 8px no-repeat,
      radial-gradient(circle at 0 0, #000000 0, #000000 7px, transparent 7px)
        100% 100%/8px 8px no-repeat,
      linear-gradient(#000000, #000000) 50% 50% / calc(100% - 2px)
        calc(100% - 16px) no-repeat,
      linear-gradient(#000000, #000000) 50% 50% / calc(100% - 16px)
        calc(100% - 2px) no-repeat,
      linear-gradient(
        169deg,
        #ff00f6 0%,
        rgba(255, 255, 255, 1) 35%,
        #001aff 63%,
        #ea00ff 93%
      );
    border-radius: 8px;
    padding: 1px;
    box-sizing: border-box;
    z-index: 1;
    font-weight: bold;
    color: white;
    font-size: 15px;
    outline: none;
    padding: 15px 30px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: .5s;
  }
  .content a:hover{
    background: #454545;
  }
  .background {
    width: 100%;
    position: absolute;
    left: 0;
  }
  .background img {
    width: 100%;
  }
`;
