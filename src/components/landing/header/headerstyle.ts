"use client";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  height: 90px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .title a {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 23px;
    color: white;
    font-weight: bold;
  }
  nav {
    display: flex;
    gap: 30px;
  }
  nav a {
    cursor: pointer;
    text-decoration: none;
    color: white;
    position: relative;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }
  nav a:after {
    content: "";
    scale: 0 1;
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    transform-origin: left;
    left: 0;
    border-radius: 10px;
    bottom: -2px;
    transition: 1s;
  }
  nav a:hover:after {
    scale: 1;
    transform-origin: right;
  }
  .external {
    cursor: pointer;
  }
  @media (max-width: 1080px) {
    .external,
    nav {
      display: none;
    }
  }
`;
export const Menus = styled.div`

  display: none;

  @media (max-width: 1080px) {
      display: flex;
  }

`
export const MenuDrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  display: flex;
  height: 100vh;
  background: black;
  align-items: center;
  justify-content: center;
  img {
    left: 20px;
    top: 20px;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
  }
  nav {
    display: flex;
    align-items: safe;
    flex-direction: column;
  }

  @keyframes animator {
    0% {
      opacity: 0;
      transform: translateX(500px);
    }
    100% {
      opacity: 1;

      transform: translateX(0);
    }
  }
  @media (max-width:500px){
    width: 100%;
  }
`;
