import styled from "styled-components";
import { FaPlus,  FaMinus  } from "react-icons/fa";
import { useState } from "react";


const CartElementArea = styled.div`
width:100%;
height:auto;
background-color:#ffffff;
border-bottom:1px solid black;
border-bottom-width:80%;
margin:10px 0;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
@media all and (min-width:720px){
width:50%;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
text-align:start
}
`

const ImageProduit = styled.img`
width:150px;
height:80%;
`
const BlocInfo = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:column`

const Info = styled.span`
width:70%;
display:flex;
justify-content: space-between;
align-items:center`

function getBasket() {
        const basket = localStorage.getItem('basket')
        if(basket == null){
            return []
        }else{
            return JSON.parse(basket)
        }
    }
    function saveBasket(basket) {
        localStorage.setItem("basket",JSON.stringify(basket))
    }

function CartElement({image, reference, designation, prix, quantite, id, setBasket}) {
    const [total, setTotal] = useState((prix*quantite).toLocaleString())
    const [quantity, setQuantity]=useState(quantite)
    function addQuantity(id) {
        const basket = getBasket()
        let findProduct = basket.find(p => p.id === id)
        if(findProduct !== undefined){
            findProduct.quantity += 1
            setTotal((prix*findProduct.quantity).toLocaleString()) 
            setQuantity(findProduct.quantity)
         }else{
            return null
        }
        saveBasket(basket)
        setBasket(basket)
    }
    function removeQuantity(id) {
        const basket = getBasket()
        let findProduct =  basket.find(p => p.id === id)
        if(findProduct !== undefined){
            findProduct.quantity -= 1
            if(findProduct.quantity <= 0){
                const updatedBasket = basket.filter(p => p.id !== id)
                saveBasket(updatedBasket)
                setBasket(updatedBasket)
            }else{
                setQuantity(findProduct.quantity)
                setTotal((prix*findProduct.quantity).toLocaleString()) 
                 saveBasket(basket)
                 setBasket(basket)
            }
         }else{
            return null
        }
    }
return(
    <CartElementArea>
        <ImageProduit src={image} alt=""/>
        <BlocInfo>
            <Info>Ref : {reference}</Info>
            <Info>Designation : {designation}</Info>
            <Info>Prix : {prix.toLocaleString()} fcfa</Info>
            <Info>Quantité : {quantity} <FaPlus style={{fontSize:"12px"}} onClick={()=>{addQuantity(id)}}/><FaMinus style={{fontSize:"12px"}} onClick={()=>{removeQuantity(id)}} /></Info>
            <Info>Total : {total} fcfa </Info>
        </BlocInfo>
    </CartElementArea>
)
}

export default CartElement