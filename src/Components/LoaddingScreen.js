import React, { useEffect, useRef } from 'react';
function Loading(props){
    const preloader =  useRef(undefined)
    const adjustSize = ()=>{
        if(preloader.current){
            preloader.current.style.height = `${preloader.current.getBoundingClientRect().width}px`;
        }
    }
    useEffect(() => {
        
        adjustSize();
        window.addEventListener("resize",adjustSize)
        return ()=>{
            window.removeEventListener("resize",adjustSize)
        }
    }, [])
    
    return(
        <div ref= {preloader} style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"white"}}>
            <div className="spinner-border"></div>
      </div>
    )
}

export default Loading;