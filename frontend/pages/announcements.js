import Navbar from './navigation/navbar';
import { useState } from 'react';

function Announcements(){
    const [input, setInput] = useState('');

    function submit(){
        console.log(input)
    }

    return(
        <div>
            <Navbar/>
            These are todays announcements.
            <textarea value={input} onChange={(e)=> setInput(e.target.value)}></textarea>
            <button onClick={submit}>Submit</button>
        </div>
    )
};

export default Announcements;