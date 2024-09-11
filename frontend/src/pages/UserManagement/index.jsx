import styled from "styled-components"
import { useFetch } from "../../utils/fetchDatas"
import { useNavigate } from "react-router-dom"

const ManagementArea = styled.div`
width:98%;
height:auto;
margin:25px 0;
min-height:300px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center
`

const Title = styled.h3`
height:70px;
font-weight:32px;
`
const Table = styled.table`
width:100%;
height:auto`

const Tr = styled.tr`
height:50px
`
const Td = styled.td`
text-align:center;
`
const Button = styled.button`
width:40%;
cursor:pointer`

function UserManagement() {
    const token = localStorage.getItem('token')
    const {datas, error}= useFetch('http://localhost:5000/api/users/',token)
    const users = datas
    const navigate = useNavigate()
    
    return(
        <ManagementArea>
            <Title>Gestion des utilisateurs</Title>
            <Table>
                <thead>
                    <Tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Supprimer</th>
                    </Tr>
                </thead>
                <tbody>
                        {users.map((user, index)=>(user?
                        <Tr key={index}>
                            <th scope="row">{user.id}</th>
                            <Td>{user.email}</Td>
                            <Td><Button onClick={()=>{
                                fetch('http://localhost:5000/api/users/deleteUser',
                                        {
                                        method: 'DELETE',
                                        headers: {
                                            'Authorization' : `Bearer ${token}`,
                                            'Accept': 'application/json',
                                            'Content-Type' : 'application/json',
                                        } ,
                                        body: JSON.stringify(user),
                                        })
                                .then((res)=>res.json())
                                .catch((err)=>console.log(err))
                                navigate('/Administration')
                            }}>Supprimer</Button></Td>
                        </Tr>:null))}
                </tbody>
            </Table>
        </ManagementArea>
    )
}

export default UserManagement