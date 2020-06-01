import React, { Component } from 'react'

export default class SubMenu extends Component {
    render() {
        return (
        <ul className="dropdown__menu">
            {
                this.props.menu.map((listItem, index) => {
                    return(
                    <li key={index} className="dropdown__item">
                      <a href={listItem.url}>{listItem.title}</a>
                    </li>)
                    
                })
            }
        </ul>
        )
    }
}
