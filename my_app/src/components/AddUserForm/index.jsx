import React from 'react'
import s from './index.module.css'

export default function AddUserForm() {
  
    const submit_form2 = event => {
        event.preventDefault();
        const { user_title } = event.target;
        console.log(user_title.value);
        user_title.value = '';
    }

  return (
    <form className={ s.add_user_form }>
        <p>Add user</p>
        <input type='text' name='user_title' placeholder="User's title" />
        <button>Add user</button>
        </form>
  )
}

  
