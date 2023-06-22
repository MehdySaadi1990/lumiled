import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createGlobalStyle}  from 'styled-components'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/header/index'
import Footer from './components/footer'

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
      <Route path='/About' element={<About/>}/>
      </Routes >
      <Footer/>
    </Router>
  );
}

export default App;
