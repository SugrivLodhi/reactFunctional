import React, { PureComponent } from 'react'

 class RegComp extends PureComponent {
    render() {
        console.log('**********regular component');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
