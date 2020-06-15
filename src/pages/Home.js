import React from 'react'
import { ProjectCard } from '../content/ProjectCard'

export const Home = () => {
    return (
        <div>
            <h2 class="mt-5">Portfolio</h2>
                <p class="mb-5">Here i show some of the Projects that i've been working on!</p>

            <div class="container">
                <div class="row">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}
