export default function Login({ onLogin, onRegisterClick }) {

    function handleVerifyLogin(event) {
    event.preventDefault();

    // once verified, call onLogin
    onLogin();
}

    return (
        <>
            <h1>Login</h1>

            <form id='loginForm'>
                <label htmlFor='username'>Username:</label>
                <input name='username' type='text' required></input>
                
                <label htmlFor='password'>Password:</label>
                <input name='password' type='password' required></input>

                <button type="submit" onClick={handleVerifyLogin}>OK</button>
                <button type="reset">Cancel</button>

                <p className='registerLink' onClick={onRegisterClick}>Register</p>
            </form>
            
        </>
    )
}