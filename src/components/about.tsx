import styled from 'styled-components'
import avatar from '../images/person (2).png'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import TextButton from './textButton'


const AboutStyled = styled.div`
    display: flex;
    justify-content: space-around;
    .container-about{
        display:flex;
        align-items:center;
        max-width: 64rem;
        gap:5rem;
        margin-block-start: 9rem;
        margin-block-end: 3rem;
        margin-inline:2rem;
    }

    .presentation{
        font-size: 1.6rem;
        display:block;
        white-space:nowrap;
        width: 19ch;
        animation: typing 3s steps(19) alternate infinite;
        overflow:hidden;

    }
    @keyframes typing{
        from{width:0}
    }
    @keyframes blink{
        from {width:0}
    }

    .profile{
        width: 100%;
        min-width: 350px;
    }

    .description{
        display:flex;
        flex-direction:column;
        gap:1.5rem;
        width:60%;
    }

    .icons{
        color:var(--pink);
    }

    .icons:hover{
        filter: drop-shadow(0px 4px 4px rgba(184, 4, 145, 0.74));
    }

    .info-contact{
        display:flex;
        align-items:center;
        gap:1.3rem;
        margin-block: 1.7rem;
    }

    @media (max-width:750px){
        .container-about{
            flex-wrap: wrap-reverse;
            justify-content: center;
            margin-inline: 0;
        }
    }

`

function About() {
    return (
        <AboutStyled id='about'>
            <div className='container-about'>
            <div className='description'>
                <h1 >HI! I Am Gabriela Rojas </h1>
                <span className='presentation'>Frontend Developer</span>
                <p>I am passionate about understanding user needs and translating them into  
                <span> digital solutions</span>. I have always been excited to join <span>innovative teams</span> that are constantly looking for the latest technologies.</p>
                <div>
                <TextButton download ='../../public/GabrielaRojas_cv1.pdf' href=''>Curriculum</TextButton>
                <div className='info-contact'>
                    <p>Check out my :</p>

                    <a href='https://www.linkedin.com/in/gabrielarojasroque/' target='_blank' rel="noreferrer">
                    <UilLinkedin className='icons' width='30' height='30'/>
                    </a>
                    <a href='https://twitter.com/Gabriel78383636' target='_blank' rel='noreferrer'>
                    <UilTwitter className='icons' width='30' height='30'/>
                    </a>
                    <a href='https://github.com/GabrielaDelPilarR' target='_blank' rel='noreferrer' >
                    <UilGithub className='icons' width='30' height='30'/>
                    </a>
                </div>
                </div>
                


            </div>
            <div className='avatar-profile'>
                <img className='profile' src={avatar} alt='avatars'></img>
            </div>
            </div>
        </AboutStyled>
    )
}

export default About
