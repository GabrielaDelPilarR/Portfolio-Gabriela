import styled from 'styled-components'
import BurgerQueen from '../images/BurgerQueen.jpg'
import GitList from '../images/GitList.jpg'
import HelpTaster from '../images/HelpTaster.jpg'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'

const FeaturedProjectsStyled = styled.div`

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
        title: 'Burger Queen',
        href: "https://gabrieladelpilarr.github.io/Burger-Queen/",
        src: BurgerQueen,
        alt: 'Burger Queen',
        description: 'Web interface to manage fast food orders, focused on administrator, waiter and cook employees to facilitate their activities within the company.',
    }, {
        title: 'GitList',
        href: "https://karlavasquez8.github.io/LIM018-data-lovers/src/",
        src: GitList,
        alt: 'GitList',
        description: 'Manage your project repositories like a pro using GitList, the worlds largest and most advanced development platform.',
        
    }, {
        title: 'HelpTaster - Social Network',
        href: "https://gabrieladelpilarr.github.io/Help-Taster---social-network/src",
        src: HelpTaster,
        alt: 'HelpTaster',
        description: 'Users can recommend restaurants and suggest the best dishes they have tasted. It also allows you to create, edit and delete posts.'
    }]
    return (
        <FeaturedProjectsStyled>
            <h2>Featured Projects</h2>
            <span>I'm most proud of</span>
            <div>
                {projects.map(({ title, href, src, alt, description})=>(
                    <><h3>
                        {title}
                    </h3>
                    <a href={href} target='_blank' rel="noreferrer">
                        <UilExternalLinkAlt>
                        </UilExternalLinkAlt>
                    </a>
                    <p>
                        {description}
                    </p>
                    <img src={src} alt={alt}></img></>
                    
                )

                
        )}
            </div>
            
        </FeaturedProjectsStyled>
    )
}

export default FeaturedProjects
