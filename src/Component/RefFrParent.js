import React, { Component } from 'react'
import RefFrChildren from './RefFrChildren'

 class RefFrParent extends Component {
     constructor(props) {
         super(props)
          
        this.refFrInput=React.createRef();
     }
    //  componentDidMount(){
    //      this.refFrInput.current.focus();
    //  } 

    clickHandler = () => {
        this.refFrInput.current.focus();
    }
    render() {
        return (
            <div>
            <RefFrChildren ref={this.refFrInput}/>
             <button onClick={this.clickHandler}>Focus Input</button>     
            </div>
        )
    }
}

export default RefFrParent
