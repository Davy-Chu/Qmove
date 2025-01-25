export default function Login() {
    const login = () => {
        console.log("Logging in...");
    };
    return (
        <div className="login">
            <button onClick={login}>Log in</button>
            <h1>Login</h1>
        </div>
    );
}