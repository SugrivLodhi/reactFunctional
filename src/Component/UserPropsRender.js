import React, { Component } from 'react'

 class UserPropsRender extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        )
    }
}

export default UserPropsRender
