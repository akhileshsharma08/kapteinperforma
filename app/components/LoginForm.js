'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [userphone, setUserPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading]= useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post('/api/login', { userphone, password });
      console.log(response.data); 
      setLoading(false)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
      router.push('/')
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl mt-20 items-center my-4 bg-yellow">Login </h1>
      <div className="flex justify-center mx-auto mt-4 text-700">
        <div className="box md:w-1/3 w-full md:mx-0 mx-4 mt-4">
          <form className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                className="shadow text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone"
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="shadow text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mx-auto">
              <button
                className="bg-yellow-500 w-full hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                {!loading? "Login" : "Loading..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;