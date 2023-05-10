import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import MyLibriary from './pages/MyLibriary/MyLibriary';
import Libriary from './pages/Libriary/Libriary';
import News from './pages/News/News';
import BookDetail from './pages/BookDetail/BookDetail';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/libriary' element={<Libriary/>}/>
            <Route path='/mylibriary' element={<MyLibriary/>}/>
            <Route path='/book/:id' element={<BookDetail/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
