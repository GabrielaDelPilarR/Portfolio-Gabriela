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

}
`
type Type = 'primary' | 'secondary' | "thrid"

interface TextButtonProps {
    children: React.ReactNode;
    type?: Type;
    download?: string;
    href?: string;
}

export const TextButton = (props: TextButtonProps) => {
    const { type = 'primary', children, href, download } = props
    return (
        <TextButtonStyled>
            <a href={href} download={download} className='button'>
                {children}
            </a>
        

        </TextButtonStyled>)
}


export default TextButton
