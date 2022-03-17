import React from 'react';

import classes from './Feature.module.css';

const Feature = ({imgurl, imgtext, title, text}) => {
    return (
        <div className={classes.feature}>
            <img src={imgurl} alt={imgtext} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Feature
