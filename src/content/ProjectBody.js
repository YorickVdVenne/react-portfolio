import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectData from '../data/projects.json'

export const ProjectBody = () => {
    const { id } = useParams();

    return (
        <div>
            <h1 class="m-5">{ProjectData[id].title}</h1>
            <p>{ProjectData[id].text}</p>
        </div>
    )
}
