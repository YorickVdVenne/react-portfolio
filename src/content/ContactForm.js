import React from 'react'

export const ContactForm = () => {
    return (
        <div>
            <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Naam</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Jouw naam..."/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email adres</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Jouw email adres..."/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Bericht</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Verstuur</button>
            </form>
        </div>
    )
}
