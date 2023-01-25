import styled from 'styled-components'
import { project,technologies } from '../data/projects'
import { UilCheckCircle } from '@iconscout/react-unicons'

const ModalStyled = styled.div`

`

function Modal({state:boolean=false}) {
    return (
        <ModalStyled>
            <div>
            {project.map(({modal})=>(
                <>
                <div>
                    <h3>
                    {modal.title}
                    </h3>
                    <UilCheckCircle/> <p>{modal.description}</p>
                </div>

                </>
            ))}
            {technologies.map(({name,src,projects})=>(
                <>
                    <UilCheckCircle/><h4>{name}</h4>
                    <img src={src} alt={name} width='32px'></img>
                </>
            ))}
            </div>
        </ModalStyled>
    )
}

export default Modal
