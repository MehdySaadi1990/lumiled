import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createGlobalStyle}  from 'styled-components'
import Home from './pages/Home'
import Header from './components/header'

const GlobalStyle = createGlobalStyle`
div{
  font-family:Lato, sans-serif;
}
`

function App() {
  return (
    <Router >
      <GlobalStyle/>
      <Header/>
      <Routes >
      <Route path='/' element={<Home/>}/>
      </Routes >
    </Router>
  );
}

export default App;
