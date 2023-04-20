import AddRecipieForm from '../../components/AddRecipiePage/AddRecipeForm';
import FollosUs from '../../components/AddRecipiePage/FollowUs';
import PopularRecipe from '../../components/AddRecipiePage/PopularRecipe';
import { Wrap, Col } from './AddRecipePage.styled';
import { Main } from '../../components/MainContainer/MainContainer.styled';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';

const AddRecipiePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <MainPageTitle title={'Add recipe'} />
      <Wrap>
        <Col>
          <AddRecipieForm />
        </Col>
        <Col>
          <FollosUs />
          <PopularRecipe />
        </Col>
      </Wrap>
    </Main>
  );
};

export default AddRecipiePage;
