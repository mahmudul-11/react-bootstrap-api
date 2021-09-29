import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row } from 'react-bootstrap';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Row xs={1} md={3} className="g-4">
        <News></News>
      </Row>
    </div>
  );
}

export default App;
