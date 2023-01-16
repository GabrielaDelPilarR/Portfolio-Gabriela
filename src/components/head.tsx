import Nav from './nav'
import spa from '../images/spa.png'
import { UilMoon } from '@iconscout/react-unicons'
import styled from 'styled-components'

const HeadStyled = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-block: 1.4rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .logo{
        display:flex;
        gap:0.6rem;
    }

    .title{
        font-family: 'Poppins', sans-serif;
        color: var(--black);
        font-weight: 500;
        font-size: 1.5rem;
    }

    .spa{
        padding-block: 2rem;
    }

    .mood-dark:hover{
        color: var(--pink);
        cursor: pointer;
    }
`

function Head() {
    return (
        <HeadStyled>
            <div className='logo'>
                <h3 className='title'>Gabriela</h3>
                <img className='spa' src={spa} alt='spa'></img>
            </div>
            <Nav/>
            <UilMoon className='mood-dark'></UilMoon>

        </HeadStyled>
    )
}

export default Head
