"use client";

import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  .documentation {
    padding-top: 100px;
    padding-bottom: 100px;
    max-width: 50%;
  }
  h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }
  span {
    font-weight: bold;
  }
  strong {
    background: purple;
  }
  p {
    margin-bottom: 20px;
    font-size: 20px;
  }
  h1,
  span,
  p,
  h2,
  h3,
  strong {
    border-radius: 4px;
    font-family: "AR One Sans", sans-serif;
    font-family: "Hanken Grotesk", sans-serif;
  }
  p {
    font-size: 20px;
    color: gray;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 25px;
    padding: 8px;
    background: rgb(0, 91, 65);
    background: linear-gradient(
      90deg,
      rgba(0, 91, 65, 1) 0%,
      rgba(0, 0, 0, 1) 58%  
    );
  }
  color: white;

  @media (max-width: 1270px) {
    .documentation {
        max-width: 70%;
    }
  }
  @media (max-width: 683px) {
    h1{
        font-size: 45px;
    }
    .documentation {
        max-width: 80%;
    }
  }
`;
