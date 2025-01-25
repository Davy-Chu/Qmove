import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = () => {
        if (email === "" && password === "") {
            alert("Invalid email or password");
        } else {
            console.log("Login successful!");
            navigate("/dashboard"); // Redirect to the dashboard
        }
    };

    return (
        <div className="login" style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
            />
            <button
                onClick={login}
                style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
            >
                Log in
            </button>
        </div>
    );
}
