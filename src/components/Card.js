import React, { Component } from 'react';
import Skills from './Skills'

class Card extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            condition: false
        }
    }

    selecting = () => {
        this.setState({
          condition: !this.state.condition
        })
      }  

    render(){

        return (
        <li >
            <div className="profile-card">
                <header className="profile-header">
                    <img src={this.props.listItem.image} alt="dino pics"/>
                    <h2 onClick={this.selecting}>{this.props.listItem.name}</h2>
                </header>
                <section >
                    {this.state.condition ? <Skills skills={this.props.listItem.skills} /> : null}            
                </section>
            </div>
        </li>
        )
    } 
}
export default Card