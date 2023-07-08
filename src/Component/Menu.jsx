import { useState } from "react";
import { Recipe, Recipe2 } from "../assets/Data";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
  const navigate = useNavigate();
  const [cuisineName, setCuisineName] = useState(() =>
    Recipe.map(({ menu }) => menu)
  );
  const [cuisineName2, setCuisineName2] = useState(() =>
    Recipe2.map(({ menu }) => menu)
  );

  const handletype = (type) => {
    const filter = Recipe.map(({ menu }) =>
      menu.filter(({ cuisinetype }) =>
        cuisinetype.toLowerCase().includes(type.toLowerCase())
      )
    );
    const filter2 = Recipe2.map(({ menu }) =>
      menu.filter(({ cuisinetype }) =>
        cuisinetype.toLowerCase().includes(type.toLowerCase())
      )
    );
    setCuisineName2(filter2);
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
          const { Restaurantsname, id } = items;
          return (
            <div key={id}>
              <h1>dish by {Restaurantsname}</h1>
              <div className="menu-list">
                {cuisineName.map((menu) =>
                  menu.map((list) => {
                    const { image, name, price } = list;
                    return (
                      <div
                        onClick={() => navigate(`/details/${id}`)}
                        className="menu-items"
                      >
                        <img className="menu-image" src={image} />
                        <h3>{name}</h3>
                        <p>Rs:{price}</p>
                        <p>{Restaurantsname}</p>
                      </div>
                    );
                  })
                )}
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
                {cuisineName2.map((menu) =>
                  menu.map((list) => {
                    const { image, name, price } = list;
                    return (
                      <div
                        onClick={() => navigate(`/details/${id}`)}
                        className="menu-items"
                      >
                        <img className="menu-image" src={image} />
                        <h3>{name}</h3>
                        <p>Rs:{price}</p>
                        <p>{Restaurantsname}</p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
      {cuisineName.map((items) => items.map((list) => console.log(list)))}
    </div>
  );
};
