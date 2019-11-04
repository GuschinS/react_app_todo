import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if(value.trim()) {
            onCreate(value)
            setValue('') //clear input
        }
    }

    return(
        <form style={{marginBottom: '.5rem'}} onSubmit = {submitHandler}>
            <input type="text" value = {value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'style={{marginLeft: '.5rem'}}>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
  };

export default AddTodo