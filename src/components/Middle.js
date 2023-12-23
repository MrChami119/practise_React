import React from 'react'

const Middle = () => {
  return (
    <div className='wrapper'>
        <form className='form'>
            <h1>Login</h1>
            <div className='input'>
                <input type='text' placeholder='example@gmail.com' required></input>
            </div>
            <div>
                <input type='password' placeholder='password' required></input>
            </div>
            <button className='btn' type='submit'>Login</button>
        </form>
      
    </div>
  )
}

export default Middle
