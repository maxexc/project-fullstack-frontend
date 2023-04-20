import React from 'react';
import { DishWrapper, DishTitleWrapper, DishTitle } from './DishCard.styled';
import { Link } from 'react-router-dom';
import placeholderImage from '../../images/mainPagePhoto/placeholderImage.png';
export default function DishCard({ location, recipe }) {
  return (
    <DishWrapper>
      <Link to={`/recipe/${recipe._id}`} state={{ from: location }}>
        {recipe.imageUrl ? (
          <img src={recipe.imageUrl} alt={recipe.title} />
        ) : (
          <img src={placeholderImage} alt="Placeholder" />
        )}
        <DishTitleWrapper>
          <DishTitle>{recipe.title}</DishTitle>
        </DishTitleWrapper>
      </Link>
    </DishWrapper>
  );
}
