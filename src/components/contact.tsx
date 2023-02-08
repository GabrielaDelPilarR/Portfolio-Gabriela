import styled from 'styled-components'
import developer from '../images/developer.gif'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

const ContactStyled = styled.div`
padding-inline: 5rem;
padding-block: 4.06rem;
align-items: center;
.contact-section{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:4rem;
    margin-block:2.5rem;
}

.title-section{
    display:flex;
    flex-direction: column;
    align-items:center;
}

.content-contact{
    display:flex;
    flex-direction:column;
    gap:2rem;
}

.contact-image{
    width:50%;
    animation: backInRight;
    animation-duration:1.2s;
}

.icons-container{
    display:flex;
    align-items:center;
    gap:1.3rem;
}

.icons{
    color:var(--pink);
}

.icons:hover{
    filter: drop-shadow(0px 4px 4px rgba(184, 4, 145, 0.74));
}
`

function Contact() {
    return (
        <ContactStyled id='contact'>
            <div className='title-section'>
                <h2>Contact</h2>
                <span className='subtitle'>check out my contact</span>
            </div>
            <section className='contact-section'>
                <div className='content-contact'>
                    <div>
                        <h2>Gabriela Rojas</h2>
                        <h3>Frontend Developer</h3>
                    </div>
                    <div className='icons-container'>
                        <UilLinkedin className='icons' width='30' height='30'/>
                        <UilTwitter className='icons' width='30' height='30'/>
                        <UilGithub className='icons' width='30' height='30'/>
                    </div>
                </div>
               
                    <img className='contact-image'src={developer} alt='developer'></img>
              
            </section>
        </ContactStyled>
    )
}

export default Contact
