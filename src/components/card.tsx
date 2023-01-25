import styled from 'styled-components'
import { project,technologies } from '../data/projects'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { useState } from 'react'
import { UilExclamationCircle } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import { UilMonitor } from '@iconscout/react-unicons'
import Modal from './modal'

const CardStyled = styled.div`
    display:flex;
    flex-direction:column;
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
        justify-content:space-around;
        flex-direction:column;
        gap:1rem;
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
    const [modal, setModal] = useState(false)
    return (
        <CardStyled key={project.id}>
            <div className='container-img'>
                <img className='img-Allproject' src={project.src} alt={project.title}></img>
            </div>
            <div className='container-info'>
                <div className='title-Allproject'>
                    <h3>{project.title}</h3>
                    <UilExclamationCircle  className='icon-projects' onclick={()=> setModal(true)}/>
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
            <Modal state= {modal}>
                    <>
                    <div>
                        <h3>
                        {project.modal.title}
                        </h3>
                        <UilCheckCircle/> <p>{project.modal.description}</p>
                    </div>

                    </>
                {technologies.map(({name,src,projects})=>(
                    <>
                        <UilCheckCircle/><h4>{name}</h4>
                        <img src={src} alt={name} width='32px'></img>
                    </>
                ))}
            </Modal>
        </CardStyled>
    )
}

export default Card
