import { useState } from 'react';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngridientsFields from './RecipeIngridientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import { Form, Button } from './AddRecipeForm.styled';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { queryBackEnd } from 'helpers/request';

const AddRecipieForm = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [time, setTime] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const data = new FormData();

  const handlReceptChange = part => {
    if (part.img) {
      setImage(part.img);
    } else if (part.title) {
      setTitle(part.title);
    } else if (part.description) {
      setDescription(part.description);
    } else if (part.category) {
      setCategory(part.category);
    } else if (part.time) {
      setTime(part.time);
    } else if (part.instructions) {
      setInstructions(part.instructions);
    } else if (part.ingredients) {
      let key = Object.keys(part.ingredients[Object.keys(part.ingredients)]);
      let value =
        part.ingredients[Object.keys(part.ingredients)][
          Object.keys(part.ingredients[Object.keys(part.ingredients)])
        ];
      let index = Object.keys(part.ingredients);
      setIngredients(ingredients => ({
        ...ingredients,
        [index]: { ...ingredients[index], [key]: value },
      }));
    }
  };

  async function addRecipe(e) {
    e.preventDefault();
    if (image) {
      data.append('img', image);
    } else return Notiflix.Notify.warning('Image field is empty');
    if (title) {
      data.append('title', title);
    } else return Notiflix.Notify.warning('Title field is empty');
    if (description) {
      data.append('description', description);
    } else return Notiflix.Notify.warning('Description field is empty');
    if (category) {
      data.append('category', category);
    } else return Notiflix.Notify.warning('Category field is empty');
    if (time) {
      data.append('time', time);
    } else return Notiflix.Notify.warning('Time field is empty');
    if (instructions) {
      data.append('instructions', instructions);
    } else return Notiflix.Notify.warning('Instructions field is empty');

    if (ingredients) {
      const entries = Object.entries(ingredients);
      entries.forEach(element => {
        data.append(`ingredients[${element[0]}][id]`, element[1].id);
        data.append(`ingredients[${element[0]}][measure]`, element[1].measure);
      });
    } else return Notiflix.Notify.warning('Іngredients field is empty');

    if (data) {
     queryBackEnd.queryAddRecipe(data)
        .then(status => {
          if (status === 200) {
            navigate('/my');
          }
        })
        .catch(err => {
          Notiflix.Notify.warning(err);
        });
    }
  }

  return (
    <>
      <Form>
        <RecipeDescriptionFields onChange={handlReceptChange} />
        <RecipeIngridientsFields onChange={handlReceptChange} />
        <RecipePreparationFields onChange={handlReceptChange} />
        <Button id="send" onClick={addRecipe}>
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddRecipieForm;
