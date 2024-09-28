import styled from "styled-components"
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
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
left:25%;
bottom:5%;
z-index:100000;
display: flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
overflow-y:scroll `
    }
`

const Title = styled.h3`
font-weight:bold;
font-size:24px`

const Form = styled.form`
width:100%;
height:auto;
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
margin : 5px 0 5px 0;
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
margin-top:5px;
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
bottom:10%;
left:45%;
cursor:pointer`

function ItemModal({modal, setModal, ajout, setAjout, id}) {
    const navigate = useNavigate()
    const [marque, setMarque] = useState('') 
    const [ref, setRef] = useState('')
    const [type, setType] = useState('')
    const [serie, setSerie] = useState('')
    const [power, setPower] = useState('')
    const [etancheite, setEtancheite] = useState('')
    const [duree, setDuree] = useState('')
    const [lightColor, setLightColor] = useState('')
    const [couverture, setCouverture] = useState('')
    const [image, setImage] = useState({})
    const [ficheTech, setFicheTech] = useState({})
    const token = localStorage.getItem('token')
    const formData = new FormData()
                        formData.append('brand',marque)
                        formData.append('ref',ref)
                        formData.append('type',type)
                        formData.append('serie',serie)
                        formData.append('power',power)
                        formData.append('etancheite',etancheite)
                        formData.append('duree',duree)
                        formData.append('light_color',lightColor)
                        formData.append('couverture',couverture)
                        formData.append('image',image)
                        formData.append('fiche_tech',ficheTech)
    return(
<ModalArea $open={modal}>
            {ajout?<Title>Ajouter un Article</Title>:<Title>Modifier un Article</Title>}
            <CloseModal onClick={()=>{
                setModal(false)
                setAjout(false)
            }}><IoMdClose/></CloseModal>
            <Form>
                <FormSection>
                    <Label htmlFor="ref">Marque</Label>
                    <Input type="text" placeholder="marque" id="marque" name="marque" autoComplete="off" onChange={(e)=>{setMarque(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="ref">Ref</Label>
                    <Input type="text" placeholder="reference" id="ref" name="ref" autoComplete="off" onChange={(e)=>{setRef(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="type">Type</Label>
                    <Input type="text" placeholder="type" id="type" name="type" autoComplete="off" onChange={(e)=>{setType(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="serie">Serie</Label>
                    <Input type="text" placeholder="serie" id="serie" name="serie" autoComplete="off" onChange={(e)=>{setSerie(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="power">Power</Label>
                    <Input type="text" placeholder="power" id="power" name="power" autoComplete="off" onChange={(e)=>{setPower(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="etancheite">Etancheité</Label>
                    <Input type="text" placeholder="etancheite" id="etancheite" name="etancheite" autoComplete="off" onChange={(e)=>{setEtancheite(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="duree">Durée</Label>
                    <Input type="text" placeholder="duree" id="duree" name="duree" autoComplete="off" onChange={(e)=>{setDuree(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="cct">CCT</Label>
                    <Input type="text" placeholder="cct" id="cct" name="cct" autoComplete="off" onChange={(e)=>{setLightColor(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="couverture">Couverture</Label>
                    <Input type="text" placeholder="couverture" id="couverture" name="couverture" autoComplete="off" onChange={(e)=>{setCouverture(e.target.value)}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="image">Image</Label>
                    <Input type="file"  id="image" name="image" accept="image/*" onChange={(e)=>{setImage(e.target.files[0])}}/>
                </FormSection>
                <FormSection>
                    <Label htmlFor="fiche_tech">Fiche Technique</Label>
                    <Input type="file"  id="fiche_tech" name="fiche_tech" accept="application/pdf" onChange={(e)=>{setFicheTech(e.target.files[0])}}/>
                </FormSection>
                {ajout?<ModalBtn onClick={(e)=>{
                    e.preventDefault()
                    fetch('http://localhost:5000/api/product/',
                        {
                            method: 'POST',
                            headers: {
                                'Authorization' : `Bearer ${token}`,
                            },
                            body: formData,

                        }
                    )
                    .then(res=>res.json())
                    .catch(err=>console.log(err))
                    setMarque('')
                    setRef('')
                    setType('')
                    setSerie('')
                    setPower('')
                    setEtancheite('')
                    setDuree('')
                    setLightColor('')
                    setCouverture('')
                    setImage({})
                    setFicheTech({})
                    setModal(false)
                }}>Ajouter Article</ModalBtn>:<ModalBtn onClick={(e)=>{
                    e.preventDefault()  
                    fetch(`http://localhost:5000/api/product/update/:${id}`,
                        {
                            method: 'UPDATE',
                            headers: {
                                'Authorization' : `Bearer ${token}`,
                            },
                            body: formData,

                        }
                    )
                    .then(res=>res.json())
                    .catch(err=>console.log(err))
                    setMarque('')
                    setRef('')
                    setType('')
                    setSerie('')
                    setPower('')
                    setEtancheite('')
                    setDuree('')
                    setLightColor('')
                    setCouverture('')
                    setImage({})
                    setFicheTech({})
                    setModal(false)
                    
                }}>Modifier Article</ModalBtn>}
            </Form>
            
        </ModalArea>
    
    )
}

export default ItemModal