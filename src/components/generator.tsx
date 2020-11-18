import React from 'react';
import Fields from './generatorChildren/fields'
import Exports from './generatorChildren/exports' 

const Generator = () => {
    return (
        <div>
          <h1>Dummy Data Generator</h1>
          <Fields />
          <Exports />
        </div>
    )
}

export default Generator;