import React,{useState} from 'react'

function FuncComp() {

         const [state,incState]   = useState(100)
    return (
        <div>
            <button class="btn m-4 btn-dark" onClick={()=> incState(state + 1)}>Clicked {state} Times</button>
        </div>
    )
}

export default FuncComp;
