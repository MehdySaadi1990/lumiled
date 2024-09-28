import styled from "styled-components"
//import Datas from "../../assets/Data/dataLine.json"
import { useState } from "react"
//import { useEffect } from "react"
import {useFetch} from "../../utils/fetchDatas"
import ProductCard from "../../components/ProductCard"

const LiperArea = styled.div`
width:100%;
height:auto;
margin: 20px 0;
display:flex;
justify-content:center;
`
const TypeArea = styled.div`
width:20%;
height:100%;
margin: 20px 0;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
const Type = styled.span`
width:100%;
height:50px;
&:hover{
    color:#f7d200;
    cursor:pointer;
}
`
const ProductArea = styled.div`
width:70%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
@media all and (min-width:700px){
    height:auto;
    flex-direction:row;
    flex-wrap:wrap;
}
`


function Line() {
    const [type, setType] = useState("Projecteur")
    const token = localStorage.getItem('token')
    const {datas, error} = useFetch('http://localhost:5000/api/product/', token)
    const products = datas

    return(
        <LiperArea>
            <TypeArea>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Projecteur")}}>Projecteur</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Spot")}}>Spots</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Applique")}}>Appliques Apparentes</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Reglette")}}>Reglettes</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Ampoule")}}>Ampoule</Type>
            </TypeArea>
            <ProductArea>
                {products.map((product, index)=>(product.brand === 'line' & product.type === type?<ProductCard key={index} type={product.type} serie={product.serie} image={product.image} data={product}/>:null))}
            </ProductArea>
        </LiperArea>
    )
}

export default Line