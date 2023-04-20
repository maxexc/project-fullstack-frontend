import Header from './Header';
import Footer from './Footer';

import { AppBox } from './App.styled';

 
export const App = props => {
  return (
    <AppBox>
      <Header />

      <Footer />
    </AppBox>
  );
};

