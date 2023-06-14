import styled from "styled-components"
import ImgAmp from '../..//assets/ampoule.jpg'


const HomeArea = styled.div`
width:100%;
height:800px;
background:url(${ImgAmp});
background-size:cover;
background-position:center;
background-repeat:no-repeat;
`

function Home(){
    return(
        <HomeArea>
            
        </HomeArea>
    )
    
}

export default Home