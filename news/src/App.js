import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      .then(res => res.json())
      .then(data => setNews(data.meals))
  }, [])
  return (
    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">

            {
              news?.map(n => <News key={n.idMeal} news={n}></News>)
            }

          </Row>


      }

    </div>
  );
}

export default App;
