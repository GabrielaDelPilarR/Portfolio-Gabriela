import styled from 'styled-components'

const TextButtonStyled = styled.div`
.button{
    border:none;
    background: var(--pink);
    border-radius: 10px;
    padding-block: 1.3rem;
    padding-inline: 3rem;
    cursor: pointer;
    font: var(--button);
    color: #FFFFFF;
    margin-block: 1rem;
    text-decoration: none;

}
`

interface TextButtonProps {
    children: React.ReactNode;
    download?: string;
    href?: string;
}

export const TextButton = (props: TextButtonProps) => {
    const {children, href, download } = props
    return (
        <TextButtonStyled>
            <a download={download} href={href}  className='button'>
                {children}
            </a>
        

        </TextButtonStyled>)
}


export default TextButton
