import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { projectsList, technologies } from '../data/projects'
import Modal from './modal'
import Card from './card';

const AllProjectsStyled = styled.div`

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
    max-height: 50rem;
    overflow-y: scroll;
}

.container-allProjects::-webkit-scrollbar{
    width: 6px;
    background: #F1F7B5;
    border-radius: 4px;
}

.container-allProjects::-webkit-scrollbar-thumb{
    width: 6px;
    background:#FD8A8A;
    border-radius: 4px;
}

@media (max-width:750px){
    padding-inline: 1rem;

    .container-featured{
        gap:2rem;
        display:flex;
        flex-wrap:wrap;
    }

    .button-categories{
        font-size: 0.7rem;
    }
}

`



function AllProjects() {
    const [categories, setCategories] = useState('all');
    const categorizeItems = projectsList.map((project) => (
        <Card
          project={project}
          key={project.id}
        />
        ))
    const filteredCategories = projectsList.filter((project)=> project.categories === categories);
    console.log(filteredCategories)

    return (
        <AllProjectsStyled id='projects'>
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
                { categories=== 'all'? categorizeItems : filteredCategories.map((project)=>(
                <Card
                project={project}
                key={project.id}
              />
                ))}
            </div>
        </AllProjectsStyled>
    )
}

export default AllProjects
