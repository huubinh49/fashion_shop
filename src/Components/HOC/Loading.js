import React, { Component, Suspense } from 'react'
import Preloader from '../PreloaderScreen';

const LoadingComponent = (WrappedComponent)=>{
    return class LoadingCom extends Component {
        constructor(props){
            super(props)
            this.state = {isLoading:true};
        }
        LoadedContent = ()=>{
            this.setState({isLoading: false});
        }
        render(){
            return (
                <Suspense fallback={<Preloader />}>
                    <WrappedComponent {...this.props} isLoading={this.state.isLoading} doneLoading = {()=>this.LoadedContent()}/>
                </Suspense>
            )
        }
    }
}
export default LoadingComponent;

