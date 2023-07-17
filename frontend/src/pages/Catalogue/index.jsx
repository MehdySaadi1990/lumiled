import styled from "styled-components"
import CatalogueCard from "../../components/CatalogueCard"
import ImgLiper from "../../assets/logo_liper.png"

const CatalogueArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
margin:20px 0;
`
function Catalogue() {
    return(
        <CatalogueArea>
            <CatalogueCard link="/Liper" img={ImgLiper} name="LIPER"/>
            <CatalogueCard link="/Line" img="" name="LINE"/>
        </CatalogueArea>
    )
}

export default Catalogue