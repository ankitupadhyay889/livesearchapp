import React from 'react';

const Resul = (props) => {
    const img = `https://source.unsplash.com/400x700/?${props.name};`
    return (
        <div>
            <img src={img} alt="se" />
        </div>
    );
};

export default Resul;