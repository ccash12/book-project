import React from 'react'
import { useState } from "react";
import { useHistory } from 'react-router'

function Signup( {setUser,setErrors,isLoading,setIsLoading,errors} ){
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        setIsLoading(true)
        fetch('http://ec2-52-91-115-186.compute-1.amazonaws.com:3001/signup',{ 
            method: "POST",
            headers: { 
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email, 
                first_name,
                last_name,
                password,
                password_confirmation
            })
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user) => setUser(user))
                history.push('/')
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
            
        })
    }
    
    return(
        <div className="SignUpContainer">
            <div className="SignupImageContainer">
                <img src="https://media.istockphoto.com/photos/shopping-bag-full-of-fresh-vegetables-and-fruits-picture-id1128687123?k=20&m=1128687123&s=612x612&w=0&h=qEa-vkegksLHETe-zuGsWNqhQQI7VwofTbwSpcaNvrU="
                    alt="login image"
                    />
            </div>
            <div className="SignupFormContainer">
                <form className="SignupForm"onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name:</label>
                    <input 
                        type="text" 
                        id="first_name" 
                        autoComplete="off"
                        value={first_name} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="last_name">Last Name:</label>
                    <input 
                        type="text" 
                        id="last_name" 
                        autoComplete="off"
                        value={last_name} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            autoComplete="off"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        autoComplete="current-password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password_confirmation">Password Confirmation:</label>
                    <input 
                        type="password" 
                        id="password_confirmation" 
                        autoComplete="current-password"
                        value={password_confirmation} 
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <button className="SignUpBtn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                    {errors.map((err) => (
                        <div className="SignUpError" key={err}>{err}</div>
                    )) }
                </form>
            </div>
        </div>
    )
}

export default Signup; 