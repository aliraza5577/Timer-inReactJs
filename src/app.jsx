import React, { useState } from 'react';

function App(){
    const [cTime, setCtime] = useState(new Date().toLocaleTimeString());
     
    const IncNum = ()=>{
        setCtime(new Date().toLocaleTimeString());
    }
    // setTimeout(() => {
    //     IncNum();
    // }, 1000);
    setInterval(IncNum,1000);

    
    return(
        <>
            <div className='mainWrapper'>
            <div className='innerWrapper'>
                <div className='bar'>
                    <p>{cTime}</p>
                    {/* <button onClick={IncNum}>Get Time</button> */}
                </div>
            </div>
            </div>
        </>
    )
}

export default App;