import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../../contexts/authContext'
import { deCreateUserWithEmailAndPassword } from '../../firebase/auth'
// import { useNavigate } from 'react-router-dom'

 export const Register = () => {

    // const navigate = useNavigate()

    const [email, setEmail] = useState('zeyadalrihany@gmail.com')
    const [fullname, setName] = useState('')
    const [password, setPassword] = useState('123456789')
    const [confirmPassword, setconfirmPassword] = useState('123456789')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();


    // const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        // if(!isRegistering) {
            // setIsRegistering(true)
            await deCreateUserWithEmailAndPassword(email, password).then(response=>{console.log(response.user) 
                localStorage.setItem("isLogin" , true)

                localStorage.setItem("email" , response.user.email)
                navigate('/');
                window.location.reload()
            }).catch(error=>{console.log(error,"error")  
                alert(error.message)}).finally(()=>console.log("finally"));
        // }
    }

    return (
        <>
            {/* {userLoggedIn && (<Navigate to={'/'} replace={true} />)} */}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        {/* <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Full Name
                            </label>
                            <input
                                type="text"
            
                                required
                                value={fullname} onChange={(e) => { setName(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div> */}
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        {/* <div className="text-sm text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div> */}
                    </form>
                </div>
            </main>
        </>
    )
}

// export default Register