"use client";

import styled from "styled-components";

export const Container = styled.div`
  background: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  color: white;
  .title {
    margin-bottom: 40px;
  }
  form {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
  form input {
    color: #0fa47f;
    background: none;
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 30px 10px 10px;
  }
  form button {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
  }
  form a {
    color: #da0c81;
  }
  footer {
    position: absolute;
    bottom: 20px;
    & a {
      color: gray;
    }
  }
`;
