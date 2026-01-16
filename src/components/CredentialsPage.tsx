import Credential from './Credential';

export default function CredentialsPage() {

    return (
        <main>
            <h1 className="title">Profiles</h1> <span><i>{/* reveal/hide icon */}</i></span>
            {/* add padding and bottom border */}

            <h2>Websites</h2>
            <h2>Usernames</h2>
            <h2>Passwords</h2>
            <Credential website='www.google.com' username='margook@gmail.com' password='sillymeh' />
        </main>
    )
}