import styled from "styled-components"
import ProductCard from "../../components/ProductCard"
import Datas from "../../assets/Data/data.json"

const LiperArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
@media all and (min-width:700px){
    height:600px;
    flex-direction:row
}`

function Liper() {
    const datas = Datas
    return(
        <LiperArea>
            {datas.map((data, index)=><ProductCard key={index} type={data.type} serie={data.serie} image={data.image} data={data}/>)}
        </LiperArea>
    )
}

export default Liper