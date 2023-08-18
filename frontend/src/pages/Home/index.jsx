import styled, { keyframes } from "styled-components"
import ImgAmp from '../../assets/ampoule.jpg'
import ImgSalon from '../../assets/salon_lumiere.webp'
import ImgLum from '../../assets/lumiere.jpg'
import ImgJardin from '../../assets/jardin_lumi.jpg'

const ImgChange = keyframes`
0%{
    background:url(${ImgAmp});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    filter:brightness(1);
}
33%{
    background:url(${ImgSalon});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    filter:brightness(2);
}
66%{
    background:url(${ImgLum});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    filter:brightness(1.2);
}
100%{
    background:url(${ImgJardin});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    filter:brightness(1.2);
}
`
const HomeArea = styled.div`
width:100%;
height:auto;
background-color:#000000;
border-bottom:1px solid #FFFFFF;
`

const ImgArea = styled.div`
width:100%;
height:600px;
animation:${ImgChange} 30s infinite ease-in-out both;
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
        <ImgArea/>         
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