import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap"; //move pieces of logo
//import Logo from "/logo.svg"; // Path to your SVG file

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Define the timeline for the animation
        const tl = gsap.timeline();

        // Initial animation: Move pieces apart at start
        gsap.set("#shape1", { x: -200, y: -200, opacity: 0 });
        gsap.set("#shape2", { x: 200, y: -200, opacity: 0 });
        gsap.set("#shape3", { x: -300, y: 300, opacity: 0 });
        gsap.set("#shape4", { x: 300, y: 300, opacity: 0 });
        gsap.set("#shape5", { x: -250, y: -250, opacity: 0 });
        gsap.set("#shape6", { x: 250, y: -250, opacity: 0 });
        gsap.set("#shape7", { x: -350, y: 350, opacity: 0 });
        gsap.set("#shape8", { x: 350, y: 350, opacity: 0 });
        gsap.set("#shape9", { x: -400, y: -400, opacity: 0 });
        gsap.set("#shape10", { x: 400, y: -400, opacity: 0 });
        gsap.set("#shape11", { x: -450, y: 450, opacity: 0 });
        gsap.set("#shape12", { x: 450, y: 450, opacity: 0 });
        gsap.set("#shape13", { x: -300, y: -300, opacity: 0 });
        gsap.set("#shape14", { x: 300, y: -300, opacity: 0 });
        gsap.set("#shape15", { x: -350, y: 350, opacity: 0 });
        gsap.set("#shape16", { x: 350, y: 350, opacity: 0 });
        gsap.set("#shape17", { x: -250, y: -250, opacity: 0 });
        gsap.set("#shape18", { x: 250, y: -250, opacity: 0 });
        gsap.set("#shape19", { x: -200, y: 200, opacity: 0 });
        gsap.set("#shape20", { x: 200, y: 200, opacity: 0 });
        gsap.set("#shape21", { x: -150, y: -150, opacity: 0 });
        gsap.set("#shape22", { x: 150, y: -150, opacity: 0 });
        gsap.set("#shape23", { x: -100, y: 100, opacity: 0 });

        // Assemble animation: Move pieces together and fade in
        const assembleTimeline = gsap.timeline();

        // Add animations for each shape
        assembleTimeline.to("#shape1", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" });
        assembleTimeline.to("#shape2", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape3", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape4", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape5", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape6", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape7", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape8", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape9", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape10", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape11", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape12", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape13", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape14", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape15", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape16", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape17", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape18", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape19", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape20", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape21", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape22", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        assembleTimeline.to("#shape23", { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8");
        

        // Floating motion: Subtle movement once assembled
       //gsap.to("#Layer1", {
       //     y: "+=5", // Float vertically
        //    x: "+=3", // Float horizontally
       //     duration: 3,
      //     repeat: -1, // Infinite repeat
       //     yoyo: true, // Reverse the motion
       //     ease: "power1.inOut", // Smooth movement
       //     transformOrigin: "center center", // Float relative to the center
         // });

         assembleTimeline.eventCallback("onComplete", () => {
            gsap.utils.toArray("path").forEach((shape) => {
                gsap.to(shape, {
                x: `random(-5, 5)`, // Random horizontal movement between -10 and 10 units
                y: `random(-8, 8)`, // Random vertical movement between -10 and 10 units
                duration: `random(3, 6)`, // Random duration between 3 and 6 seconds
                repeat: -1, // Infinite loop
                yoyo: true, // Reverse the motion
                ease: "power1.inOut", // Smooth easing for natural movement
                });
            });
        })


    }, []);




  const login = () => {
    if (email === "" && password === "") {
      alert("Invalid email or password");
    } else {
      console.log("Login successful!");
      navigate("/dashboard"); // Redirect to the dashboard
    }
  };


    return (
        <div className="login-container">
            {/* Display the logo using the public folder */}
            <div className="logo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    width="400"
                    height="300"
                >
                    <g id="Layer1">
                        <path
                        id="shape1"
                        fillRule="evenodd"
                        className="s0"
                        d="m10 106l14 68 16-32z"
                        />
                        <path
                        id="shape2"
                        fillRule="evenodd"
                        className="s0"
                        d="m45 159l-10 12-3 8 27 1z"
                        />
                        <path
                        id="shape3"
                        fillRule="evenodd"
                        className="s0"
                        d="m26 185l-19 44 38-17 57 13-32-27-10-13z"
                        />
                        <path
                        id="shape4"
                        fillRule="evenodd"
                        className="s0"
                        d="m5 117l-2 105 18-40z"
                        />
                        <path
                        id="shape5"
                        fillRule="evenodd"
                        className="s0"
                        d="m4 236l42-16 66 12-25 42 15 60-60-37-36-34z"
                        />
                        <path
                        id="shape6"
                        fillRule="evenodd"
                        className="s0"
                        d="m116 235l-20 37 59 18-11-31z"
                        />
                        <path
                        id="shape7"
                        fillRule="evenodd"
                        className="s0"
                        d="m152 265l20 48 36-13-2-50z"
                        />
                        <path
                        id="shape8"
                        fillRule="evenodd"
                        className="s0"
                        d="m94 277l16 62 48 21-3-63z"
                        />
                        <path
                        id="shape9"
                        fillRule="evenodd"
                        className="s0"
                        d="m161 300l4 58 9.5-24.7z"
                        />
                        <path
                        id="shape10"
                        fillRule="evenodd"
                        className="s0"
                        d="m174 353l7-20 20 8z"
                        />
                        <path
                        id="shape11"
                        fillRule="evenodd"
                        className="s0"
                        d="m209 306l-2 33-29-12-2-10z"
                        />
                        <path
                        id="shape12"
                        fillRule="evenodd"
                        className="s0"
                        d="m356 185l-60 32 38 19-5 38 60-42 9-39z"
                        />
                        <path
                        id="shape13"
                        fillRule="evenodd"
                        className="s0"
                        d="m214 248l75-27 35 18-82 27z"
                        />
                        <path
                        id="shape14"
                        fillRule="evenodd"
                        className="s0"
                        d="m214 260l50 26-47 15z"
                        />
                        <path
                        id="shape15"
                        fillRule="evenodd"
                        className="s0"
                        d="m253 269l43 27 28-48z"
                        />
                        <path
                        id="shape16"
                        fillRule="evenodd"
                        className="s0"
                        d="m308 290l15-11 4-23z"
                        />
                        <path
                        id="shape17"
                        fillRule="evenodd"
                        className="s0"
                        d="m219 310v25l72-32-16-10z"
                        />
                        <path
                        id="shape18"
                        fillRule="evenodd"
                        className="s0"
                        d="m359 179l29 3-18-56z"
                        />
                        <path
                        id="shape19"
                        fillRule="evenodd"
                        className="s0"
                        d="m372 75l19 25-18 1z"
                        />
                        <path
                        id="shape20"
                        fillRule="evenodd"
                        className="s0"
                        d="m373 106l17-1 3 28-2 43-19-55z"
                        />
                        <path
                        id="shape21"
                        fillRule="evenodd"
                        className="s0"
                        d="m401 130l65 47-32 25z"
                        />
                        <path
                        id="shape22"
                        fillRule="evenodd"
                        className="s0"
                        d="m405 127l54 39-8-31-27-21z"
                        />
                        <path
                        id="shape23"
                        fillRule="evenodd"
                        className="s0"
                        d="m397 141l5-1 27 65-29 19 8-40-12-4z"
                        />
                    </g>
                </svg>
                <div style={{ fontFamily: "'Impact', sans-serif", fontSize: "6rem", marginTop: "-35px"}}>
                Qmove
                </div>
            </div>

            

            <div className="login" style={{ textAlign: "center", marginTop: "40px" }}>
                <h1>Login</h1>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={login}
                    className="login-button"
                >
                        Log in
                </button>
            </div>
        </div>
    );
}
