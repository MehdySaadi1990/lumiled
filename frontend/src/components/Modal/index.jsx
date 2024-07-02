import { useState } from "react"
import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../utils/context"

const ModalArea = styled.div`
display:none;
${props=>props.$open&&`
width:50%;
height:400px;
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
align-items:center
`

const Label = styled.label`
width:20%;
font-weight:25px;
`
const Input = styled.input`
width:70%;
height:30px`

const ValidateBtn = styled.button`
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
function Modal({modal, setModal}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, toggleLogin}=useContext(ThemeContext)
    return(
        <ModalArea $open={modal}>
            <Title>Connexion à votre Espace</Title>
            <Form>
                <FormSection>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="email" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="password">Mot de Passe</Label>
                    <Input type="password" placeholder="password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </FormSection>
            </Form>
            <ValidateBtn onClick={async()=>{
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
                .then((res) =>{
                    if(res.status===200){
                        toggleLogin()
                        setEmail('')
                        setPassword('')
                        setModal(false)
                    }
                    })
                .catch(err=>{console.log(err)})
            }}>Valider</ValidateBtn>
            <ValidateBtn onClick={()=>{
                setModal(false)
            }}>Fermer cette fenêtre</ValidateBtn>
        </ModalArea>
    )
}

export default Modal