import styled from 'styled-components'
import { Projects} from '../data/projects'
import { useState } from 'react'
import { UilExclamationCircle } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import { UilMonitor } from '@iconscout/react-unicons'

import Modal from './modal'

const CardStyled = styled.div`
    
    width: 23.68rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 1.3rem;
    background: #F4F1F1;

    .container-img{
        width: 100%;
        height:70%;
    }

    .container-info{
        display:flex;
        flex-direction:column;
        gap:1rem;
        margin-block-end:1rem;
    }


    .img-Allproject{
        width:100%;
        border-radius: 1.3rem 1.3rem 0 0 ;
        height: 100%;
        object-fit: cover;
        object-position: top left;
    }

    .title-Allproject{
        display:flex;
        justify-content: space-between;
        padding-inline:1.5rem;
        padding-block-start:1rem;
    }

    .content-links{
        display:flex;
        justify-content: space-around;
        aling-items:center;
       
    }

    a{
        display:flex;
        gap:1.5rem;
        text-decoration:none;
        color: var(--pink);
        font: var(--body2-regular);
    }

    .icon-projects{
        color: var(--pink);
        cursor: pointer;
    }

    .icon-projects:hover{
        animation: heartBeat;
        animation-duration: 1s;
    }

`
interface Props {
    project: Projects
}

function Card({project}:Props) {
    const [modal, setModal] = useState(false)
    return (
        <>
        
        <CardStyled key={project.id}>
            <div className='container-img'>
                <img className='img-Allproject' src={project.src} alt={project.title}></img>
            </div>
            <div className='container-info'>
                <div className='title-Allproject'>
                    <h3>{project.title}</h3>
                    <UilExclamationCircle  className='icon-projects' onClick={()=> {
                        console.log('hola')
                        setModal(true)
                        }}/>
                </div>
                <div className='content-links'>
                    <a href={project.github} target='_blank' rel='noreferrer'>Codigo
                    <UilArrow className='icon-projects'/>
                    </a>
                    <a href={project.demo}>Proyecto
                    <UilMonitor className='icon-projects'/>
                    </a>
                </div>
            </div>
        </CardStyled>
            <Modal 
            state= {modal}
            setModal={setModal}
            project={project}
            />
        </>
    )
}

export default Card
