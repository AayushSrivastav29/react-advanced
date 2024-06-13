import React,{useState} from 'react';

const TypeGif = () => {
    const[gif, setGif]= useState('');

    function gifChangeHandler() {
        setGif();
    }
    return (
        <div className='flex flex-col bg-blue-500 items-center w-1/3 h-1/3'>
            <h1>Random {gif} Gif</h1>
            <img src={gif}/>
            <input type="text" placeholder='Type gif'/>
            <button onClick={gifChangeHandler}>Generate Random</button>
        </div>
    );
};

export default TypeGif;