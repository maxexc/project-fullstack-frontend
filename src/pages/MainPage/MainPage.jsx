import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { queryBackEnd } from 'helpers/request';
import {
  Container,
  RecipeCategoryName,
  Button,
  ContainerWrapper,
  GridContainer,
  Section,
  MPButton,
  RecipeCategoryNameLink,
} from './MainPage.styled';

import MainPageHero from '../../components/MainPageHero/MainPageHero';
import DishCard from 'components/DishCard';
import { createCategoryUrl, createSearchUrl } from 'helpers/createSearchUrl';
//--------------------------------------
export default function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  //Do we need resize?

  const [quantity, setQuantity] = useState(() => {
    const width = window.innerWidth;

    if (width >= 1304) {
      return 4;
    } else if (width >= 768 && width < 1304) {
      return 2;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleWindowResize = () => {
      const width = window.innerWidth;

      if (width >= 1304) {
        setQuantity(4);
      } else if (width >= 768 && width < 1304) {
        setQuantity(2);
      } else {
        setQuantity(1);
      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const response = queryBackEnd.queryRecipeMinePage(quantity);
    response
      .then(results => {
        setRecipes(results.result.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [quantity]);

  const RecipesByCategory = recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [recipe];
    } else {
      acc[recipe.category].push(recipe);
    }
    return acc;
  }, {});
  //---------------------------
  const handleFormSubmit = query => {
    if (query) {
      const searchUrl = createSearchUrl(query);

      navigate(searchUrl);
    }
  };

  const handleCategoryClick = category => {
    const categoryUrl = createCategoryUrl(category);
    navigate(categoryUrl);
  };
  //-------------------
  return (
    <ContainerWrapper>
      <MainPageHero onSubm={handleFormSubmit} />

      <Section>
        <MainContainer>
          <Container>
            {Object.entries(RecipesByCategory).map(([category, recipes]) => (
              <div key={category}>
                <RecipeCategoryName>
                  <RecipeCategoryNameLink to={`/categories/${category}`}>
                    {category}
                  </RecipeCategoryNameLink>
                </RecipeCategoryName>

                <GridContainer>
                  {recipes.map(recipe => (
                    <DishCard
                      key={recipe._id}
                      location={location}
                      recipe={recipe}
                    />
                  ))}
                </GridContainer>

                <Button onClick={() => handleCategoryClick(category)}>
                  See all
                </Button>
              </div>
            ))}
          </Container>

          <MPButton onClick={() => navigate('/categories')}>
            Other categories
          </MPButton>
        </MainContainer>
      </Section>
    </ContainerWrapper>
  );
}
