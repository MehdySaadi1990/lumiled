import styled from "styled-components"

const AboutArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center`

const AboutTitle=styled.h1`
text-align:center;
`
const AboutSubTitle=styled.h2`
text-align:center;
`
const AboutText = styled.span`
width:95%;
font-size:20px;
font-weight:500;
`

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
        </AboutArea>
    )
}

export default About