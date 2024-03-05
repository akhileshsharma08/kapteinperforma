"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useMyContext } from "@/app/Context/MyContext";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const {clientDetail, setClientDetail} = useMyContext()
  const router = useRouter()
  const [loading,setLoading]= useState(false)
  const [formData, setFormData] = useState({
    firmName: "",
    gstNumber: "",
    contact: "",
    email: "",
    supplyPlace: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext =async () => {
    setLoading(true)
    await setClientDetail({...formData})
    setLoading(false)
   
      router.push('/dashboard/ItemsDetailForm')
   
  };

  return (
    <div className="flex justify-center mx-auto mybg h-screen">
      <div className="box md:w-1/2 3/4 mt-12 mx-4">
        <div className="bg-white mainformBox shadow-md rounded-xl md:px-8 px-2 pt-6 pb-8">
          <h1 className="text-center my-2 text-xl font-bold bg-yellow-400"> Step 1 - Company Details</h1>
          <hr />
          <div className="contactDetails flex justify-center items-center">
            <div className="mb-2 mx-1 w-1/3">
              <label className="block font-semibold mb-1" htmlFor="firmName">
                Firm Name
              </label>
              <input
                className="shadow appearance-none text-lg border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                id="firmName"
                name="firmName"
                type="text"
                placeholder="Firm Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2 mx-1 w-1/3">
              <label className="block font-semibold mb-1" htmlFor="gstNumber">
                GST Number
              </label>
              <input
                className="shadow appearance-none text-lg border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                id="gstNumber"
                type="text"
                name="gstNumber"
                placeholder="GST Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2 mx-1 w-1/3">
              <label className="block font-semibold mb-1" htmlFor="contact">
                Contact
              </label>
              <input
                className="shadow appearance-none text-lg border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                name="contact"
                placeholder="Contact Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2 mx-1 w-1/3">
              <label className="block font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none text-lg border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-2 mx-1">
            <label className="block font-semibold mb-1" htmlFor="address">
              Supply Address
            </label>
            <textarea
              className="shadow appearance-none text-lg border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              placeholder="Address"
              name="address"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleNext}
            >
              {!loading?"Next" : "Processing..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
