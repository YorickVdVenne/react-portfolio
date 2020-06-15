import React from 'react'
import { ProjectCard } from '../content/ProjectCard'

export const Home = () => {
    return (
        <div>
            <h2 class="mt-5">Portfolio</h2>
                <p class="mb-5">Hieronder zijn een aantal projecten te zien waar ik aan heb gewerkt</p>

            <div class="container">
                <div class="row">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}
