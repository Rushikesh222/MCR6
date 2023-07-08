import { useState } from "react";
import { useData } from "../context/CardContext";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { hotelRecipe } = useData();
  const { userId } = useParams();
  const [recipeDetials, setRecipeDetails] = useState([]);
  const Details = hotelRecipe.find();

  return (
    <div>
      <h2>details</h2>
      {Details.map((items) => {
        const { Restaurantsname, id } = items;
        return (
          <div key={id}>
            <h1>dish by {Restaurantsname}</h1>
            <div className="menu-list">
              {cuisineName.map((menu) =>
                menu.map((list) => {
                  const { name } = list;
                  return (
                    <div className="menu-items">
                      <h3>{name}</h3>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
