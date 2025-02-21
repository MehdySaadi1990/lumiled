import styled, { keyframes } from "styled-components"
import ImgAmp from '../../assets/ampoule.jpg'
import ImgSalon from '../../assets/salon_lumiere.webp'
import ImgLum from '../../assets/lumiere.jpg'
import ImgJardin from '../../assets/jardin_lumi.jpg'

const ImgChange = keyframes`
0%{
    transform:translate(0,0)
}
100%{
    transform:translate(-100%,0)
}
`
const HomeArea = styled.div`
width:100%;
min-height:800px;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
background-color:#000000;
border-bottom:1px solid #FFFFFF;
overflow-x:hidden;
`

const ImgArea = styled.div`
width:100%;
height:600px;
display:flex;
animation:${ImgChange} 15s infinite linear;
`
const Img = styled.img`
width:50%
`
const MessageArea = styled.div`
width:100%;
height:140px;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
`

const Message = styled.span`
width:auto;
font-size:25px;
color:white;
cursor:pointer;
`

function Home(){
    return(
        <HomeArea>
        <ImgArea>
        <Img src={ImgAmp}/>
        <Img src={ImgJardin}/>
        <Img src={ImgSalon}/> 
        <Img src={ImgLum}/>
        </ImgArea>      
        <MessageArea>
        <Message id="message 0" >Economie</Message>
        <Message id="message 1" >Adaptabilité</Message>
        <Message id="message 2" >Elégance</Message>
        <Message id="message 3" >Intelligence</Message>
        </MessageArea>
        </HomeArea>
        
    )
    
}

export default Home