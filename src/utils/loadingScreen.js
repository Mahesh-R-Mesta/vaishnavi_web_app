import React from 'react';
import ReactLoading from "react-loading";



function LoaderScreen(){
    return  (<div style={{width:'100%', height:'100%',alignItems:'center'}}>
        <ReactLoading type="SpinningBubbles" color="blue"/>
    </div>);

} 


export default LoaderScreen;