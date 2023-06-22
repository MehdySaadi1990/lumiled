import styled from "styled-components"

const FooterArea = styled.div`
width:100%;
height:auto;
padding:25px 0;
background-color:#000000;
display:flex;
justify-content:center;
`
const FooterText= styled.p`
width:80%;
height:auto;
color:#FFFFFF;
font-size:15px;
text-align:left;
`

function Footer() {
    return(
    <FooterArea>
        <FooterText>Adresse : Avenue de Calais - NYEKONAKPOE <br />
                    E-mail : mehdy.saadi.dk@gmail.com <br />
                    Tel : 00228 96 36 56 26 - 99 32 37 92 <br />
                    Facebook : Lumiled Togo <br />
                    Instagram  : Lumiled Togo</FooterText>
    </FooterArea>
        
        
    )
    
}

export default Footer