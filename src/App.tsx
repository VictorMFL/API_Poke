// Style
import * as S from './styles/global'

// Components
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import PaginationControl from './components/paginationControl/Pagination';

const App = () => {
  return (
    <S.Container>
      <Header />
      <MainPage />
      <PaginationControl />
    </S.Container>
  );
};

export default App;
