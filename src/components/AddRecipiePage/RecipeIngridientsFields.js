/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { queryBackEnd } from 'helpers/request';
import {
  Counter,
  Title,
  Simbol,
  Header,
  IngridientsList,
  IngridientField,
  Quantity,
  InputQuantity,
  Delete,
  Ingridients,
  CustomSelect,
  CustomSelectUnit,
} from './RecipeIngridientsFields.styled';
import Notiflix from 'notiflix';

const RecipeIngridientsFields = ({ onChange }) => {
  const [count, setCount] = useState(0);
  const [ingridient, setIngridient] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(null);

  async function fetchMyIngredients()  {
    const { result } = await queryBackEnd.queryAllIngredients()
    setIngredients(result.data);
  }

  useEffect(() => {
    fetchMyIngredients()
  }, []);

  const handleValueSelectIngridient = e => {
    const index = Object.keys(e.value);
    const item = {
      id: e.value[Object.keys(e.value)],
    };
    const ingredients = { [index]: item };

    onChange({ ingredients: ingredients });
  };

  const handleValueSelectMessure = e => {
    const index = Object.keys(e.value);
    const item = {
      measure: quantity + e.value[Object.keys(e.value)],
    };
    const measure = { [index]: item };
    if (quantity) {
      onChange({ ingredients: measure });
    } else return Notiflix.Notify.warning('Count field is empty');
  };

  const UNIT = ['tbs', 'tsp', 'kg', 'g'];

  function deleteIngridientField(e) {
    setCount(count - 1);
    let newIingridients = ingridient;
    newIingridients.splice(e.currentTarget.value, 1);
    setIngridient(newIingridients);
  }

  function handleClick(e) {
    e.preventDefault();
    // eslint-disable-next-line default-case
    switch (e.currentTarget.value) {
      case 'minus':
        if (count > 0) {
          setCount(count - 1);
          let newIingridients = ingridient;
          newIingridients.pop();
          setIngridient(newIingridients);
        }
        break;
      case 'plus':
        setCount(count + 1);
        setIngridient(ingridient => [...ingridient, {}]);
    }
  }

  return (
    <Ingridients>
      <Header>
        <Title>Ingridients</Title>
        <Counter>
          <Simbol value="minus" onClick={handleClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.50024 8H13.5003" />
            </svg>
          </Simbol>
          <div>{count}</div>
          <Simbol value="plus" onClick={handleClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="curent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.50024 8H13.5003" />
              <path d="M8.00024 2.5V13.5" />
            </svg>
          </Simbol>
        </Counter>
      </Header>
      {ingridient.map((field, index) => (
        <IngridientsList key={index}>
          <IngridientField>
            <CustomSelect
              key={index}
              id={index}
              onChange={handleValueSelectIngridient}
              className="react-select-container"
              classNamePrefix="react-select"
              options={ingredients.map(({ title, _id }) => ({
                value: { [index]: _id },
                label: title,
              }))}
            />
            <Quantity>
              <InputQuantity
                onChange={e => setQuantity(e.currentTarget.value)}
                placeholder="0"
              />
              <CustomSelectUnit
                key={index}
                id={index}
                onChange={handleValueSelectMessure}
                placeholder=""
                classNamePrefix="react-select"
                options={UNIT.map(unit => ({
                  value: { [index]: unit },
                  label: unit,
                }))}
              />
            </Quantity>
            <Delete value={index} onClick={deleteIngridientField}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.625 4.875L4.375 16.125" />
                <path d="M15.625 16.125L4.375 4.875" />
              </svg>
            </Delete>
          </IngridientField>
        </IngridientsList>
      ))}
    </Ingridients>
  );
};

export default RecipeIngridientsFields;
