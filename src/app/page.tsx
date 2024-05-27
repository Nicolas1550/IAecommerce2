// Home.tsx
"use client";
import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import { GlobalStyle } from "./globalStyle/globalStyle";
import ProjectOverview from "./components/projectOverview/projectOverview";
import Footer from "./components/footer/footer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchProducts,
  selectVisibleProducts,
} from "@/redux/features/product/productSlice";
import ProductPreviewSection from "./components/products/productPreviewSection/productPreviewSection";
function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectVisibleProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Header />
      <ProjectOverview />
      <ProductPreviewSection products={products} />
      <Footer />
    </>
  );
}

export default Home;
