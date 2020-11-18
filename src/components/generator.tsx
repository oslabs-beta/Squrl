import React from 'react';
import Fields from './generatorChildren/fields'
import Exports from './generatorChildren/exports' 

const Generator = () => {
    return (
        <div>
          <Fields />
          <Exports />
        </div>
    )
}

export default Generator;