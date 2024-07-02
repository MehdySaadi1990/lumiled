import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { IsLogin } from './utils/context'
import {createGlobalStyle}  from 'styled-components'
import PrivateRoutes from './components/PrivateRoute/PrivateRoute'
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
      <IsLogin>
      <GlobalStyle/>
      <Header/>
      <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route element={<PrivateRoutes/>}>
          <Route path='/Liper' element={<Liper/>}/>
          <Route path='/Line' element={<Line/>}/>
          <Route path='/TechPage' element={<TechPage/>}/>
      </Route>
      <Route path='/Catalogue' element={<Catalogue/>}/>
      </Routes >
      <Footer/>
      </IsLogin>
    </Router>
  );
}

export default App;
