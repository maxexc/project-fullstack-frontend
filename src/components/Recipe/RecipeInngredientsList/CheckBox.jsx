import { useState } from 'react';

import { CustomCheckbox } from './RecipeInngredientsList.styled';
import { UseSvg } from '../../../helpers/useSvg/useSvg';

export const CheckBox = ({ addIngrid, id, measure }) => {
  const [check, setCheck] = useState(false);

  return (
    <CustomCheckbox
      onClick={() => {
        addIngrid({
          ing: [{ id, measure }],
        });
        setCheck(!check);
      }}
    >
      {check ? <UseSvg id="Pick" /> : null}
    </CustomCheckbox>
  );
};

export default CheckBox;
