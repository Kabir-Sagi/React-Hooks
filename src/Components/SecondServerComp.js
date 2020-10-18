import React,{useState,useEffect} from 'react'
import GetData from '../Service/ServerCall'

function SecondServerComp() {
           const [data,setData] = useState([])
           useEffect(()=> {
               alert("Component is Loaded, Send Request")
               GetData().then((res)=> {
                     setData(res.data)
               })
           },[])
  return (
    <div>
        <table class="table table-striped table-dark">
            <tr>
                <th>User Id</th>
                <th>Title</th>
            </tr>
        
        {
            data.length == 0 ? <h2 class="text-danger text-center">Data Has to be loaded</h2> :
            data.map((element)=> {
                return(
                     <tr>
                         <td>{element.id}</td>
                <td>{element.title}</td>
                     </tr>
                )
            })
        }
        </table>
    </div>
  )
}

export default SecondServerComp
