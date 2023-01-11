import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      {/* каркас сайта */}
      <Route path='/' element={<Layout />}> 
      {/* главная страница  */}
        <Route index element={<MainPage />}/>
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='categories/:category' element={<ProductsPage />} />
      </Route>
    </Routes>
     
 
  );
}

export default App;
