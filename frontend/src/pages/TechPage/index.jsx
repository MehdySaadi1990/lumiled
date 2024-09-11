import styled from "styled-components";
import { useFetch } from "../../utils/fetchDatas";

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
function getToken(){
    const token = localStorage.getItem('token')
    return token
}
function TechPage(image) {
    const datas = JSON.parse(getBasket()) 
    const token = getToken()
    const fileName = datas.fiche_tech.split("/")[4]
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
                                            .catch(err=>console.log(err))}}>Télecharger la Fiche Technique</DownloadBtn>
            </InfoArea>
        </PageArea>
    )
}

export default TechPage