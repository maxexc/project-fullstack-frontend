import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledTabs as Tabs } from './CategoriesTabs.styled';
import { StyledTab as Tab } from './CategoriesTabs.styled';
import { Box } from '@mui/material';
import { RecipesBox } from './CategoriesTabs.styled';
import DishCard from '../DishCard/DishCard';
import queryBackEnd from '../../helpers/request/queryBackEnd';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`categories-tabpanel-${index}`}
      aria-labelledby={`categories-tab-${index}`}
      {...other}
    >
      {value === index && <RecipesBox>{children}</RecipesBox>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `categories-tab-${index}`,
    'aria-controls': `categories-tabpanel-${index}`,
  };
}

export default function CategoriesTabs(props) {
  const navigate = useNavigate();
  const { tabsTitlesQ, idCategory } = props;
  const [value, setValue] = React.useState(idCategory);
  const [recipeList, setRecipeList] = React.useState([]);

  React.useEffect(() => {
    setValue(idCategory);
  }, [idCategory]);

  // --- loading data when component is mounted -----------
  React.useEffect(() => {
    const fetchData = async () => {
      await queryBackEnd
        .queryRecipeCategori(tabsTitlesQ[idCategory])
        .then(data => setRecipeList(data.result.data))
        .catch(error => console.log(error));
    };
    fetchData();
  }, [idCategory, tabsTitlesQ]);

  // ------- get Recipe by categiry id ------------------
  const handleChange = async (event, tabId) => {
    // tabsTitlesQ[tabId];
    navigate(`/categories/${tabsTitlesQ[tabId]}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="categories"
          variant="scrollable"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#8baa36',
            },
          }}
          sx={{
            '& .Mui-selected': { color: '#8baa36 !important ' },
          }}
        >
          {tabsTitlesQ.map((title, index) => {
            return <Tab key={index} label={title} {...a11yProps({ index })} />;
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={value}>
        {recipeList.map((recipe, index) => (
          <DishCard recipe={recipe} key={index} />
        ))}
      </TabPanel>
    </Box>
  );
}
