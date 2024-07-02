import styled from "styled-components"
import { Link } from "react-router-dom"

const ProductCardArea= styled(Link)`
width:200px;
height:250px;
margin:10px 0;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
text-decoration:none;
cursor:pointer;
transform:scale(0.9);
&:hover{
    transform:scale(1);
    transition: transform ease-in 300ms;
}
`
const ImgProduct=styled.img`
width:100%;
height:75%;
object-fit:cover;
border-radius:5px 5px 0 0;
&:hover{
    filter:brightness(0.8)
}
`
const DescriptionArea=styled.span`
width:100%;
height:25%;
color:black;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
border-radius:0 0 5px 5px;
text-align:center
`
function saveBasket(data) {
    const basket =  localStorage.setItem('basket', JSON.stringify(data))
    return basket   
 }

function ProductCard({type, serie, image, data}) {
    return(
        <ProductCardArea to="/TechPage" onClick={()=>
            saveBasket(data)}>
            <ImgProduct src={image} alt=""/>
            <DescriptionArea>{type} {serie}</DescriptionArea>
        </ProductCardArea>
    )
}

export default ProductCard