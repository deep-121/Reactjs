import React from 'react';
import './AddForm.css';

const AddForm = () => {
  return (
    <div className='main'>
        <h1 className='title'>Add Form</h1>
        <form action='#' className='addform'>
            <div className='field'>
                <label for="uniq">Id: </label>
                <input type="number" name="uniq" maxLength="3"  className='input'/>
            </div>
            <div className='field'>
                <label for="name">Name: </label>
                <input type="text" name="name" className='input'/>
            </div>
            <div className='field'>
                <label for="email">Email: </label>
                <input type="email" name="Eamil"  className='input'/>
            </div>
            <div className='field'>
                <label for="age">Age: </label>
                <input type="number" name="age" maxLength="2"  className='input'/>
            </div>
            <div className='field'>
                <label for="phone">Phone: </label>
                <input type="number" name="phone" maxLength="10"  className='input'/>
            </div>
            <div className='field'>
                <label for="status">Status:</label>
                <div className='radiobuttons'>
                <input type="radio" id="Active" name="status" value="Active" checked="checked" />
                <label for="Active">Active</label>
                <input type="radio" id="Inactive" name="status" value="Inactive" />
                <label for="Inactive">Inactive</label>
                </div>
            </div>
            <div className='field'>
                <input type="submit" name='submit' value="Submit" className='submit'/>
            </div>
        </form>
    </div>
  )
}

export default AddForm;