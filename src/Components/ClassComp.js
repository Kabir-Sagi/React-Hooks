import React, { Component } from 'react'

 class ClassComp extends Component {
     constructor(){
         super()
         this.state = {
             count:0
         }
     }
    render() {
        return (
            <div>
                 <button className="btn btn-primary m-2" onClick={()=>this.setState({
                     count:this.state.count  + 1
                 })}>Clicked me {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassComp
