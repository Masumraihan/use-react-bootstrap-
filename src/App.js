
import './App.css';
import {Button} from 'react-bootstrap';
import TopNews from './components/TopNews/TopNews';


function App() {
  return (
    <div className="App">
       <Button variant="primary">Primary</Button>
       <TopNews></TopNews>
    </div>
  );
}

export default App;
