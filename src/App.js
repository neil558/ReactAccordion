import React, { useState, useEffect } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions, SetQuestions] = useState([]);

  useEffect(() => {
    SetQuestions(data);
  }, [])

  return (
  
  <div className='container'>
    <h3>Questions and Answers</h3>
    <section className='info'>
      {
        questions.map((question) => {

          return (
            <SingleQuestion key={question.id} {...question } />
          )
        })
      }
    </section>
  </div>

  )
}

export default App;
