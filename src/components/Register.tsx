export default function Register() {

    return (
        <>
            <h1>Register</h1>

            <form id='registerForm'>
                <label htmlFor='name'>Name</label>
                <input name='name' type='text'></input>

                <label htmlFor='email'>Email</label>
                <input name='email' type='text'></input>
                
                <label htmlFor='username'>Username</label>
                <input name='username' type='text'></input>
                
                <label htmlFor='password'>Password</label>
                <input name='password' type='password'></input>

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input name='confirmPassword' type='password'></input>

                <button>OK</button>
                <button>Cancel</button>

                <p className='loginLink'>Login</p>
            </form>
            
        </>
    )
}