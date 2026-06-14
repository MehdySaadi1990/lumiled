import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { IsLogin } from './utils/context'
import { IsAdmin } from './utils/context'
import {createGlobalStyle}  from 'styled-components'
import PrivateRoutes from './components/PrivateRoute/PrivateRoute'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Header from './components/header/index'
import Footer from './components/footer'
import Items from './pages/Items'
import TechPage from './pages/TechPage'
import SignIn from './pages/SignIn'
import AdminRoutes from './components/AdminRoutes'
import Administration from './pages/Administration'
import UserManagement from './pages/UserManagement'
import ItemManagement from './pages/ItemManagement'

const GlobalStyle = createGlobalStyle`
div{
  font-family:Lato, sans-serif;
}
`

function App() {
  return (
    <Router >
      <IsLogin>
      <IsAdmin>
      <GlobalStyle/>
      <Header/>
      <Routes>
      <Route path='/lumiled/' element={<Home/>}/>
      <Route path='/lumiled/About' element={<About/>}/>
      <Route element={<PrivateRoutes/>}>
          <Route path='/lumiled/Items' element={<Items/>}/>
          <Route path='/lumiled/TechPage' element={<TechPage/>}/>
          <Route path='/lumiled/Cart' element={<Cart/>}/>
      </Route>
      <Route element={<AdminRoutes/>}>
          <Route path='/lumiled/Administration' element={<Administration/>}/>
          <Route path='/lumiled/UserManagement' element={<UserManagement/>}/>
          <Route path='/lumiled/ItemManagement' element={<ItemManagement/>}/>
      </Route>
      <Route path='/lumiled/SignIn' element={<SignIn/>}/>
      </Routes>
      <Footer/>
      </IsAdmin>
      </IsLogin>
    </Router>
  );
}

export default App;
