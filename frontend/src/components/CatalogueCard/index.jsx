import styled from "styled-components"
import { Link } from "react-router-dom"

const CatalogueDiv=styled(Link)`
width:200px;
height:250px;
margin:10px 0;
border-radius:5px;
background-color:black;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
text-decoration:none;
border:1px solid black;
transform:scale(0.9);
box-shadow: 2px 3px 5px -1px rgba(0,0,0,0.75);
&:hover{
    transform:scale(1);
    transition: transform ease-in 300ms;
}
`
const ImgCatalogue = styled.img`
width:100%;
height:75%;
object-fit:cover;
border-radius: 5px 5px 0 0;
&:hover{
    filter:brightness(0.8)
}
`
const TextCatalogue=styled.span`
width:100%;
height:auto;
color:white;
text-align:center;`

function CatalogueCard({link, img, name}) {
    return(
            <CatalogueDiv to={link}>
                <ImgCatalogue src={img} alt=""/>
                <TextCatalogue>Luminaires domestiques/industriels {name}</TextCatalogue>
            </CatalogueDiv>
    )
}

export default CatalogueCard