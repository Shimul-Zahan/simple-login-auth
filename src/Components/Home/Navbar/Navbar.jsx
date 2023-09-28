import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar bg-base-100 py-8">
          <div className="flex-1">
              <a className="font-bold text-3xl">Login-Auth</a>
          </div>
          <div className="flex-none gap-4 text-xl">
              <div className='flex justify-center items-center gap-10'>
                  <Link to='/'>Home</Link>
                  <Link to='/registration'>Registration</Link>
                  <Link to='/login'>Login</Link>
              </div>
              <div className="dropdown dropdown-end">
                  <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                  </label>
                  <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                          <a className="justify-between">
                              Profile
                              <span className="badge">New</span>
                          </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Navbar