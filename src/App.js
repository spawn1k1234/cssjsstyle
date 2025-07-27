// import React from "react";
// import "./App.css";
// import RecipeCard from "./components/RecipeCard/RecipeCard";

// function App() {
//   const recipes = [
//     {
//       Image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrb9lxOr0AUBl6muGyfwGjzryOqz7KesoNQ&s",
//       title: "Smoked salmon burger",
//       time: "20 min",
//       servings: "5 servings",
//       calories: "210 calories",
//       difficulty: ["Easy", "Medium", "Fixed"],
//     },
//     {
//       Image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbior8damh5OrkSj9qsqE0da5IucAx7n0Sqw&s",
//       title: "Tomatoes With Creamy Feta",
//       time: "15 min",
//       servings: "3 servings",
//       calories: "600 calories",
//       difficulty: ["Easy", "Medium", "Fixed"],
//     },
//     {
//       Image:
//         "https://mccormick.widen.net/content/uvjk9yurf1/original/spicy_potato_salad_637390546085236844_800x800.jpg",
//       title: "Spicy potato salad",
//       time: "30 min",
//       servings: "2 servings",
//       calories: "320 calories",
//       difficulty: ["Easy", "Medium", "Fixed"],
//     },
//     {
//       Image:
//         "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
//       title: "Chicken Biryani",
//       time: "40 min",
//       servings: "4 servings",
//       calories: "700 calories",
//       difficulty: ["Easy", "Medium", "Fixed"],
//     },
//   ];

//   return (
//     <div className="app">
//       <h1 className="app-title">Recipe Cards</h1>
//       <div className="recipes-container">
//         {recipes.map((recipe, index) => (
//           <RecipeCard key={index} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import styled from "styled-components";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import GlobalStyle from "./GlobalStyle";

const AppWrapper = styled.div`
  padding: 40px;
  background-color: antiquewhite;
  min-height: 100vh;
`;

const AppTitle = styled.h1`
  text-align: center;
  color: #222;
  margin-bottom: 40px;
`;

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

function App() {
  const recipes = [
    {
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrb9lxOr0AUBl6muGyfwGjzryOqz7KesoNQ&s",
      title: "Smoked salmon burger",
      time: "20 min",
      servings: "5 servings",
      calories: "210 calories",
      difficulty: ["Easy", "Medium", "Fixed"],
    },
    {
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbior8damh5OrkSj9qsqE0da5IucAx7n0Sqw&s",
      title: "Tomatoes With Creamy Feta",
      time: "15 min",
      servings: "3 servings",
      calories: "600 calories",
      difficulty: ["Easy", "Medium", "Fixed"],
    },
    {
      Image:
        "https://mccormick.widen.net/content/uvjk9yurf1/original/spicy_potato_salad_637390546085236844_800x800.jpg",
      title: "Spicy potato salad",
      time: "30 min",
      servings: "2 servings",
      calories: "320 calories",
      difficulty: ["Easy", "Medium", "Fixed"],
    },
    {
      Image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
      title: "Chicken Biryani",
      time: "40 min",
      servings: "4 servings",
      calories: "700 calories",
      difficulty: ["Easy", "Medium", "Fixed"],
    },
  ];

  return (
    <AppWrapper>
      <GlobalStyle />
      <AppTitle>Recipe Cards</AppTitle>
      <RecipesContainer>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </RecipesContainer>
    </AppWrapper>
  );
}

export default App;
