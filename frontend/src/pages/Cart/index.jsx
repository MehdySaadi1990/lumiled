import styled from "styled-components"
import CartElement from "../../components/CartElement"
import { useState } from "react"

const CartArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center
`
function getBasket() {
        const basket = localStorage.getItem('basket')
        if(basket === null){
            return[]
        }else{
            return JSON.parse(basket)
        }
    }

function Cart() {
    const [datas, setDatas] = useState(getBasket())
    return(
            <div>
            <CartArea>
            {datas.map((data, index)=>(<CartElement key={index} image = {data.image} reference={data.ref} designation={data.type+" "+data.serie+" "+data.power} prix={parseFloat(data.price)} quantite={data.quantity} id={data.id} setBasket = {setDatas}/>))}

            </CartArea>
            </div>
    )
}

export default Cart