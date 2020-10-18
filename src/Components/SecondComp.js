import React,{useEffect,useState} from 'react'

function SecondComp() {
      const [state,setState] = useState(0)
      useEffect(()=> {
           // eslint-disable-next-line no-lone-blocks
           {
               document.title = `Title changed ${state} Times`
           }
           return () => {
               alert("Component unmount is triggered")
           }
      },[])
  return (
    <>
       <button class="btn btn-secondary mt-3" onClick={()=>setState(state + 1)}>Clicked {state} Times</button>
      
    </>
    
  )
}

export default SecondComp
