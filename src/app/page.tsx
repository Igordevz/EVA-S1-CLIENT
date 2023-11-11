import Header from "@/components/landing/header/header";
import "./globals.css";
import MainContainer from "@/components/landing/main/main";
import CardsContent from "@/components/landing/cardsContent";
import Mainthree from "@/components/landing/maintwo";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer/>
      <CardsContent/>
      <Mainthree/>
    </>
  );
}
