import React from 'react'
import { Link } from 'react-router-dom';
import  profilePicture  from '../img/placeholder.png'

export const AboutMeBody = () => {
    return (
        <div class="container">
            <h1 class="mb-5">About Me</h1>

            <div class="row">
                <div class="col">
                    <img src={profilePicture} class="img-thumbnail" alt="Profielfoto"/>
                </div>
                <div class="col">
                    <p>
                        Text about me, even more text about me.
                        Text about me, even more text about me.
                        Text about me, even more text about me.
                        Text about me, even more text about me.
                    </p>
                    <p>
                        Text about me, even more text about me.
                        Text about me, even more text about me.
                        Text about me, even more text about me.
                    </p>
                    <p>Have any questions for me?</p>
                    <Link to={'/contact'} class="btn-link" >Contact</Link>
                </div>
            </div>
        </div>
    )
}
