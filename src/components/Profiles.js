import React from 'react'
import Card from './Card.js';

let Profiles = (props) => {

    let dinoList = props.list.map((listItem, i) => {
        return <Card listItem={listItem} key={i} />
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