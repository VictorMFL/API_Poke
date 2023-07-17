// Style
import * as S from './styles/global'

// Components
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";

const App = () => {
  return (
    <S.Container>
      <Header />
      <MainPage />
    </S.Container>
  );
};

export default App;
