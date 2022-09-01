import React from "react";
import { useState } from "react";
import './ReviewPage.css'
import Button from '@backyard/react/Button'
import Radio from '@backyard/react/Radio'
import NewsLetter from "../Newsletter/Newsletter";


export default function Review(){
    const [decision, setDecision] = useState('');

    function handleChange(event) {
        setDecision(event.target.value)
    }

    function handleClick(event) {
        console.log("Handle Click Demo")
    }

    function handleTextAreaChange(event) {
        const height = event.target.scrollHeight; 
        const rows = event.target.rows; 
        const rowHeight = 15; 
        const trows = Math.ceil(height / rowHeight) - 1; 
    
        if (trows > rows) { 
      
        console.log((trows - rows) + ' more rows'); 
      
        }
    }

    return(
        <center>
        <div className="control-buttons">

            <NewsLetter id="canvas"/>    
            
            <div className="decision-buttons" >
<center>

<Radio />
<input
                    type="radio"
                    value="approve"
                    checked={decision==="approve"}
                    onChange={handleChange}
                />Approve
<br></br>

<Radio />

                <input
                    type="radio"
                    value="suggest changes"
                    checked={decision==="suggest changes"}
                    onChange={handleChange}
                />Suggest Changes
</center>
               <br></br>
            </div>
<center>
            <textarea id="TextArea" onChange={handleTextAreaChange} />
            </center>
            <br></br>
            <center><Button>Button</Button></center>
           
           
        </div>
        </center>
    );
}

// //import React from "react";
// import { useState } from "react";
// import Newsletter from "./newsletter";
// import { Button, ButtonGroup } from "@backyard/react";
// import './reviewpage.css'
// import Radio from '@backyard/react/Radio'



// export default function Review(){
//     const [decision, setDecision] = useState('');

//     function handleChange(event) {
//         setDecision(event.target.value)
//     }

//     function handleClick(event) {
//         console.log("Handle Click Demo")
//     }

//     function handleTextAreaChange(event) {
//         const height = event.target.scrollHeight; 
//         const rows = event.target.rows; 
//         const rowHeight = 15; 
//         const trows = Math.ceil(height / rowHeight) - 1; 
    
//         if (trows > rows) { 
      
//         console.log((trows - rows) + ' more rows'); 
      
//         }
//     }

//     return(
//         <center>
        
//         <div id="DecisionButtons" className="control-buttons">

//             <Newsletter/>   
            
            
//             <div className="decision-buttons" >
// <center>
// <Radio />
//                 <input
                
//                   //  value="approve"
//                     checked={decision==="approve"}
//                     onChange={handleChange}
//                 />Approve
// <br/>
// <Radio />

//                 <input
               
//                   //  value="suggest changes"
//                     checked={decision==="suggest changes"}
//                     onChange={handleChange}
//                 />Suggest Changes
//                 <br></br>
//                 <br></br>
//                 </center>

//             </div>
//         <center>
//             <textarea id="TextArea" className="text-area" onChange={handleTextAreaChange} />
//         </center>
//             <br></br>
    
//         <center>
//         <Button id="ConfirmButton" shape="rounded" variant="primary" color="interactive" elevation >
//           Confirm 
//         </Button>
//             </center>
//         </div>
//         </center>
        
//     );
// }