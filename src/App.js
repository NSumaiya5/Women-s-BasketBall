import './App.css';
import Team from './component/Team/Team';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
            <Header></Header>
            <Team></Team>
      </div>
  );
}

export default App;
