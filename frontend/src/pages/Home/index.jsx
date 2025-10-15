import styled from "styled-components"
import { useState } from "react"
import ConnexionModal from "../../components/ConnexionModal"
import image1 from "../../assets/ambiance.jpg"
import image2 from "../../assets/jardin_lumi.jpg"
import image3 from "../../assets/ampoule.jpg"
import image4 from "../../assets/lumiere.jpg"
const HomeArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
overflow:hidden;
`
const FirstSectionArea = styled.section`
width:100%;
height:auto;
padding:50px;
display:flex;
justify-content:center;
align-items: center;
text-align:center;
color: #FFFFFF;
background-image: url(${image1});
background-size:cover;
background-repeat: no-repeat;
background-position: center;
`

const Title = styled.h1`
font-weight: 700;
font-size: 3.25rem;
line-height: 2.5rem;
`
const ButtonProduct = styled.button`
width:50%;
height:70px;
font-size: 1rem;
font-weight:bold;
background-color: #f7d200;
box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
border-radius: 9999px;
transition : transform 1000ms;
cursor pointer;
&:hover{
transform : scale(1.1)
}
`

const SecondSectionArea = styled.section`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
text-align : center;
font-size:1.2rem
`
const ThirdSectionArea = styled.section`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
text-align:center;
`

const Bloc1 = styled.div`
width:300px;
height:300px;
margin:50px 0;
box-shadow:0px 5px rgba(220, 222, 226, 1);
border-radius:5px
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
border-radius:5px;
`
const CollectionName = styled.span`
height:50px;
position:relative;
bottom:25%;
right:20%;
color:#FFFFFF;
font-size:1.5rem;
font-weight:700
`
const FourthSectionArea = styled.section`
width:100%;
height:auto;
display:flex;
background-color:rgb(243, 244, 246);
flex-wrap:wrap;
justify-content:center;
align-items:center;
text-align:center;
margin-top:50px;
`
const Bloc2 = styled.div`
width:250px;
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
margin:50px 50px;
background-color:rgb(255, 255, 255);
box-shadow:0px 5px rgba(170, 167, 167, 1);
border-radius:5px;
`
const Icons = styled.span`
font-size:3rem`

function Home(){
    const[modal, setModal]=useState(false)
    return(
        <HomeArea>
        <FirstSectionArea>
        <div>
            <Title>Illuminez vos espaces</Title>
            <p>Découvrez notre collection exclusive de luminaires design</p>
            <ButtonProduct onClick={()=>{
                setModal(!modal)
            }}>Voir nos produits</ButtonProduct>
        </div>
        </FirstSectionArea>
        <SecondSectionArea>
        <div>
            <h2>Nos Collections</h2>
            <p>Des luminaires d'exception pour tous les styles</p>
        </div>  
        </SecondSectionArea>   
        <ThirdSectionArea>
        <Bloc1>
            <Image src={image2} alt="" />
            <CollectionName>Exterieur</CollectionName>
        </Bloc1>
        <Bloc1>
            <Image src={image3} alt="" />
            <CollectionName>Interieur</CollectionName>
        </Bloc1>
        <Bloc1>
            <Image src={image4} alt="" />
            <CollectionName>Décoratif</CollectionName>
        </Bloc1>
        </ThirdSectionArea>
        <FourthSectionArea>
            <Bloc2>
            <Icons>🏠</Icons>
            <h3>Conseil Personnalisé</h3>
            <span>Nos experts vous accompagnent dans le choix de vos luminaires</span>
            </Bloc2>
            <Bloc2>
            <Icons>🔧</Icons>
            <h3>Installation</h3>
            <span>Service d'installation professionnel à domicile</span>
            </Bloc2>
            <Bloc2>
            <Icons>🚚</Icons>
            <h3>Livraison Gratuite</h3>
            <span>Livraison offerte dès 50 000 fcfa d'achat sur Lomé</span>
            </Bloc2>
        </FourthSectionArea>
        <ConnexionModal modal={modal} setModal ={setModal}/>
        </HomeArea>
        
    )
    
}

export default Home