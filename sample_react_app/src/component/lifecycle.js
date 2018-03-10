import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     getUser(){
        //json
       var x
    }
   
    componentDidCatch(error, info) {
    
        console.log(error)

    }
    componentDidMount() {
        console.log("componentDidMount")
    } 
    componentWillUnmount(){
        // dom clean 
        console.log("dom clean")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
    }
    componentWillMount() {
        
        console.log("componentWillMount")
    }
    componentWillReceiveProps(nextProps) {
        console.log("cwrp",nextProps)
    }
    render() { 
        return ( 
            <div>
                Lifecycle
            </div>
         )
        }

}
 
export default Lifecycle;