import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<ItemListContainer/>}/>
        <Route path = '/category/:id' element = {<ItemListContainer/>} />
        <Route path = '/item/:id' element = {<ItemDetailContainer/>} />
        <Route path = '/Cart' element = {<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
