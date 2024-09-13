import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';
class ParentComp extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            name:"Harish Gowda N"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Harish Gowda N"
            });
            
        },3000);
    }
    render() {
        console.log("Parent comp Render")
        return (
        <div>I'm the parent component
            <RegularComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
        </div>
        )
    }
}

export default ParentComp