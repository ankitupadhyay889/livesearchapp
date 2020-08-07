import React, { useState } from 'react';
import Resul from './Resul';

const Search = () => {

    const [img , setImage] = useState("");

    const Inp = (e) => {
        const data = e.target.value;
        console.log(data);
        setImage(data);
    }

    return (
        <>
            <center>
                <input placeholder="Type anything" type="text" value={img} onChange={Inp} />
            </center>

            <br /><br /><br /><br />
            
            <center>
                {img === "" ? null : <Resul name={img} /> }
            </center>
        </>
    );
};

export default Search;