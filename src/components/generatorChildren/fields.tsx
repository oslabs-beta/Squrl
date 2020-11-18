import React from 'react';


const Fields = () => {
    return (
    <div>
      <input placeholder="Field Name"></input>
      <select placeholder="Data Type"><option>Data Type</option></select>
     <input placeholder="% empty"></input>
     <button>Add Another Column</button>
   </div>
    )
}

export default Fields;