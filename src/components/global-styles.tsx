import {createGlobalStyle} from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`

:root{
    --primary: #57a6ff; 
    --white: #fffffe; 
    --black: #242323;
    --grey: #8b949e; 
    --bg: #0d1117; 
    --buttonBg: #22262c; 
    --grey-2: #c5ced7; 
    --pink: #FD8A8A; 
    --yellow: #f1e05a; 
    --purple: #563d7c; 
    --black-2: #171b21; 
    --headline1: 700 2.75rem Poppins; 
    --button: 600 1.1rem Poppins; 
    --headline2: 600 2rem Poppins; 
    --headline3: 600 1.25rem/1.5rem Poppins; 
    --body-regular: 400 1.2rem Poppins; 
    --body1: 500 1.14rem Poppins; 
    --body2-regular: 500 1rem Poppins; 
    --body2-semi-bold: 600 0.875rem/1.5rem Poppins; 
}

*{
    box-sizing: border-box;
    margin: 0;
}

h1{
    font: var(--headline1);
    color: var(--black);
    margin:0;
}

h2{
    font:var(--headline2);
}

p{
    font:var(--body-regular);
    color: var(--black);
}

span{ 
    color: var(--pink);  
    font-weight: 600;
}

button{
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



export default GlobalStylesStyled
