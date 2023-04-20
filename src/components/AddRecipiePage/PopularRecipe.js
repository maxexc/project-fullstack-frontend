/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Title } from './RecipeIngridientsFields.styled';
import { queryBackEnd } from 'helpers/request';
import { Link } from 'react-router-dom';
import {
  Col,
  Label,
  Recipe,
  Thumb,
  Desc,
  Recipes,
  Popular,
} from './PopularRecipe.styled';

const PopularRecipe = ( {location} ) => {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState([]);
  const [viewport, setViewport] = useState(window.visualViewport.width);

  useEffect(() => {
   async function recipes() {
    if (viewport >= 1240) {
      const { result } = await queryBackEnd.queryPopular(4)
      setRecipes(result.data);
    } else if (viewport < 1240) {
      const { result } = await queryBackEnd.queryPopular(2)
      setRecipes(result.data);
    }}

    recipes()
  }, [viewport]);

  return (
    <Popular>
      <Title>Popular Recipe</Title>
      <Recipes>
        {recipes &&
          recipes.map(({ title, description, imageUrl, _id }) => (
            <Link key={_id} to={`/recipe/${_id}`} state={{ from: location }}>
            <Recipe key={title}>
              <Thumb src={imageUrl} alt={title} />
              <Col>
                <Label>{title}</Label>
                <Desc>{description}</Desc>
              </Col>
            </Recipe>
            </Link>
          ))}
      </Recipes>
    </Popular>
  );
};

export default PopularRecipe;
