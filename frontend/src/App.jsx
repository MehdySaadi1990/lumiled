import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import createGlobalStyle  from 'styled-components'
import Home from './pages/Home'

const GlobalStyle = createGlobalStyle`
div{
  font-family:'Lato', sans-serif;
}
`

function App() {
  return (
    <Router >
      <Routes >
      <Route path='/' element={<Home/>}/>
      </Routes >
    </Router>
  );
}

export default App;
