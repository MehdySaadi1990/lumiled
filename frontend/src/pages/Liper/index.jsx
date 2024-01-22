import styled from "styled-components"
import ProductCard from "../../components/ProductCard"
import Datas from "../../assets/Data/dataLiper.json"
import { useState } from "react"

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


function Liper() {
    const datas = Datas
    const [type, setType] = useState("Projecteur")
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
                setType("Panel")}}>Panel</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Projecteur Solaire")}}>Luminaires Solaires</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Cloches")}}>Luminaires Industriels</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Lampadaire")}}>Eclairage Urbain</Type>
            </TypeArea>
            <ProductArea>
            {datas.map((data, index)=>type===data.type&&<ProductCard key={index} type={data.type} serie={data.serie} image={data.image} data={data}/>)}
            </ProductArea>
        </LiperArea>
    )
}

export default Liper