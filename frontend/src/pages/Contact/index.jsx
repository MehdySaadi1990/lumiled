import styled from "styled-components"
import ContactForm from "../../components/contactForm"

const ContactArea = styled.div`
width:100%;
height:auto;`

function Contact(params) {
    return(
        <ContactArea>
            <ContactForm></ContactForm>
        </ContactArea>
    )
}

export default Contact