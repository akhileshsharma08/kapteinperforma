s.no
item name 
hsn code 
qty
rate
taxable without gst
gst
grand total
---------------------------------------
"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const CreatePage = () => {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState([
    {
      firmname: "",
      gstnumber: "",
      contact: "",
      email: "",
      supplyPlace: "",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: "",
    hsnCode: "",
    qty: "",
    rate: "",
  });
  const [items, setItems] = useState([
    {
      itemName: "",
      hsnCode: "",
      qty: "",
      rate: "",
    },
  ]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleNewItemInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleContactText = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    setItems([...items, { itemName: "", hsnCode: "", qty: "", rate: "" }]);
    setCounter(counter + 1);
    if (counter + 1 === 2) {
      setFlag(true);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setCounter(counter - 1);
    if (counter === 3) {
      setFlag(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  return (
    <div className="flex justify-center items-center mx-auto mybg min-h-screen">
      <div className="box md:w-1/2 3/4 my-10 mx-4">
        <div
          className={`bg-white mainformbox shadow-md rounded-xl md:px-8 px-2 pt-4 pb-8 ${
            flag ? "overflow-auto max-h-[80vh]" : ""
          }`}
        >
          <h1 className="text-center my-2 text-xl font-bold bg-yellow-400">
            Company Details
          </h1>
          <hr />
          <div className="contactDetails flex justify-center items-center">
            <div className="mb-2 mx-1">
              <label className="block   font-semibold mb-1" htmlFor="firmname">
                Firm
              </label>
              <input
                className="shadow    border rounded w-full py-2 px-1  leading-tight focus:outline-none focus:shadow-outline"
                id="firmname"
                name="firmname"
                type="text"
                placeholder="Firm Name"
                onChange={handleContactText}
              />
            </div>
            <div className="mb-2 mx-1">
              <label className="block   font-semibold mb-1" htmlFor="gstnumber">
                GST No
              </label>
              <input
                className="shadow    border rounded w-full py-2 px-1  leading-tight focus:outline-none focus:shadow-outline"
                id="gstnumber"
                type="text"
                name="gstnumber"
                placeholder="GST Number"
                onChange={handleContactText}
              />
            </div>
            <div className="mb-2 mx-1">
              <label className="block   font-semibold mb-1" htmlFor="contact">
                Contact
              </label>
              <input
                className="shadow    border rounded w-full py-2 px-1  leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                name="contact"
                placeholder="Contact Number"
                onChange={handleContactText}
              />
            </div>
            <div className="mb-2 mx-1">
              <label className="block   font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="shadow    border rounded w-full py-2 px-1  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleContactText}
              />
            </div>
          </div>
          <div className="mb-2 mx-1">
            <label className="block   font-semibold mb-1" htmlFor="address">
              Supply Address
            </label>
            <textarea
              className="shadow    border rounded w-full py-2 px-1  leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              placeholder="Address"
              name="address"
              onChange={handleContactText}
            ></textarea>
          </div>
          <h1 className="my-4 text-center text-xl font-bold border-b-2 bg-yellow-400">
            Enter item details
          </h1>
          <label className="block font-semibold mb-1" htmlFor={`company`}>
            Select Brand
          </label>
          <select
            className="shadow appearance-none  bg-white border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            name="company"
            onChange={handleContactText}
          >
            <option value="">Select Company</option>
            <option value="company1">Polyline</option>
            <option value="company2">Ecocell</option>
            <option value="company3">Kaptein</option>
            {/* Add more options as needed */}
          </select>
          {items.map((item, index) => (
            <div key={index} className="formBox flex justify-center">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Item Name</th>
                    <th className="px-4 py-2">HSN</th>
                    <th className="px-4 py-2">QTY</th>
                    <th className="px-4 py-2">Rate</th>
                    <th className="px-4 py-2"></th>{" "}
                    {/* Empty header for remove button */}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">item a</td>
                      <td className="border px-4 py-2">332</td>
                      <td className="border px-4 py-2">100</td>
                      <td className="border px-4 py-2">550</td>
                      <td className="border px-4 py-2 flex justify-between items-center">
                        <button
                          type="button"
                          className="text-white bg-red-600 p-[5px] text-2xl text-center rounded-full font-extrabold"
                          onClick={() => handleRemoveItem(index)}
                        >
                          {/* X */}
                          <MdDeleteForever />
                        </button>
                        <button
                          type="button"
                          className="text-white bg-green-600 p-[5px] mx-2 text-2xl text-center rounded-full font-extrabold"
                          // onClick={() => handleRemoveItem(index)}
                        >
                          <FaRegEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <div className="my-2">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-600 mx-2 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={openModal}
            >
              Add item
            </button>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 bg-gray-800 opacity-98 overflow-y-auto flex justify-center items-center">
                <div className="absolute bg-gray-500 "></div>
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
                  {/* Modal content */}
                  <h2 className="text-xl font-bold mb-4">Add Item</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2 w-full mx-1">
                      <label
                        className="block font-semibold mb-1"
                        htmlFor={`itemName`}
                      >
                        Item Name
                      </label>
                      <input
                        className="shadow appearance-none   border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                        id={`itemName`}
                        name="itemName"
                        type="text"
                        placeholder="Item Name"
                        value={newItem.itemName}
                        onChange={handleNewItemInputChange}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="mb-2 w-1/3 mx-1">
                        <label
                          className="block font-semibold mb-1"
                          htmlFor={`width`}
                        >
                          width
                        </label>
                        <input
                          className="shadow appearance-none  border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id={`width`}
                          name="width"
                          type="number"
                          placeholder="width"
                          value={newItem.width}
                          onChange={handleNewItemInputChange}
                        />
                      </div>
                      <div className="mb-2 w-1/3 mx-1">
                        <label
                          className="block font-semibold mb-1"
                          htmlFor={`height`}
                        >
                          height
                        </label>
                        <input
                          className="shadow appearance-none  border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id={`height`}
                          name="height"
                          type="number"
                          placeholder="height"
                          value={newItem.height}
                          onChange={handleNewItemInputChange}
                        />
                      </div>
                      <div className="mb-2 w-1/3 mx-1">
                        <label
                          className="block font-semibold mb-1"
                          htmlFor={`unit`}
                        >
                          Unit
                        </label>
                        <select
                          className="shadow appearance-none  bg-white border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id="unit"
                          name="unit"
                          onChange={handleContactText}
                        >
                          <option value="">Select unit</option>
                          <option value="company1">sqm</option>
                          <option value="company2">rm</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="mb-2 w-1/2 mx-1">
                        <label
                          className="block font-semibold mb-1"
                          htmlFor={`qty`}
                        >
                          QTY
                        </label>
                        <input
                          className="shadow appearance-none  border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id={`qty`}
                          name="qty"
                          type="number"
                          placeholder="Quantity"
                          value={newItem.qty}
                          onChange={handleNewItemInputChange}
                        />
                      </div>
                      <div className="mb-2 w-1/2 mx-1  ">
                        <label
                          className="block font-semibold mb-1"
                          htmlFor={`rate`}
                        >
                          Rate
                        </label>
                        <input
                          className="shadow appearance-none  border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id={`rate`}
                          name="rate"
                          type="number"
                          placeholder="Rate"
                          value={newItem.rate}
                          onChange={handleNewItemInputChange}
                        />
                      </div>
                    </div>

                    {/* Add more input fields as needed */}

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
