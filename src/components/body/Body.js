import React from 'react';

//components
import Upper from './upper/UpperBody';
import Lower from './lowerbody/LowerBody'

const body = props => {
    return <div>
        <Upper></Upper>
        <Lower></Lower>
    </div>
}

export default body;