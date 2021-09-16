import React, { useState } from "react";

const ClickButton = () => {

    const handleClick = () => {
        setClicks(clicks + 1);
        localStorage.setItem('clicks', clicks + 1);
    };

    const localUser = JSON.parse(localStorage.getItem('clicks'));
    const [clicks, setClicks] = useState(localUser);

    const countToZero = () => {
        setClicks(0);
        localStorage.setItem('clicks', 0);
    }


    return ( 
        <div className="click-div">
            <div className="button-div">
                <button className='buttonToClick' onClick={handleClick}></button>
            </div>
            <div className="counter-div">
                <p className='counterParag'>{clicks}</p>
            </div>
            <div className="zero">
                <button className="zerar" onClick={countToZero}>Zerar</button>
            </div>
        </div>
     );
}
 
export default ClickButton;
