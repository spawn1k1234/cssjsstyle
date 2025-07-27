// import React from "react";
// import "./RecipeCard.css";

// const RecipeCard = ({ recipe }) => {
//   return (
//     <div className="recipe-card">

//       {recipe.Image && (
//         <img src={recipe.Image} alt={recipe.title} className="recipe-image" />
//       )}

//       <h2 className="recipe-title">{recipe.title}</h2>
//       <div className="recipe-meta">
//         <span>⏱️ {recipe.time}</span>
//         <span>🍽️ {recipe.servings}</span>
//         <span>🔥 {recipe.calories}</span>
//       </div>
//       <div className="divasd">
//         <h3 className="difficulty-title">Difficulty</h3>
//         <ul className="difficulty-list">
//           {recipe.difficulty.map((level, index) => (
//             <li key={index} className="difficulty-item">
//               <strong>{level}</strong>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="divider"></div>
//     </div>
//   );
// };

// export default RecipeCard;

import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RecipeImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const Meta = styled.div`
  display: flex;
  margin-bottom: 15px;
  color: #666;
  font-size: 14px;
  span {
    width: 100px;
  }
`;

const DifficultyWrapper = styled.div`
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
`;

const DifficultyTitle = styled.h3`
  font-size: 16px;
  color: #444;
`;

const DifficultyList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
`;

const DifficultyItem = styled.li`
  color: #555;
  padding: 10px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  width: 100%;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      {recipe.Image && <RecipeImage src={recipe.Image} alt={recipe.title} />}
      <Title>{recipe.title}</Title>
      <Meta>
        <span>⏱️ {recipe.time}</span>
        <span>🍽️ {recipe.servings}</span>
        <span>🔥 {recipe.calories}</span>
      </Meta>
      <DifficultyWrapper>
        <DifficultyTitle>Difficulty</DifficultyTitle>
        <DifficultyList>
          {recipe.difficulty.map((level, index) => (
            <DifficultyItem key={index}>
              <strong>{level}</strong>
            </DifficultyItem>
          ))}
        </DifficultyList>
      </DifficultyWrapper>
      <Divider />
    </Card>
  );
};

export default RecipeCard;
