import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=de7004b87ecb40179856c783e4d0554d')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">

            {
              news.map(n => <News news={n}></News>)
            }

          </Row>


      }

    </div>
  );
}

export default App;
