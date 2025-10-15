import styled from "styled-components"
import ProductCard from "../../components/ProductCard"
import { useState } from "react"
import { useFetch } from "../../utils/fetchDatas"

const LiperArea = styled.div`
width:100%;
min-height:700px;
margin: 20px 0;
display:flex;
justify-content:center;
`
const TypeArea = styled.div`
width:20%;
height:100%;
margin: 20px 0;
`
const Type = styled.span`
width:100%;
height:50px;
&:hover{
    color:#f7d200;
    cursor:pointer;
};
`

const DomainType = styled.div`
span{
    display:none;
};
&:hover{
    span{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:flex-start;
    }
}

`
const BigType = styled.h3`
text-align:center;
cursor:pointer;
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
    const [type, setType] = useState("Projecteur")
    const [brand, setBrand] = useState("exterieur")
    const token = localStorage.getItem('token')
    const {datas}= useFetch('http://localhost:5000/api/product/',token)
    const products = datas
    return(
        <LiperArea>
                <TypeArea>
                <DomainType>
                <BigType>Exterieur</BigType>
                <Type  onClick={(e)=>{e.preventDefault()
                setType("Projecteur")
                setBrand("exterieur")
                }}>Projecteur</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Spot")
                setBrand("exterieur")
                }}>Spots Etanches</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Plafonnier")
                setBrand("exterieur")
                }}>Plafonniers Etanches</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Applique murale")
                setBrand("exterieur")
                }}>Appliques Murales Etanches</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Reglette")
                setBrand("exterieur")
                }}>Reglettes Etanches</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Ruban")
                setBrand("exterieur")
                }}>Rubans LED</Type>
                </DomainType>
                <DomainType>
                <BigType>Interieur</BigType>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Ruban")
                setBrand("interieur")
                }}>Rubans LED</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Spot")
                setBrand("interieur")
                }}>Spots Interieurs</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Plafonnier")
                setBrand("interieur")
                }}>Plafonniers Interieurs</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Reglette")
                setBrand("interieur")
                }}>Reglettes Interieures</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Magnetique")
                setBrand("interieur")
                }}>Luminaires Magnétiques</Type>
                </DomainType>
                <DomainType>
                <BigType>Décoratifs</BigType>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Lustre")
                setBrand("decoratif")
                }}>Lustres</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Lampes de table")
                setBrand("decoratif")
                }}>Lampes de tables</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Plafonnier")
                setBrand("decoratif")
                }}>Plafonniers decoratifs</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Lampadaire")
                setBrand("decoratif")
                }}>Lampadaires décoratifs</Type>
                </DomainType>
                <DomainType>
                <BigType>Solaire</BigType>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Projecteur")
                setBrand("solaire")
                }}>Projecteurs Solaires</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Lampadaire")
                setBrand("solaire")
                }}>Lampadaires Solaires</Type>
                <Type onClick={(e)=>{e.preventDefault()
                setType("Applique murale")
                setBrand("solaire")}}>Appliques murales solaires</Type>
                </DomainType>
            </TypeArea>
            <ProductArea>
            {products.map((product, index)=>(product.brand === brand & product.type === type?<ProductCard key={index} type={product.type} serie={product.serie} image={product.image} data={product} power={product.power} cct={product.light_color}/>:null))}
            </ProductArea>
        </LiperArea>
    )
}

export default Liper