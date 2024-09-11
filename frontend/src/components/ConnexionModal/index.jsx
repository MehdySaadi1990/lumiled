import { useState } from "react"
import { useContext } from "react"
import styled from "styled-components"
import { LoginContext } from "../../utils/context";
import { AdminContext } from "../../utils/context";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ModalArea = styled.div`
display:none;
${props=>props.$open&&`
width:50%;
height:450px;
padding : 10px 0 40px 0;
background-color:white;
border:1px solid black;
position:absolute;
bottom:10%;
z-index:100000;
display: flex;
flex-direction:column;
justify-content:space-around;
align-items:center `
    }
`

const Title = styled.h3`
font-weight:bold;
font-size:24px`

const Form = styled.form`
width:100%;
height:200px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center
`
const FormSection = styled.span`
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
@media all and (max-width:768px){
flex-direction:column;
}
`

const Label = styled.label`
width:20%;
font-weight:25px;
@media all and (max-width:768px){
width:100%;
text-align:center;
margin-bottom:5px
}
`
const Input = styled.input`
width:70%;
height:30px`

const ModalBtn = styled.button`
width:30%;
height:45px;
background-color:#f7d200;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor:pointer
`
const CloseModal = styled.span`
width:30px;
height:30px;
position:relative;
bottom:15%;
left:45%;
cursor:pointer`

function ConnexionModal({modal, setModal}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, toggleLogin}=useContext(LoginContext)
    const {admin, toggleAdmin}=useContext(AdminContext)
    const navigate = useNavigate()
    return(
        <ModalArea $open={modal}>
            <Title>Connexion à votre Espace</Title>
            <CloseModal onClick={()=>{
                setModal(false)
            }}><IoMdClose/></CloseModal>
            <Form>
                <FormSection>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="email" id="email" name="email" autoComplete="on" onChange={(e)=>{setEmail(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="password">Mot de Passe</Label>
                    <Input type="password" placeholder="password" id="password" name="password" autoComplete="off" onChange={(e)=>{setPassword(e.target.value)}}/>
                </FormSection>
            </Form>
            <ModalBtn onClick={async()=>{
                const login = {
                    email:email,
                    password:password
                }
                await fetch('http://localhost:5000/api/users/login',
                    {
                    method:"POST",
                    headers : {
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(login)
                    }
                )
                .then((res) =>res.json())
                .then((data) =>{
                    const token = data.token
                    const isAdmin = data.admin
                    if(token != null){
                        if(isAdmin===true){
                            toggleLogin()
                            toggleAdmin()
                        }else{
                            toggleLogin()
                        }
                        localStorage.setItem('token',token)
                    }
                    setModal(false)
                })
                .catch(err=>{console.log(err)})
            }}>Valider</ModalBtn>
            <ModalBtn onClick={()=>{
                navigate('/SignIn')
                setModal(false)
            }}>S'inscrire</ModalBtn>
        </ModalArea>
    )
}

export default ConnexionModal