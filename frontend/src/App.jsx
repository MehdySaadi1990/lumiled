import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createGlobalStyle}  from 'styled-components'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/header/index'
import Footer from './components/footer'
import Catalogue from './pages/Catalogue'
import Liper from './pages/Liper'
import Line from './pages/Line'
import TechPage from './pages/TechPage'

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
      <Route path='/Catalogue' element={<Catalogue/>}/>
      <Route path='/Liper' element={<Liper/>}/>
      <Route path='/Line' element={<Line/>}/>
      <Route path='/TechPage' element={<TechPage/>}/>
      </Routes >
      <Footer/>
    </Router>
  );
}

export default App;
