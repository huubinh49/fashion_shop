import React, { Component } from 'react'

const LoadingComponent = (WrappedComponent)=>{
    return class Loading extends Component {
        constructor(props){
            super(props)
            this.state = {isLoading:true};
        }
        LoadedContent = ()=>{
            this.setState({isLoading: false});
        }
        render(){
            return (
            <WrappedComponent {...this.props} isLoading={this.state.isLoading} doneLoading = {()=>this.LoadedContent()}/>
        )
            }
    }
}
export default LoadingComponent;

