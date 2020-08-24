import React from 'react'

function Preloader(params) {
    return <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"white", position:"fixed", top:"0", left:"0", zIndex:"9999999"}}>
              <img src="/preloader.gif" alt="preloader" />
              </div>
}
export default Preloader;