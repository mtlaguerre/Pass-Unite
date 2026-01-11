export default function Login({ onRegisterClick }) {

    return (
        <>
            <h1>Login</h1>

            <form id='loginForm'>
                <label htmlFor='username'>Username:</label>
                <input name='username' type='text'></input>
                
                <label htmlFor='password'>Password:</label>
                <input name='password' type='password'></input>

                <button>OK</button>
                <button>Cancel</button>

                <p className='registerLink' onClick={onRegisterClick}>Register</p>
            </form>
            
        </>
    )
}