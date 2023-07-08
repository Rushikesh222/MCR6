import { useState } from "react";
import { Recipe, Recipe2 } from "../assets/Data";
import "./Menu.css";
export const Menu = () => {
  const [cuisineName, setCuisineName] = useState([]);

  const handletype = (type) => {
    const filter = Recipe.map(({ menu }) =>
      menu.filter(({ cuisinetype }) =>
        cuisinetype.toLowerCase().includes(type.toLowerCase())
      )
    );

    setCuisineName(filter);
  };
  console.log(cuisineName);
  return (
    <div className="Menu-content">
      <h1>Your food order</h1>
      <h2>select your Cuisine:</h2>
      <div className="type-button">
        <button onClick={() => handletype("Indian")}>Indian</button>
        <button onClick={() => handletype("Italian")}>Italian</button>
        <button onClick={() => handletype("Mexican")}>Mexican</button>
        <button onClick={() => handletype("Chinese")}>Chinese</button>
      </div>

      <div className="menu">
        {Recipe.map((items) => {
          const { Restaurantsname, id, menu } = items;
          return (
            <div key={id}>
              <h1>dish by {Restaurantsname}</h1>
              <div className="menu-list">
                {menu.map((list) => {
                  const { image, name, price } = list;
                  return (
                    <div className="menu-items">
                      <img className="menu-image" src={image} />
                      <h3>{name}</h3>
                      <p>Rs:{price}</p>
                      <p>{Restaurantsname}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="menu">
        {Recipe2.map((items) => {
          const { Restaurantsname, id, menu } = items;
          return (
            <div key={id}>
              <h1>dish by {Restaurantsname}</h1>
              <div className="menu-list">
                {menu.map((list) => {
                  const { image, name, price } = list;
                  return (
                    <div className="menu-items">
                      <img className="menu-image" src={image} />
                      <h3>{name}</h3>
                      <p>Rs.{price}</p>
                      <p>{Restaurantsname}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
