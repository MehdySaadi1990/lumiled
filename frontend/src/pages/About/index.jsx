import styled from "styled-components"
import ImageBtq from "../../assets/boutique.jpg"
import Delanov from "../../assets/delanov.jpeg"
import Clement from "../../assets/clement.jpeg"
import Aguy from "../../assets/aguy.jpeg"
import Stephan from "../../assets/stephan.jpeg"
import Mehdy from "../../assets/mehdy.jpeg"

const AboutArea = styled.div`
width:100%;
height:auto;
padding:20px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`

const AboutTitle=styled.h1`
width:90%;
text-align:center;
`
const AboutSubTitle=styled.h2`
width:90%;
text-align:center;
`
const AboutText = styled.span`
width:80%;
font-size:20px;
font-weight:500;
margin-bottom:20px;
`
const BlocArea = styled.div`
width:90%;
height:auto;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
@media(min-width:720px){
flex-direction row;
}
`

const Image1 = styled.img`
width:30%;
height:300px;
border :2px ridge #c5c3c3ff;
border-radius:10px;
margin:10px;
`
const BlocPhoto = styled.div`
width:200px;
height:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px 10px;
`
const Image2 = styled.img`
width:200px;
height:300px;
border:2px ridge #c5c3c3ff;
object-fit:cover;
border-radius: 10px
`
const NameTeam = styled.span`
width:100%;
height:50px;
font-size:1.3rem;
font-weight:400;
margin:10px 0;`

function About() {
    return(
        <AboutArea>
            <AboutTitle>Lumin'Art</AboutTitle>
            <AboutSubTitle>Le spécialiste du luminaire sur Lomé et au Togo</AboutSubTitle> 
            <AboutText>
                Etabli depuis 2017, la société LUMILED s'est d'abord spécialisée 
                dans la distribution de luminaires LED à Lomé et par la suite dans
                le reste Togo. A travers ses 2 marques principales, LIPER et LINE,
                elle a su procurer à chacun de ses clients la qualité et la durabilité de 
                ses luminaires mais aussi un service après-vente de qualité. 
                En 2023, son nouveau showroom de luminaires industriels et domestiques 
                ouvre ses portes sur l'avenue de Calais dans le quartier de NYEKONAKPOE à Lomé.
                Vous pouvez donc nous retrouver à notre adresse avec le plan suivant.
            </AboutText>
            <BlocArea>
            <iframe title="map" width="30%" height="300px" style={{borderRadius:"10px"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Avenue%20de%20Calais+(Lumin'Art)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
            <Image1 src={ImageBtq} alt="image boutique"/>
            </BlocArea>
            <AboutSubTitle>NOTRE EQUIPE</AboutSubTitle>
            <AboutText>Retrouvez en boutique et sur le terrain, une équipe fiable et professionnelle toujours prête à
                 vous conseiller et trouver pour vous la meilleure solution luminaire</AboutText>
            <BlocArea>
                <BlocPhoto >
                    <Image2 src={Mehdy} alt="image Med"/>
                    <NameTeam>Mehdy Directeur Général</NameTeam>
                </BlocPhoto>
                <BlocPhoto>
                    <Image2 src={Delanov} alt="image Delanov"/>
                    <NameTeam>Delanov Commercial B to B</NameTeam>
                </BlocPhoto>
                <BlocPhoto>
                    <Image2 src={Clement} alt="image Clement"/>
                    <NameTeam>Clément Commercial B to B</NameTeam>
                </BlocPhoto>
                <BlocPhoto>
                    <Image2 src={Aguy} alt="image Aguy"/>
                    <NameTeam>Aguy Responsable Boutique</NameTeam>
                </BlocPhoto>
                <BlocPhoto>
                    <Image2 src={Stephan} alt="image Stephan"/>
                    <NameTeam>Stephan Responsable Livraison</NameTeam>
                </BlocPhoto>
            </BlocArea>
        </AboutArea>
    )
}

export default About