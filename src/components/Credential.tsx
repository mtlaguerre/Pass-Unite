export default function Credential({ website, username, password }) {

    return (
        <>
            <div>
                <span>{website}</span> <span>{username}</span> <span>{password}</span>
            </div>
            <span><i>{/* reveal/hide icon */}</i></span>
            <span><i>{/* delete/remove icon */}</i></span>
        </>
    )
}