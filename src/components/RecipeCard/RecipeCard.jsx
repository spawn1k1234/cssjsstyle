import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      {/* Добавляем изображение, если оно есть */}
      {recipe.Image && (
        <img src={recipe.Image} alt={recipe.title} className="recipe-image" />
      )}

      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-meta">
        <span>⏱️ {recipe.time}</span>
        <span>🍽️ {recipe.servings}</span>
        <span>🔥 {recipe.calories}</span>
      </div>
      <div className="divasd">
        <h3 className="difficulty-title">Difficulty</h3>
        <ul className="difficulty-list">
          {recipe.difficulty.map((level, index) => (
            <li key={index} className="difficulty-item">
              <strong>{level}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default RecipeCard;
