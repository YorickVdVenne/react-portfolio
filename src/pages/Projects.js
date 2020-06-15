import React from 'react'
import ProjectData from '../data/projects.json'

export const Projects = () => {
    return (
        <div>
            {ProjectData.map((projectDetail, index) => {
                return <h1>{projectDetail.title}</h1>
            })}
        </div>
    )
}
