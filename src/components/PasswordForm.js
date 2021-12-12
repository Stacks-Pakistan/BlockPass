import React from "react";
import { useState } from "react";
import { AddPassword } from "../assets/data/contracts";
// smart contract api
// use to return a contracts information

export default function PasswordForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [website, setWebsite] = useState("");

    const handleSubmit = () => {
        AddPassword(email, password, website);
    };

    return (
        <div>
            <h1 className="mt-4">Add a New Password</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">
                        URL
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        class="form-control"
                        value={email}
                        id="email"
                    />
                </div>
                <div class="mb-3">
                    <label for="Username" class="form-label">
                        Login
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control"
                        value={password}
                        id="password"
                    />
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        onChange={(e) => setWebsite(e.target.value)}
                        class="form-control"
                        value={website}
                        id="website"
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
