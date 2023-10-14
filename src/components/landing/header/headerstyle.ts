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
`;
