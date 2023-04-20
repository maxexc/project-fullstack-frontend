import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DishCard from 'components/DishCard/DishCard';
import { useSearchParams } from 'react-router-dom';
import {
  GridContainer,
  SRLNoItems,
  SRLNoItemsText,
  ErrorComponent,
  PaginationWrapper,
} from './SearchRecipesList.styled';
import { queryBackEnd } from 'helpers/request';
//----
import { Container, Pagination, Stack } from '@mui/material';

//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  //------------------ Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const updatedParams = new URLSearchParams(searchParams.toString());
  //-----------------------------------
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const width = window.innerWidth;

    if (width >= 1304) {
      return 12;
    } else {
      return 6;
    }
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;

      if (width >= 1304) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(6);
      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  //-------------
  useEffect(() => {
    const processedValue = searchQuery.trim().replace(/ +/g, '%20');
    const newPage = parseInt(searchParams.get('page')) || 1;
    if (newPage !== page) {
      setPage(newPage);
    }
    const response = queryBackEnd.querySearch(
      searchType,
      processedValue,
      itemsPerPage,
      page
    );
    response
      .then(results => {
        setRecipes(results.result.data.list);

        //---- Pag
        setTotalPages(Math.ceil(results.result.data.totalItem / itemsPerPage));
        //-----
        setError(null);
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) {
          setError(
            <ErrorComponent>
              "There is no such ingredient. Try something else... "
            </ErrorComponent>
          );
        } else {
          setError(<ErrorComponent message="An error occurred" />);
        }
      });
  }, [searchQuery, searchType, itemsPerPage, page, searchParams]);

  const changeNum = (_, num) => {
    updatedParams.set('page', num.toString());
    setSearchParams(updatedParams);
    setPage(num);
  };
  return (
    <>
      {error ? (
        <SRLNoItems>
          <SRLNoItemsText>
            There is no such ingredient.
            <br /> Try something else...
          </SRLNoItemsText>
        </SRLNoItems>
      ) : !recipes.length ? (
        <SRLNoItems>
          <SRLNoItemsText>Try looking for something else...</SRLNoItemsText>
        </SRLNoItems>
      ) : (
        <>
          <GridContainer>
            {recipes.map(recipe => (
              <DishCard key={recipe._id} location={location} recipe={recipe} />
            ))}
          </GridContainer>
          {totalPages > 1 && (
            <PaginationWrapper>
              <Container>
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={changeNum}
                    siblingCount={1}
                    sx={{ marginY: 3, marginX: 'auto' }}
                  />
                </Stack>
              </Container>
            </PaginationWrapper>
          )}
        </>
      )}
    </>
  );
}
