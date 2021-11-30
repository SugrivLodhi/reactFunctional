import React, { Component } from 'react'

 class ClassRoomComp extends Component {
     constructor(props) {
         super(props)
       this.state = {
          studentsCount:0
         }
     this.addStudent=this.addStudent.bind(this);     

     }
     addStudent(){
        this.setState((prevState)=>{
          return {studentsCount: prevState.studentsCount++}
        });
      }
     
    render() {
        return (
            <div>
                 <p>Number of students in class room: {this.state.studentsCount}</p>
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        )
    }
}

export default ClassRoomComp
