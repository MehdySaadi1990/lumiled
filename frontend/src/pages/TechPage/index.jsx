import styled from "styled-components";

const PageArea = styled.div`
width:100%;
height:auto;
margin: 20px 0;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
const Img= styled.img`
width:70%;
height:auto;
object-fit:cover
`
const InfoArea= styled.div`
width:70%;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Info = styled.span`
width:100%
height:20px;
`
function getBasket() {
    const basket = localStorage.getItem('basket')
    return basket
}
function TechPage(image) {
    const datas = JSON.parse(getBasket()) 
    return(
        <PageArea>
            <Img src={datas.image} alt=""/>
            <InfoArea>
                <Info>Type : {datas.type}</Info>
                <Info>Serie :{datas.serie}</Info>
                <Info>Puissance :{datas.power}</Info>
                <Info>Luminosité :</Info>
                <Info>Rayon d'action :</Info>
                <Info>CRI:</Info>
                <Info>Durée de vie:</Info>
            </InfoArea>
        </PageArea>
    )
}

export default TechPage