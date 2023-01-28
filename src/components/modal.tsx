import styled from 'styled-components'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'

const ModalStyled = styled.div`
.background-modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modal {
    display:flex;
    flex-direction:column;
    max-width: 60%;
    max-height: 70%;
    background: #fff;
    border-radius: 9px;
    position: relative;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    padding: 1.5rem;
    animation:backInDown;
    animation-duration: .5s;
}



.icon-close {
    cursor: pointer;
    color:var(--pink);
}

.modal-header{
    display:flex;
    justify-content:space-between;
}

.modal-description{
    display:flex;
    gap:1rem;
    margin: 1rem;
}

.modal-technologies{
    display:flex;
    justify-content: center;
    gap:1.7rem;
    margin-block: 1rem;
}

.icon-project{
    color: var(--pink);
}
`
type stateType = {
    state:boolean,
    setModal: Function,
    project: any,
}



function Modal({ state, setModal, project}: stateType) {
    return (
        <>
            {state && (
                <ModalStyled>
                    <div className='background-modal'>
                        <div className='modal'>
                            <div className="modal-header">
                            <h2>
                                {project.title}
                            </h2>
                            <UilMultiply className='icon-close' onClick={() => setModal(false)}></UilMultiply>
                            </div>
                            <div className='modal-description'>
                            <UilCheckCircle className='icon-project' width='80'/> <p>{project.modal.description}</p>
                            </div>
                            <div className='modal-technologies'>
                            {project.technologies.map((tech:any)=>(
                                <>
                                <div>
                                <img src={tech.src} alt={tech.name} width='48'></img>
                                <p>{tech.name}</p>
                                </div>
                                </>
                            ))}
                            </div>
                        </div>
                    </div>
                </ModalStyled>
            )}
        </>
    )
}

export default Modal
