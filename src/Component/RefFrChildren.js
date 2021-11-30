import React from 'react'

// function RefFrChildren() {
//     return (
//         <div>
//             <input type="text" ref{ref}/>
//         </div>
//     )
// }
const  RefFrChildren = React.forwardRef( (props,ref) =>{
    return (
                 <div>
                     <input type="text" ref={ref}/>
                 </div>
           )
    })
export default RefFrChildren
