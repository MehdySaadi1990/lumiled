import styled from "styled-components"


const ProductCardArea= styled.div`
width:200px;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
text-decoration:none;
`
const ImgProduct=styled.img`
width:100%;
height:75%;
object-fit:cover;
`

function ProductCard(params) {
    return(
        <ProductCardArea>
            <ImgProduct src="" alt=""/>
        </ProductCardArea>
    )
}

export default ProductCard