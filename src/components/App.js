import logo from '../logo.svg';
import './App.css';
import Name from './header/Name';
import Title from './header/Title';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title/>
      </header>
      <Name/>
    </div>
  );
}

export default App;
