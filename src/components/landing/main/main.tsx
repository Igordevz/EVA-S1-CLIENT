"use client"
import { Container } from "./mainstyle";
import loop from "../../../../public/loop.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function MainContainer() {


  const [typedText, setTypedText] = useState("");
  const fullText = `
  I'm excited to introduce our new AI, EVA - S1. This AI incorporates advanced technology to deliver exceptional performance and AI-based data security. Its consensus algorithm, GPT, enables unlimited speeds, making it a truly revolutionary solution.`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
        setTimeout(typeText, 30); 
      }
    };

    typeText();
  }, []);


  return (
    <Container>
      <div className="content">
        <h1>Uma Veloz, Eva-S1.</h1>
        <p>IA Escalável</p>
        <span>
         {typedText}
        </span>
        <div className="buttons">
            <Link href="/auth/login">Get started</Link>
            <Link href="#">Traning</Link>
        </div>
      </div>
      <div className="background">
        <Image alt="loop" src={loop} />
      </div>
    </Container>
  );
}
