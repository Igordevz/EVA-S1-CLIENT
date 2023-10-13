"use client";
import "./globals.css";
import Header from "@/components/landing/header/header";
import { Container } from "./style";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <Header />
      <Container>
        <div className="group">
          <div className="title">
            <h1>Create User</h1>
          </div>
          <form>
           <input type="name" required placeholder="Nome do usuário" />

            <input type="email" required placeholder="Email" />
            <input type="password" required placeholder="password" />
            <button>Continue</button>
            <p>
            Do you have a user account? <Link href="/auth/login">Login</Link>
            </p>
          </form>
        </div>
        <footer>
            <a href="#">políticas de privacidade</a>
        </footer>
      </Container>
    </>
  );
}
