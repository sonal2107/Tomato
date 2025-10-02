import { useState } from "react";
import React from "react";
import "./Home.css";


import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Footer from "../../components/Footer/Footer";
import AppDownload from "../../components/AppDownload/AppDownload";


const Home = () => {

  const [category, setCategory] = useState("All");
  const [showLogin,setShowLogin] = useState(false)


  return (
    <div>
    
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
      <Footer/>
      
    </div>
  );
}

export default Home;
