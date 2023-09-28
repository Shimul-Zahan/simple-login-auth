import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Firebase/firebase.config';

const Registration = () => {

  const [error, setError] = useState('');
  const [success, setSuccess]= useState('')

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError('');
    setSuccess('');

    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
      const user = res.user;
      setSuccess("Successfully Registered")
    })
    .catch(error => {
     setError(error.message);
    })
  }


  return (
    <div className="hero min-h-[700px]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <div className="">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image" />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#B1CEFB]">
          <div className="card-body">
            
            <form onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered" 
                  required
                  />
              </div>
              <div className="form-control mt-6 mb-3">
                <input type="submit" value='Registration' className='btn btn-primary' />
              </div>
            </form>
            {
              error && <div className="text-sm text-red-500">{ error }</div>
            }
            {
              success && <div className="text-sm text-green-500">{success }</div>
            }

            <div className='text-lg'>
              Allready have a account <Link to='/login' className='text-red-500 underline'>Log In</Link> now.
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Registration