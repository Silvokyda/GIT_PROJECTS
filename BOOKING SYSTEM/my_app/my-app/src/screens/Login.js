import React, { useState } from 'react'

function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function logining() {
            const user = {
                email,
                password  
            }
            console.log(user)   
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5'>
                    <div className='bs'>
                        <h1>Login</h1>
                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <button className='btn btn-primary mt-3' onClick={logining}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
