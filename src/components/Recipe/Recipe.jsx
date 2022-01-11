import React from "react";
import { useSelector } from "react-redux";

const Recipe = () => {
  const recipes = useSelector((state) => state.recipes);

  return <div></div>;
};

export default Recipe;
