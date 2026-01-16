export default function Register({ onLoginClick }) {

    return (
        <>
            <h1 className="title">Register</h1>

            <form id='registerForm'>
                <label htmlFor='name'>Name</label>
                <input name='name' type='text' required></input>

                <label htmlFor='email'>Email</label>
                <input name='email' type='text' required></input>
                
                <label htmlFor='username'>Username</label>
                <input name='username' type='text' required></input>
                
                <label htmlFor='password'>Password</label>
                <input name='password' type='password' required></input>

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input name='confirmPassword' type='password' required></input>

                <button type="submit">OK</button>
                <button>Cancel</button>

                <p className='loginLink' onClick={onLoginClick}>Login</p>
            </form>
            
        </>
    )
}