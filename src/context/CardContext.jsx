import { createContext, useContext } from "react";
import { Recipe, Recipe2 } from "../assets/Data";

const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const hotelRecipe = Recipe.concat(Recipe2);
  console.log(hotelRecipe);

  return (
    <CardContext.Provider value={{ hotelRecipe }}>
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
