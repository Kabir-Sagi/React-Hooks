import React,{useState} from 'react'
import Info from '../StaticFiles/Info'

function PersonComp() {

    function update() {
        setData(Info)
    }
              const [data,setData]  = useState([])
    return (
        <div>
            <button className="btn btn-warning m-4" onClick={()=>update()} >Get Data</button>

            <div className="container">
                <div className="row">
                    {data.map((o,i)=> {
                        return(

                            <>
                             <div className="col-md-4">
                                 <div className="card m-2 text-center text-white">
                                     <div className="card-header font-weight-bold bg-danger">
                                       <h4 >Person Details</h4>
                                     </div>
                                     <div className="card-body bg-dark">
                        <p>Name:{o.name}</p>
                        <p>Email:{o.email}</p>
                        <p>Country:{o.country}</p>
                                     </div>
                                 </div>
                             </div>

                            </>
                        )


                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default PersonComp
