import React, { Component } from 'react'

import * as event_header from './header_event'
export default class Toggle extends Component {
    render() {
        return (
        <a className="dropdown__toggle">
            <a href={this.props.url}>{this.props.title}</a >
            <span
              onClick={event=> {event_header.toggle_dropdown(event.currentTarget)}}
              data-onshow="false"
              className="dropdown__icon"
            >
              <i className="fa fa-angle-down" aria-hidden="true" />
              <i className="fa fa-times" aria-hidden="true" />
            </span>
        </a>
        )
    }
}
