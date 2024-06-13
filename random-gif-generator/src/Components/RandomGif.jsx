import React, { useState } from 'react';

const RandomGif = () => {
    const[gif, setGif]= useState('');

    function gifChangeHandler() {
        setGif();
    }
    return (
        <div className='flex flex-col bg-green-400 items-center w-1/3 h-1/3'>
            <h1>Random Gif</h1>
            <img src={gif}/>
            <button onClick={gifChangeHandler}>Generate Random</button>
        </div>
    );
};

export default RandomGif;