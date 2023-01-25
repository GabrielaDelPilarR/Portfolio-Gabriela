import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { project, technologies } from '../data/projects'
import Modal from './modal'
import Card from './card';

const AllProjectsStyled = styled.div`

max-heigth:600px;
padding-inline: 5rem;
padding-block: 4.06rem;
align-items: center;

.subtitle{
    font: var(--body1);
}

.title-section{
    display:flex;
    flex-direction: column;
    align-items:center;
}

.button-container{
    display:flex;
    justify-content:center;
    gap:1.3rem;
    margin: 2.5rem;
}

.button-categories{
    font: var(--button);
    color: var(--bg);
    border: 1px solid var(--bg);
    border-radius: 9px;
    background: var(--white);
    padding-block: 0.5rem;
    padding-inline: 2rem;
}

.button-categories:focus{
    background: var(--bg);
    color: var(--white);
}

.container-allProjects{
    margin:auto;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:3rem;
}

`



function AllProjects() {
    const [categories, setCategories] = useState('all');
    const categorizeItems = project.map(project => (
        <Card
          project={project} 
          key={project.id}/>
        ))
    const filteredCategories = project.filter((project)=> project.categories === categories);

    return (
        <AllProjectsStyled>
            <div className='title-section'>
                <h2>Projects</h2>
                <span className='subtitle'>Fulfilled projects</span>
            </div>
            <div className='button-container'>
                <button className='button-categories' onClick={() => setCategories('all')}>All</button>
                <button className='button-categories' onClick={() => setCategories('web')}>Web</button>
                <button className='button-categories' onClick={() => setCategories('responsive')}>Responsive</button>
            </div>
            <div className='container-allProjects'>
                { categories=== 'all'? categorizeItems : null}
            </div>
            
        </AllProjectsStyled>
    )
}

export default AllProjects
