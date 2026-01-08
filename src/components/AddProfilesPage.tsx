export default function AddProfilesPage() {

    return (
        <>
            <h1>Add a Profile</h1>

            <form id='AddProfileForm'>
                <label htmlFor='website'>Website:</label>
                <input name='website' type='text'></input>

                <label htmlFor='username'>Username:</label>
                <input name='username' type='text'></input>

                <label htmlFor='password'>Password:</label>
                <input name='password' type='password'></input> <span><i>{/* reveal/hide icon*/}</i></span>

                <button>Generate</button>
                <button>Add</button>
            </form>
        </>
    )
}