import styled from 'styled-components'
import { technologies } from '../data/projects'

const TechnologiesStyled = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
background: #F1F7B5;
padding-inline: 5rem;
padding-block: 4.06rem;
.title-section{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
}

.tech-section{
    max-width: 52rem;
    margin-block: 2.5rem;
    margin-inline:1rem;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
    gap:3rem;

}

.tech{
    width: 6rem;
}

.tech-name{
    font-weight: 600;
}

`

function Technologies() {
    return (
        <TechnologiesStyled id='technologies'>
            <section className='title-section'>
                <h2>Technologies</h2>
                <span className='subtitle'>My technical level</span>
            </section>
            <section className='tech-section'>
                {technologies.map((tech)=>(
                    <>
                    <div className='tech-content'>
                        <img className='tech' src={tech.src} alt={tech.name}></img>
                        <p className='tech-name'>{tech.name}</p>
                    </div>
                    </>
                ))}
            </section>
        </TechnologiesStyled>
    )
}

export default Technologies
