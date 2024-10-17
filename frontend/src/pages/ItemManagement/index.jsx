import styled from 'styled-components'
import { useFetch } from '../../utils/fetchDatas'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ItemModal from '../../components/ItemModal'

const Area = styled.div`
width:98%;
height:auto;
margin:25px 0;
min-height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
`
const Title = styled.h3`
font-size:32px
`
const Brand = styled.select`
width:25%;
text-align:center;
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

const AddButton = styled.button`
width:20%;
height:45px;
background-color:#f7d200;
font-size:14px;
font-weight:bold;
align-self:flex-end;
border:none;
cursor:pointer
`

function ItemManagement() {
    const [modal, setModal]= useState(false)
    const [ajout, setAjout]= useState(false)
    const [brand, setBrand]= useState('liper')
    const [id, setId] = useState('')
    const token = localStorage.getItem('token')
    const {datas, error} = useFetch(`http://localhost:5000/api/product/`,token)
    const products = datas
    const navigate = useNavigate()
    return(
        <Area>
            <Title>Gestion des articles</Title>
            <Brand defaultValue="liper" onChange={(e)=>{setBrand(e.target.value)}}>
            <option value="liper">Liper</option>
            <option value="line">Line</option>
            </Brand>
            <Table>
                <thead>
                    <Tr>
                        <th scope="col">ID</th>
                        <th scope="col">Produit</th>
                        <th scope="col">Supprimer</th>
                        <th scope="col">Modifier</th>
                    </Tr>
                </thead>
                <tbody>
                        {products.map((product, index)=>(product.brand === brand?
                        <Tr key={index}>
                            <th scope="row">{product.id}</th>
                            <Td>{product.type + " " + product.serie}</Td>
                            <Td><Button onClick={async ()=>{
                               await  fetch(`http://localhost:5000/api/product/deleteItem/${product.id}`,
                                        {
                                        method: 'DELETE',
                                        headers: {
                                            'Authorization' : `Bearer ${token}`,
                                            'Accept': 'application/json',
                                            'Content-Type' : 'application/json',
                                        } ,
                                        body: JSON.stringify(product),
                                        })
                                .then((res)=>res.json())
                                .catch((err)=>console.log(err))
                                navigate('/Administration')
                            }}>Supprimer</Button></Td>
                            <Td><Button onClick={()=>{
                                localStorage.setItem('product', JSON.stringify(product))
                                setModal(!modal)
                                setId(product.id)
                                }} >Modifier</Button></Td>
                        </Tr>:null))}
                </tbody>
            </Table>
            <AddButton onClick={()=>{
                setModal(!modal)
                setAjout(true)
            }}>Ajouter</AddButton>
            <ItemModal modal={modal} setModal ={setModal} ajout={ajout} setAjout={setAjout} id={id} />
        </Area>
    )
}

export default ItemManagement