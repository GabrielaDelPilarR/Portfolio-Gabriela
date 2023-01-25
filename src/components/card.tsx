import styled from 'styled-components'
import { UilExclamationCircle } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import { UilMonitor } from '@iconscout/react-unicons'

const CardStyled = styled.div`
    display:flex;
    gap:1.5rem;
    flex-direction:column;
    width: 23.68rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 1.3rem;
    background: #F4F1F1;

    .img-Allproject{
        width:100%;
    }

    .title-Allproject{
        display:flex;
        justify-content: space-between;
        padding-inline:1.5rem;
        
    }

    .content-links{
        display:flex;
        justify-content: space-around;
        margin-block-end:2rem;
        aling-items:center;
       
    }

    a{
        display:flex;
        gap:1.5rem;
        text-decoration:none;
        color: var(--pink);
        font: var(--body2-regular);
        margin-inline:1.5rem;
    }

`
interface Props {
    project:{
        categories: string;
        id: number;
        title: string;
        src: string;
        github: string;
        demo: string;
        modal: {
             title: string; 
             description: string; 
            }
    }
}

function Card({project}:Props) {
    return (
        <CardStyled>
            <img className='img-Allproject' src={project.src} alt={project.title}></img>
            <div className='title-Allproject'>
                <h3>{project.title}</h3>
                <UilExclamationCircle/>
            </div>
            <div className='content-links'>
                <a href={project.github} target='_blank' rel='noreferrer'>Codigo
                <UilArrow/>
                </a>
                <a href={project.demo}>Proyecto
                <UilMonitor/>
                </a>
            </div>

        </CardStyled>
    )
}

export default Card
