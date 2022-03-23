import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Mi primera app en react"}/>
    </div>    
  );
}

export default App;
