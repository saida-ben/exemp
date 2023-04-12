import React from 'react'
import Formulaireitem from './Page1'

function Items (props) {
  return (
    <div>
<label for={props.for} class="formbold-form-label"> {props.name} </label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          className={props.className}
        />    
</div>
  )
}

export default Items
