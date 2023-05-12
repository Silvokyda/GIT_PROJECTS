import React, { useState } from 'react'

function Register() {

    const { name, setname } = useState("")
    const { email, setemail } = useState("")
    const { password, setpassword } = useState("")
    const { cpassword, setcpassword } = useState("")

    function registration() {
        if (password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            console.log(user)
        }
        else {
            alert("Passwords do not match...!!")
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5'>
                    <div className='bs'>
                        <h1>Register</h1>
                        <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="confirm password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className='btn btn-primary mt-3' onClick={registration}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register