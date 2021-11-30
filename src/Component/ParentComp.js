import React, { PureComponent } from 'react'
import RegComp from './RegComp';  
import PureComp from './PureComp';
class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sugriv'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
             name:'sugriv' 
            })
        },100)
    }
    
    render() {
        console.log('**parent component**********')
        return (
            <div>
                Parent Component 
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
