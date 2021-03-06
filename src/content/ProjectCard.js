import React from 'react'
import ProjectData from '../data/projects.json'
import  Placeholder  from '../img/placeholder.png'
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable'


export const ProjectCard = () => {
    return (
        <div>
            {ProjectData.map((projectDetail, index) => {
                return (
                <Draggable>
                <div class="col">
                    <div class="card-deck">
                        <div class="card mb-5">
                            <img class="card-img-top" src={Placeholder} alt={projectDetail.title}/>
                            <div class="card-body">
                                <h5 class="card-title">{projectDetail.title}</h5>
                                <p class="card-text">{projectDetail.lead}</p>
                                <Link to={`/projects/${projectDetail.id}`} class="btn btn-primary">Go to Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </Draggable>
                )
            })}
        </div>
    )
}

