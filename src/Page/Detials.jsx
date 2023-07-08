import { useState } from "react";
import { useData } from "../context/CardContext";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { hotelRecipe } = useData();
  const { userId } = useParams();
  const [showform, setShowForm] = useState(false);
  const [recipeDetials, setRecipeDetails] = useState(() =>
    hotelRecipe.find((item) => parseInt(item.id) === parseInt(userId))
  );
  const submitHandler = (e) => {
    e.preventD;
    console.log(event);
  };

  return (
    <div>
      <form>
        <label>Rating</label>
        <select name="rating" onSubmit={submitHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Comment</label>
        <input type="text" onChange={(e) => e.target.value} />
        <button type="submit">Submit</button>
      </form>
      <h2>{recipeDetials.Restaurantsname}</h2>
      <button onClick={() => setShowForm(true)}>Add Review</button>
      <div></div>
      {recipeDetials?.menu?.map((item) => {
        const { name } = item;
        return (
          <div>
            <p>{name}</p>
          </div>
        );
      })}
      <p>Average Rating : {recipeDetials.Average}</p>
      <div>
        <h1>Review</h1>
        {recipeDetials?.rating?.map((list) => {
          const { name, rating, comment } = list;
          return (
            <div>
              <h2>{name}</h2>
              <p>{rating}</p>
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// id: 1,
// Restaurantsname: "Pizza palace",

// rating: [
//   { name: "aniket", rating: 4.5, comment: "good" },
//   { name: "shubham", rating: 4.0, comment: "very good" },
// ],
// menu: [
//   {
//     image:
//       "https://www.butter-n-thyme.com/wp-content/uploads/2023/03/Bismark-Pizza.jpg",
//     name: "BISMARK PIZZA",
//     cuisinetype: "Indian",
//     price: 400,
//   },
