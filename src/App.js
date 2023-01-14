import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <ItemListContainer greeting='Bienvenidos'/>
    </div>
  );
}

export default App;
