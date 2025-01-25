export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <a href="/" className="nav-link">
                    <img src="/logo.svg" alt="Logo" className="nav-logo" />
                </a>
            </div>
            <div className="nav-right">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
            </div>
        </nav>
    );
}