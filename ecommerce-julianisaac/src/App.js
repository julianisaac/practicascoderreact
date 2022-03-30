import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemDetailContainer/>
      <br/><br/><br/>
      <ItemListContainer/>
    </div>    
  );
}

export default App;
