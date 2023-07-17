import styled from "styled-components"
import { Link } from "react-router-dom"

const CatalogueDiv=styled(Link)`
width:200px;
height:250px;
background-color:black;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
text-decoration:none;
`
const ImgCatalogue = styled.img`
width:100%;
height:75%;
object-fit:cover;
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