import React from 'react'
import Skills from './Skills.js';

let Profiles = (props) => {
    let dinoList = props.list.map((lis, i) => {
        return (
        <li  key={i}>
            <div className="profile-card">
                <header className="profile-header">
                    <img src={lis.image}/>
                    <h2 onClick={() => props.selecting(i)}>{lis.name}</h2>
                </header>
                <section className="skills-container hidden">
                    <Skills skills={lis.skills} />
                </section>
            </div>
        </li>
        )
    })

    return (
        <section id="profiles-container" >
          <h2>Profiles</h2>
          <ul id="profiles">
            {dinoList}
          </ul>
        </section>
    )
}
export default Profiles