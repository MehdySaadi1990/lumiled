import { ImMenu3 } from "react-icons/im"
import styled, { keyframes } from "styled-components"
import { useContext, useState } from "react"
import ImgLogo from '../../assets/logo.png'
import { Link } from "react-router-dom"
import ConnexionModal from "../ConnexionModal"
import { LoginContext } from "../../utils/context"
import { AdminContext } from "../../utils/context"

const BorderGrow = keyframes`
0%{
    border-bottom:0px solid #f7d200;
}
50%{
    border-bottom:1px solid #f7d200;
}
100%{
    border-bottom:3px solid #f7d200;
}
`
const HeaderArea = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
@media all and (min-width:720px){
    height:auto;
    align-items:flex-end;
 }
`

const Logo = styled.img`
width:250px;
height:120px;
@media all and (min-width:720px){
    width:300px;
    height:150px;
 }
`
const IconMenu=styled.span`
width:20%;
text-align:right;
@media all and (min-width:720px){
   display:none;
}
`

const NavBar = styled.nav`
width:100%;
height:auto;
display:flex;
justify-content:center; 
align-items:center;  
@media all and (min-width:720px){
    width:100%;
}
`

const NavList = styled.ul`
display:none;
${props=>props.$openList===true&&`
 width:30%;
padding:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media all and (min-width:720px){  
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
}`
};
@media all and (min-width:720px){  
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:flex-end;
}
`
const NavSection = styled(Link)`
width:100%;
height:45px;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
list-style-type:none;
cursor:pointer;
font-weight:500;
color:black;
text-decoration:none;
&:hover{
    animation:${BorderGrow};
    animation-duration:110ms;
    animation-fill-mode:both;
    animation-timing-function:linear;
    @media all and (min-width:720px){  
         color:black;
    }
};
    @media all and (min-width:720px){  
    width:15%;
}
`
const ConnexionBtn = styled.button`
width:100%;
height:45px;
display:flex;
justify-content:center;
align-items:center;
text-align-center;
font-weight:bold;
background-color:#f7d200;
border:none;
cursor:pointer;
@media all and (min-width:720px){  
    width:15%;
}
`

const style = {width:'40px', height:'40px', cursor: 'pointer'}

function Header() {
    const [openMenu, setOpenMenu]=useState(false)
    const [modal, setModal]= useState(false)
    const {login, toggleLogin}= useContext(LoginContext)
    const {admin, toggleAdmin}=useContext(AdminContext)


    return(
        <HeaderArea>
            <Logo src={ImgLogo} alt=""/>
            <IconMenu>
                <ImMenu3 style={style} onClick={(e)=>{
                setOpenMenu(!openMenu)
                }}/>
                </IconMenu>
            <NavBar>
                <NavList $openList={openMenu}>
                    <NavSection to='/'>Accueil</NavSection>
                    {admin&&<NavSection to='/Administration'>Administration</NavSection>}
                    {login&&<NavSection to='/Catalogue'>Catalogue</NavSection>}
                    <NavSection to='/About'>A propos</NavSection>
                    <NavSection to=''>Contact</NavSection>
                    {login?<ConnexionBtn onClick={()=>{
                                            setModal(!modal)
                                            toggleLogin()
                                            if(admin===true){
                                                toggleAdmin()
                                            }
                                            localStorage.removeItem('token')
                    }}>Déconnexion</ConnexionBtn>:
                            <ConnexionBtn onClick={()=>setModal(!modal)}>Connection</ConnexionBtn>}
                </NavList>
            </NavBar>
            <ConnexionModal modal={modal} setModal ={setModal}/>
        </HeaderArea>
    )
}

export default Header