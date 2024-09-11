import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AdminContext, LoginContext } from "../../utils/context"

const SignInArea = styled.div`
width:100%;
height:400px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center`

const Title = styled.h3`
font-weight:bold;
font-size:32px`

const Form = styled.form`
width:100%;
height:80%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center
`
const FormSection = styled.span`
width:40%;
height:auto;
display:flex;
justify-content:space-around;
align-items:center;
@media all and (max-width:768px){
width:80%;
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
width:80%;
height:30px`

const SignInBtn = styled.button`
width:25%;
height:45px;
margin-top:10px;
background-color:#f7d200;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor:pointer
`


function SignIn() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const navigate = useNavigate()
    const {toggleLogin} = useContext(LoginContext)
    const {toggleAdmin}= useContext(AdminContext)
    return(
        <SignInArea>
            <Title>Inscription</Title>
            <Form>
                <FormSection>
                    <Label htmlFor="email">E-mail</Label>
                    <Input type='email' id="email" name="email" autoComplete="on" onChange={(e)=>setEmail(e.target.value)}></Input>
                </FormSection>
                <FormSection>
                    <Label htmlFor="password">Mot de Passe</Label>
                    <Input type='password' id="password" name="password" autoComplete="off" onChange={(e)=>setPassword(e.target.value)}></Input>
                </FormSection>
                <SignInBtn onClick={async(e)=>{
                    e.preventDefault()
                    const signIn = {
                        email: email,
                        password: password
                    }
                    await fetch('http://localhost:5000/api/users/signIn',
                        {
                            method:'POST',
                            headers:{
                                'Accept': 'application/json', 
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(signIn)
                        }
                    )
                    .then(res=>res.json())
                    .then(()=>{
                        fetch('http://localhost:5000/api/users/login',
                            {
                                method:'POST',
                                headers:{
                                'Accept': 'application/json', 
                                'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(signIn)
                            }
                        )
                        .then(res=>res.json())
                        .then((data)=>{
                            const token = data.token
                            const isAdmin = data.admin
                            toggleLogin()
                            if(isAdmin===true){
                                toggleAdmin()
                            }
                            localStorage.setItem('token', token)
                            navigate('/')
                        })
                        .catch(err=>{console.log(err)})
                    })
                    .catch(err=>{console.log(err)})
                }}>Valider</SignInBtn>
            </Form>
        </SignInArea>
    )
}

export default SignIn