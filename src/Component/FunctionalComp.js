
import React from 'react'
import { useState } from 'react';

function FunctionalComp() {
    let [studentsCount,setStudentsCount] = useState(0);

 const addStudent = () => {
   setStudentsCount(++studentsCount);
 }
    return (
        <div>
             <p>Number of students in class room: {studentsCount}</p>
             <button onClick={addStudent}>Add Student</button>
        </div>
    )
}

export default FunctionalComp
