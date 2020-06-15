import React from 'react'
import ProjectData from '../data/projects.json'
import  Placeholder  from '../img/placeholder.png'

export const ProjectCard = () => {
    return (
        <div>
            {ProjectData.map((projectDetail, index) => {
                return (
                <div class="col">
                    <div class="card-deck">
                        <div class="card mb-5">
                            <img class="card-img-top" src={Placeholder} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{projectDetail.title}</h5>
                                <p class="card-text">{projectDetail.lead}</p>
                                <a href={projectDetail.id} class="btn btn-primary">Bekijk Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
