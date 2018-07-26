import React from 'react'

let Skills = (props) => {
    let skillArr = props.skills.map((item, i) => {
        return (
          <li key={i}>
              {item}
          </li>
        )
      })
    
    return (
        <div>
            <h4>Skills</h4>          
            <ul className="skills-list">
                {skillArr}
            </ul>
        </div>
    )
}
export default Skills

