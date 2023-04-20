import { MainContainer } from '../components/MainContainer/MainContainer';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';
import { useState, useEffect } from 'react';
import queryBackEnd from '../helpers/request/queryBackEnd';
import { MainPageTitle } from '../components/MainPageTitle/MainPageTitle';
import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
  const { categName } = useParams();
  const [tabsTitlesQ, setTabsTitlesQ] = useState([]);

  // Get all titles category
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      await queryBackEnd
        .queryCategoryList()
        .then(data => setTabsTitlesQ(data.result.data))
        .catch(error => console.log(error.message));
    };
    fetchData();
  }, []);

  let idCategory = 0;

  if (categName && tabsTitlesQ.length > 0) {
    idCategory = tabsTitlesQ.indexOf(categName);
  }

  return (
    <MainContainer>
      <MainPageTitle title="Categories" />
      <CategoriesTabs tabsTitlesQ={tabsTitlesQ} idCategory={idCategory} />
    </MainContainer>
  );
};

export default CategoriesPage;
