import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HomeComponent /> */}
    <QuizComponent />
    {/* <ResultComponent /> */}
  </React.StrictMode>,
)
