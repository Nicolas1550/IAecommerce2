// Home.tsx
"use client";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import { GlobalStyle } from "./globalStyle/globalStyle";
import ProjectOverview from "./components/projectOverview/projectOverview";
import Footer from "./components/footer/footer";
function Home() {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Header />
      <ProjectOverview />
      <Footer />
    </>
  );
}

export default Home;
