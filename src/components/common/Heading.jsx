import React from 'react';

const Heading = ({title}) => {
    return (
        <>
            <h2 className='heading' data-aos="fade-up-left">{title}</h2>
        </>
    );
};

export default Heading;