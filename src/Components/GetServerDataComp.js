import React,{useState} from 'react'
import GetData from '../Service/ServerCall'

function GetServerDataComp() {

    function updateState(){
        GetData().then((res)=>{
            setInfo(res.data)
        })
      
    }

   const [info,setInfo] = useState([])
  return (
    <div>
        <button class="btn btn-success mt-3" onClick={()=>updateState()}>Get Data From Server</button>
        {
            info.length == 0 ? <h3 class="text-center text-danger">Data has to be Loaded</h3>:
            info.map((obj,index)=>{
                return (
                         <div className="card mt-3 bg-dark text-white">
                             <div className="card-header">
                                 <h4>Employee Details

                                 </h4>
                             </div>
                             <div className="card-body">
                <h5>{obj.id}</h5>
                <h5>{obj.username}</h5>
                <h5>{obj.email}</h5>
                <h5>{obj.company.name}</h5>
                             </div>
                         </div>
                )
            })
        }
    </div>
  )
}

export default GetServerDataComp
