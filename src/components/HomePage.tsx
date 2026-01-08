export default function HomePage() {

    return (
        <>
            <h1>Welcome to Pass Unite</h1>
            {/* add padding and bottom border */}

            <div>
                <h2>About Pass Unite</h2>
                <p>
                    Pass Unite is a password manager application allowing users to
                    save user inputed credentials. There are plenty of apps we use
                    throughout our daily lives, and just because it's immediately
                    convenient to create a single password for all platforms doesn't
                    mean it will stay convenient. As technology grows more powerful,
                    so does malicious actors. Having varying passwords dedicated to
                    each platform drastically lowers the chances of getting
                    compromised on your platforms.
                </p>

                <h2>Why Use Pass Unite?</h2>
                <ul>
                    <li>Navigating is made easy!</li>
                    <li>Fully encrypted data</li>
                    <li>No distracting features</li>
                </ul>
            </div>

            {/* add margin and bottom border */}

            <div>
                <h2>Contact Me</h2>
                <p>
                    Software Engineer at work and scientist at heart. <span>Connect Now</span>
                    or just use Pass Unite. I encourage both!
                </p>
                <span>- Marcus Laguerre</span>

                <p>
                    Reports & Suggestions <a href='https://github.com/mtlaguerre/Pass-Unite/issues' target='_blank'>here</a>
                </p>
            </div>
        </>
    )
}