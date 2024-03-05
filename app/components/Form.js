"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firmname: "",
    gstnumber: "",
    contact: "",
    email: "",
    address: "",
    supplyPlace:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formData");
  };

  const handleInputText = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex justify-center mx-ayto text-700 mybg">
      <div className="box w-1/2 mt-4">
        <form className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block   font-semibold mb-1" htmlFor="firmname">
              Firm Name
            </label>
            <input
              className="shadow  text-xl  border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="firmname"
              name="firmname"
              type="text"
              placeholder="Firm Name"
              onChange={handleInputText}
            />
          </div>
          <div className="mb-4">
            <label className="block   font-semibold mb-1" htmlFor="gstnumber">
              GST Number
            </label>
            <input
              className="shadow  text-xl  border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="gstnumber"
              type="text"
              name="gstnumber"
              placeholder="GST Number"
              onChange={handleInputText}
            />
          </div>
          <div className="mb-4">
            <label className="block   font-semibold mb-1" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="shadow  text-xl  border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              name="contact"
              placeholder="Contact Number"
              onChange={handleInputText}
            />
          </div>
          <div className="mb-4">
            <label className="block   font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="shadow  text-xl  border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputText}
            />
          </div>
          <div className="mb-4">
            <label className="block   font-semibold mb-1" htmlFor="address">
              Address
            </label>
            <textarea
              className="shadow  text-xl  border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              placeholder="Address"
              name="address"
              onChange={handleInputText}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
