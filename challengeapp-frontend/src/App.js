import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>First React App</h1>
        <Greeting name="dev43" message="Hello"/>
      </header>
    </div>
  );
}

export default App;
