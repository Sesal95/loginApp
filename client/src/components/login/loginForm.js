import React from 'react';

const LoginForm = () => {
    return(
        <form>
            <div>
                <label>User:</label>
                <input 
                    placeholder='Enter User'
                />
            </div>

            <div>
                <label>Password:</label>
                <input 
                    placeholder='Enter Password'
                />
            </div>

            <div>
                <button type='submit'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm
