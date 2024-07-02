import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const CatalogueDiv=styled.div`
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
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/product');
            const data = await response.json();
            setProducts(data);
            localStorage.setItem('datas', JSON.stringify(data))
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
        }
    }
    return(
            <CatalogueDiv>
                <ImgCatalogue onClick={async (e)=>{
                    e.preventDefault()
                    await fetchProducts() 
                    navigate('/Liper') 
                }} src={img} alt=""/>
                <TextCatalogue>Luminaires domestiques/industriels {name}</TextCatalogue>
            </CatalogueDiv>
    )
}

export default CatalogueCard