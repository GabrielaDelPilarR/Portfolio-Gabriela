import styled from 'styled-components'

const NavStyled = styled.nav`
    display: flex;
    align-items:center;
    gap: 2rem;
    //padding-block: 1.4rem;
    .a-nav{
        font: var(--body1);
        color: var(--black);
        text-decoration: none;
    }

    .a-nav:hover{
        color: var(--pink);
    }

    @media (max-width:750px){
        display:none;
    }

`


function Nav() {
    return (
        <NavStyled >
            <a className='a-nav' href='#about'>About me</a>
            <a className='a-nav' href='#projects'>Projects</a>
            <a className='a-nav' href='#technologies'>Technologies</a>
            <a className='a-nav' href='#contact'>Contact</a>
        </NavStyled>
    )
}

export default Nav
