import styled from "styled-components";
import { keyframes } from "styled-components";

const FadeIn = keyframes`
0%{opacity:0}
100%{opacity:1}
`

const PageArea = styled.div`
width:100%;
height:auto;
margin: 20px 0;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
animation : ${FadeIn} 500ms ease-in;
@media all and (min-width:720px){
    width:100%;
    height:auto;
    flex-direction:row
};
`
const ImageArea = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Img= styled.img`
width:200px;
height:200px;
object-fit:content;
transition: transform 1000ms;
@media all and (min-width:720px){
    width:400px;
    height:400px;
};
&:hover{
transform : scale(1.3)
}
`
const InfoArea= styled.div`
width:60%;
height:auto;
margin: 20px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-wrap:wrap;
@media all and (min-width:720px){
  width:100%;
  flex-direction:row;  
}
`
const Info = styled.span`
width:100%;
height:150px;
margin: 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10px;
font-size:17px;
font-weight:700;
background-color:rgba(245, 237, 237, 1);
color:rgba(0, 20, 0, 1);
text-align:center;
@media all and (min-width:720px){
  width:30%;  
}
`
const Icon = styled.span`
font-size:40px;
margin-bottom:10px`
const BtnArea = styled.div`
width:100%;
height:150px;
margin:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
@media all and (min-width:720px){
  width:30%;  
}
`
const Btn = styled.button`
width:100%;
height:50px;
cursor:pointer;
font-weight:bold;
background-color:#f7d200;
border-radius:10px;
border: none
`

function getProduct() {
    const basket = localStorage.getItem('product')
    return basket
}
function getToken(){
    const token = localStorage.getItem('token')
    return token
}
function getBasket() {
    const basket = localStorage.getItem('basket')
    if(basket == null){
        return []
    }else{
        return JSON.parse(basket)
    }
}
const saveBasket = (basket) =>{
    localStorage.setItem("basket",JSON.stringify(basket))
}
async function addItem(item) {
    const basket = await getBasket()
    let findProduct = await basket.find(p => p.id === item.id)
   if(findProduct !== undefined){
    findProduct.quantity += 1
   }else{
    item.quantity = 1
    basket.push(item)
   }
   saveBasket(basket)
} 
    

function TechPage(image) {
    const datas = JSON.parse(getProduct()) 
    const token = getToken()
    const fileName = datas.fiche_tech.split("/")[4]
    return(
        <PageArea>
            <ImageArea>
            <h1>{datas.type} {datas.serie}</h1>
            <Img src={datas.image} alt=""/>
            </ImageArea>
            <InfoArea>
                <Info>
                    <Icon>⚡</Icon>
                    Puissance <br />
                    {datas.power}</Info>
                <Info>
                    <Icon>💡</Icon>
                    Couleur Lumière <br />
                    {datas.light_color}</Info>
                <Info>
                    <Icon>🛡️</Icon>
                    Etanchéité <br /> 
                    {datas.etancheite}</Info>
                <Info>
                    <Icon>🔨</Icon>
                    Materiau <br />
                    {datas.couverture}</Info>
                <Info>
                    <Icon>🕒</Icon>
                    Durée de vie <br />
                    {datas.duree}</Info>
                {datas.sensor&&<Info>Sensibilité : {datas.sensor}</Info>}
                <BtnArea>
                <Btn onClick={(e)=>{e.preventDefault()
                                            fetch(`http://localhost:5000/api/product/pdf/${fileName}`,
                                                {   method:'GET',
                                                    headers:{
                                                        'Authorization':`Bearer ${token}`,
                                                },
                                                    responseType: 'blob'}
                                            )
                                            .then(res => {
                                                if (!res.ok) {
                                                    throw new Error('Erreur lors du téléchargement du fichier : ' + res.statusText);
                                                }
                                                return res.blob();
                                            })
                                            .then(blob => {
                                                const url = window.URL.createObjectURL(blob);
                                                console.log("URL du fichier PDF :", url);
                                            
                                                const link = document.createElement('a');
                                                link.href = url;
                                                link.setAttribute('download', "fiche_technique.pdf");
                                                document.body.appendChild(link);
                                                link.click();
                                                link.remove();
                                            })
                                            .catch(err=>console.log(err))}}>Télécharger Fiche Technique</Btn>
                <Btn onClick={()=>{addItem(datas)}}>Ajouter au panier</Btn>
                </BtnArea>
                                            </InfoArea>
            
        </PageArea>
    )
}

export default TechPage