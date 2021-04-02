import React, { useState } from 'react';
import SignInSplashImage from "../../assets/img/sign-in-splash-image.png";
import FungiPNG from "../../assets/img/fungi.png";

import "./signInSignUpPage.styles.scss";

export const SignInSignUpPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        // Auth check
        alert("LOGGED IN WITH USERNAME: " + username + " AND PASSWORD: " + password);
    }

    return (
        <div className="main-div">
            <div className="splash-image__container">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="rocket">
                    <img className="rocket-body body" src={FungiPNG} style={{ width: "200px" }} />
                    <div className="exhaust-flame"></div>
                    <ul className="exhaust-fumes">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="sign-in__container">
                <div className="brand">
                    <div className="brand__title">
                        Welcome to Funger
                    </div>
                </div>
                <form className="sign-in__form" onSubmit={handleSubmit}>
                    <div className="brand__subtitle">
                        Sign in
                        </div>
                    <input
                        name="username"
                        className="sign-in__field"
                        placeholder="Username"
                        type="username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        name="password"
                        className="sign-in__field"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="sign-in__field sign-in__button"
                    >
                        Let's Go
                        </button>
                    <span>
                        <a href="#">
                            Don't have an account? Make one!
                            </a>
                    </span>
                </form>
            </div>
        </div>
    )
}
