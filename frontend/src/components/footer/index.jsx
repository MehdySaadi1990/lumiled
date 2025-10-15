import styled from "styled-components"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const FooterArea = styled.div`
width:100%;
height:auto;
padding:50px 0;
color:#FFFFFF;
background-color:#000000;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
`
const FooterText= styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;
font-size:15px;
text-align:center;
line-height:30px;
`
const Link = styled.a`
color:#FFFFFF;
text-decoration:none;
cursor:pointer
`

function Footer() {
    return(
    <FooterArea>
        <h3>💡 Lumin'Art, votre spécialiste en éclairage</h3>
        <FooterText>
            <div>
            <h4>Produits</h4>
                <span>Lumières Exterieures</span><br />
                <span>Lumières Interieures</span><br />
                <span>Lumières Décoratives</span>
            </div>
            <div>
            <h4>Services</h4>
                <span>Conseils</span><br />
                <span>Installation</span><br />
                <span>Livraison</span>
            </div>
            <div>
               <h4>Suivez-nous</h4>
                <Link href="www.facebook.com"><FaFacebookF /> Facebook</Link><br />
                <Link href="www.instagram.com"><FaInstagram /> Instagram</Link><br />
                <Link href="www.tiktok.com"><FaTiktok/> Tiktok</Link> 
            </div>
        </FooterText>
    </FooterArea>
        
        
    )
    
}

export default Footer