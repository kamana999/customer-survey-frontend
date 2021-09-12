import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './component/header';
import Question from './component/question';
import Second from './component/2ndpage';

function App() {

  const [questions, setQuestion] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:8001/api/question/",{
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
      },
      
  })
      .then(resp => resp.json())
      .then(resp => setQuestion(resp))
      .then(error => console.log(error))
}, []);

  return (
    <React.Fragment>
          <Router>
          <Route exact path="/"> <Header/><Question /></Route>
          <Route path="/question"><Header/><Second questions={questions}/>
          </Route>
        </Router>
    </React.Fragment>
  );
}

export default App;
