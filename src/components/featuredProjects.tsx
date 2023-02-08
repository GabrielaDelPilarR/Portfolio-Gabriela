import styled from 'styled-components'
import BurgerQueen from '../images/BurgerQueen.jpg'
import GitList from '../images/GitList.jpg'
import HelpTaster from '../images/HelpTaster.jpg'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'

const FeaturedProjectsStyled = styled.div`
    background: #F1F7B5;
    padding-inline: 5rem;
    padding-block: 4.06rem;
    align-items: center;

    h3{
        font:var(--headline3);
    }

    .title-section{
        display:flex;
        flex-direction: column;
        align-items:center;
    }

    .subtitle{
        font: var(--body1);
    }

    .content-featured{
        max-width: 23.87rem;
        display:flex;
        flex-direction: column;
        gap:1.5rem;
    }

    .link-project{
        color:#FD8A8A;
    }

    .link-project:hover{
        filter: drop-shadow(0px 4px 4px rgba(184, 4, 145, 0.74));
    }

    .container-featured{
        display:flex;
        margin-block-start: 4rem;
        justify-content: space-around;
    }

    .img-featured{
        aspect-ratio: 1.7;
        border-radius: 0.5rem;
        box-shadow: 0 3px 8px rgb(0 0 0 / 24%);
        object-fit: cover;
        object-position: top center; 
        width: 100%;
    }

    .title-project{
        display:flex;
        justify-content: space-between;
       

    }
    
    @media (max-width:750px){
        .container-featured{
            gap:2rem;
            display:flex;
            flex-wrap:wrap;
        }
    }

`
interface Projects {
    href: string;
    src: string;
    description: string;
    title: string;
    alt: string;
}

function FeaturedProjects() {
    const projects : Projects[]=[{
        title: 'Burger Queen 🍔',
        href: "https://gabrieladelpilarr.github.io/Burger-Queen/",
        src: BurgerQueen,
        alt: 'Burger Queen',
        description: 'Web interface to manage fast food orders, focused on administrator, waiter and cook employees to facilitate their activities within the company.',
    }, {
        title: 'GitList 👩‍💻',
        href: "https://gabrieladelpilarr.github.io/Burger-Queen/",
        src: GitList,
        alt: 'GitList',
        description: 'Manage your project repositories like a pro using GitList, the worlds largest and most advanced development platform.GitHub Rest Api was used',
        
    }, {
        title: 'HelpTaster - Social Network 🍴',
        href: "https://gabrieladelpilarr.github.io/Help-Taster---social-network/src",
        src: HelpTaster,
        alt: 'HelpTaster',
        description: 'Users can recommend restaurants and suggest the best dishes they have tasted. It also allows you to create, edit and delete posts.'
    }]
    return (
        <FeaturedProjectsStyled>
            <div className='title-section'>
                <h2>Featured Projects</h2>
                <span className='subtitle'>I'm most proud of</span>
            </div>
            <div className='container-featured'>
                {projects.map(({ title, href, src, alt, description})=>(
                    <div className='content-featured'>
                            <>
                        <div className='title-project'>
                            <h3>
                                {title} 
                            </h3>
                            <a href={href} target='_blank' rel="noreferrer">
                                <UilExternalLinkAlt className='link-project'>
                                </UilExternalLinkAlt>
                            </a>
                        </div>
                        <p>
                            {description}
                        </p>
                        <img className='img-featured' src={src} alt={alt}></img></>
                    </div>
                )

                )}
            </div>
            
        </FeaturedProjectsStyled>
    )
}

export default FeaturedProjects
