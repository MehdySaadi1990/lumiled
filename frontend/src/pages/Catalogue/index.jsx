import styled from "styled-components"
import CatalogueCard from "../../components/CatalogueCard"
import ImgLiper from "../../assets/logo_liper.png"
import ImgLine from "../../assets/line_logo.png"

const CatalogueArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
margin:20px 0;
@media all and (min-width:700px){
    height:600px;
    flex-direction:row
}
`
function Catalogue() {
    return(
        <CatalogueArea>
            <CatalogueCard link="/Liper" img={ImgLiper} name="LIPER"/>
            <CatalogueCard link="/Line" img={ImgLine} name="LINE"/>
        </CatalogueArea>
    )
}

export default Catalogue