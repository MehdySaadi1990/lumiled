import styled from "styled-components";

const PageArea = styled.div`
width:100%;
height:auto;
margin: 20px 0;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
@media all and (min-width:720px){
    flex-direction:row;
    justify-content:center;
}
`
const Img= styled.img`
width:200px;
height:200px;
object-fit:content;
@media all and (min-width:720px){
    width:400px;
    height:400px;
}
`
const InfoArea= styled.div`
width:70%;
height:auto;
margin: 20px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-weight:500;
@media all and (min-width:720px){
    width:30%;
    align-items:flex-start;
    font-size:17px;
}
`
const Info = styled.span`
width:100%
height:20px;
`
const DownloadBtn = styled.button`
width:100%;
height:auto;
margin:10px 0;
cursor:pointer;
font-weight:bold;
`

function getBasket() {
    const basket = localStorage.getItem('basket')
    return basket
}
function downloadPdf(data){
    var pdfUrl=data
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "fiche-technique-produit";
    link.click();
}
function TechPage(image) {
    const datas = JSON.parse(getBasket()) 
    return(
        <PageArea>
            <Img src={datas.image} alt=""/>
            <InfoArea>
                <Info>Type : {datas.type}</Info>
                <Info>Serie : {datas.serie}</Info>
                <Info>Puissance : {datas.power}</Info>
                <Info>Couleur Lumière: {datas.light_color}</Info>
                <Info>Etanchéité : {datas.etancheite}</Info>
                <Info>Materiau: {datas.couverture}</Info>
                <Info>Durée de vie: {datas.duree}</Info>
                {datas.sensor&&<Info>Sensibilité : {datas.sensor}</Info>}
                <DownloadBtn onClick={(e)=>{e.preventDefault()
                                            downloadPdf(datas.fiche_tech)}}>Télecharger la Fiche Techinique</DownloadBtn>
            </InfoArea>
        </PageArea>
    )
}

export default TechPage