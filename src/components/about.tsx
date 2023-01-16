import styled from 'styled-components'
import avatar from '../images/person (2).png'

const AboutStyled = styled.div`
    display: flex;
    justify-content: space-around;
    
    
    .container-about{
        display:flex;
        width:80%;
        gap:5rem;
    }

    h1{
        font: var(--headline1);
        color: var(--black);
    }

    p{
        font:var(--body-regular);
        color: var(--black);
    }

    span{ 
        color: var(--pink);  
        font-weight: 600;
    }

    button{
        border:none;
        background: var(--pink);
        border-radius: 10px;
        padding-block: 1.5rem;
        padding-inline: 4rem;
        cursor: pointer;
        font: var(--button);
        color: #FFFFFF;

    }

`

function About() {
    return (
        <AboutStyled>
            <div className='container-about'>
            <div className='description'>
                <h1>HI! I Am Gabriela Rojas </h1>
                <p>I am passionate about understanding user needs and translating them into  
                <span> digital solutions</span>. I have always been excited to join <span>innovative teams</span> that are constantly looking for the latest technologies.</p>
                <button>Curriculum</button>
            </div>
            <div className='avatar-profile'>
                <img src={avatar} alt='avatars'></img>
            </div>
            </div>
        </AboutStyled>
    )
}

export default About
