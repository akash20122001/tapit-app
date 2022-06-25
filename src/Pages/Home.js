import React from "react";
import { useNavigate } from "react-router-dom";
import TopContent from "../Components/TopContent";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";

import Footer from "../Components/Footer";
import PopularCategories from "../Components/PopularCategories";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* // NAVBAR */}
      <Navbar />
      {/* // CAROUSEL */}

      <div className="pt-[1.5rem] pb-[1.5rem] ">
        <TopContent />
        <Carousel />

        <PopularCategories/>
      </div>
      <Footer />
    </>
  );
}
