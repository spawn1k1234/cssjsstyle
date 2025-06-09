import React from "react";

function App() {
  const myName = "Владислав";

  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmd1rk8JVagwnBmpHYmx7qfcWu5RuUuuFkOA&s";
  const imageDescription = "Зображення";

  const favoriteSite = {
    name: "youtube",
    url: "https://www.youtube.com/",
  };

  const number1 = 5;
  const number2 = 10;
  const sum = number1 + number2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imageUrl} alt={imageDescription} />
      <p>
        Перейдіть на{" "}
        <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">
          {favoriteSite.name}
        </a>
      </p>
      <p>Сума чисел: {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
