import React from "react";
import "./Header.css";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Craving Something Delicious ?  Order Now and Satisfy Your Hunger !</h2>
        <p>
          Discover a variety of mouthwatering menus crafted with the freshest
          ingredients! From savory classics to innovative dishes, we have
          something for every craving. Whether you need a quick bite or a family
          meal, find the perfect dish and enjoy delicious food delivered right
          to your door!
        </p>
        <button>See What's Cooking</button>
      </div>
    </div>
  );
};

export default Header;
