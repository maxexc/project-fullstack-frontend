import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwBtn, Circle } from './SwitcherBtn.styled';
import theme from 'redux/theming/theme-operations';
import getTheme from 'redux/theming/theme-selector';

const SwitcherBtn = () => {
  const color = useSelector(getTheme);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(color === 'dark' ? true : false);
  const switchHandler = () => {
    setChecked(prev => !prev);

    if (color === 'white') {
      dispatch(theme.themeSwitch('dark'));
    } else {
      dispatch(theme.themeSwitch('white'));
    }
  };

  return (
    <SwBtn
      checked={checked}
      onClick={() => {
        switchHandler();
      }}
    >
      <Circle checked={checked} />
    </SwBtn>
  );
};

export default SwitcherBtn;
