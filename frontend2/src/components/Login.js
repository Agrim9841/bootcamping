import React, { useState } from 'react';


const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }) 
        });
        var ggg = await response.json()
        console.log(ggg);
    }

    return(
        <div className="has-background-grey-dark is-flex is-align-items-center" style={{ minHeight:"100vh" }}>
            <form onSubmit={handleSubmit} className="container box content" style={{ maxWidth: "500px" }}>
                <h1 className="has-text-centered">Welcome to Bootcamp!</h1>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="john.smith@gmail.com"
                            name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password"
                            name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="mt-5 button is-info is-medium is-fullwidth">Log In</button>
            </form>
        </div>
    )
}

export default Login;