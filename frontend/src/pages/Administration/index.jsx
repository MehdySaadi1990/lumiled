import styled from "styled-components"
import {Link}from'react-router-dom'
const AdminArea = styled.div`
width:100%;
min-height:300px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center`

const AdminSection = styled(Link)`
width:30%;
height:55px;
background-color:#f7d200;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
text-decoration:none;
color:black;
cursor: pointer;
text-align:center
`

function Administration() {
    return(
        <AdminArea>
            <AdminSection to='/ItemManagement'>Gestion des articles</AdminSection>
            <AdminSection to='/UserManagement'>Gestion des utilisateurs</AdminSection>
        </AdminArea>
    )
}

export default Administration