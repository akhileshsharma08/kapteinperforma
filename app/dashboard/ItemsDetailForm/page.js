"use client"
import React, { useState } from "react";
import { useTable } from "react-table";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import { useMyContext } from "@/app/Context/MyContext";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const ItemDetailForm = () => {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brandName, setbrandName] = useState("");
  const { Quotation, setQuotation,clientDetail } = useMyContext();
  const [handlingFee, setHandlingFee] = useState(0);


  const [newItem, setNewItem] = useState({
    itemName: "",
    qty: "",
    rate: "",
  });
  const [items, setItems] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { ...newItem, brand: brandName }]);
    setCounter(counter + 1);
    if (counter + 1 === 2) {
      setFlag(true);
    }
    toast.success("item added")
    setIsModalOpen(false)
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

  const handleSubmit = async () => {
    const fee = prompt('Enter handling fee:');
    if (fee !== null) {
      const parsedFee = parseFloat(fee);
      if (!isNaN(parsedFee)) {
        try {
          const itemsWithHandlingFee = items.map(item => ({
            ...item,
            handlingFee: parsedFee
          }));
          const quotationData = {
            items: itemsWithHandlingFee,
            handlingFee: parsedFee,
            clientDetails: clientDetail
          };
          const response = await axios.post('/api/quotation/create', quotationData);
          console.log(response.data);
          toast.success('Quotation created successfully');
        } catch (error) {
          console.error('Error during quotation creation:', error);
          toast.error('Failed to create quotation');
        }
      } else {
        alert('Please enter a valid handling fee.');
      }
    }
  };
  

  const HandlePreview=()=>{
    setQuotation(...items)
  }

  console.log(clientDetail,"cdetails")

  // Define columns for react-table
  const columns = React.useMemo(
    () => [
      {
        Header: "Item Name",
        accessor: "itemName",
      },
      {
        Header: "Qty",
        accessor: "qty",
      },
      {
        Header: "Rate",
        accessor: "rate",
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div className="flex justify-around items-center">
            <button
              type="button"
              className="text-white bg-red-600 p-[4px] text-xl text-center rounded-full font-extrabold"
              onClick={() => handleRemoveItem(row.index)}
            >
              <MdDeleteForever />
            </button>
            <button
              type="button"
              className="text-white bg-green-600 p-[4px] mx-2 text-xl text-center rounded-full font-extrabold"
              // onClick={() => handleRemoveItem(row.index)}
            >
              <FaRegEdit />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: items });

  return (
    <div className="flex justify-center items-center mx-auto mybg min-h-screen">
      <div className="box md:w-1/2 3/4 my-10 mx-2">
        <div
          className={`bg-white mainformbox shadow-md rounded-xl md:px-8 px-2 pt-4 pb-8 ${
            flag ? "overflow-auto max-h-[80vh]" : ""
          }`}
        >
          <h1 className="my-4 text-center text-xl font-bold border-b-2 bg-yellow-400">
            Step 2 - Enter item details
          </h1>
          <label className="block font-semibold mb-1" htmlFor={`company`}>
            Select Brand
          </label>
          <select
            className="shadow appearance-none  bg-white border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            name="company"
            onChange={(e) => setbrandName(e.target.value)}
          >
            <option value="">Select Company</option>
            <option value="Polyline">Polyline</option>
            <option value="Ecocell">Ecocell</option>
            <option value="Kaptein">Kaptein</option>
          </select>
          <div className="formBox flex justify-center overflow-auto">
          <table className="w-full mt-2" {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} className="border bg-yellow-400">{column.render("Header")}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="border" {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td className="border" {...cell.getCellProps()}>
                          {cell.column.id === 'itemName' ? cell.value.slice(0, 40) : cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="my-2">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className={`bg-blue-500 hover:bg-blue-600 mx-2 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                brandName ? "" : "disabled:bg-gray-300 cursor-not-allowed"
              }`}
              type="button"
              onClick={openModal}
              disabled={!brandName}
            >
              Add item
            </button>
            <Link href="/dashboard/preview"
              className={`bg-green-500 hover:bg-green-600 mx-2 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                brandName ? "" : "disabled:bg-gray-300 cursor-not-allowed"
              }`}
              type="button"
              onClick={HandlePreview}
              disabled={!brandName}
            >
             Preview
            </Link>
            {isModalOpen && (
              <div className="fixed inset-0 z-50 bg-gray-800 opacity-98 overflow-y-auto flex justify-center items-center">
                <div className="absolute bg-gray-500 "></div>
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
                  {/* Modal content */}
                  <h2 className="text-xl font-bold mb-4">Add Item</h2>
                  <div>
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
                        onChange={handleNewInputChange}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                     
                      {/* <div className="mb-2 w-1/3 mx-1">
                        <label
                          className="block font-semibold mb-1"
                          htmlFor={`unit`}
                        >
                          Unit
                        </label>
                        <select
                          className="shadow appearance-none bg-white border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id="unit"
                          name="unit"
                          onChange={handleNewInputChange}
                        >
                          <option value="">Select unit</option>
                          <option value={newItem.sqm}>sqm</option>
                          <option value={newItem.rm}>rm</option>
                        </select>
                      </div> */}
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
                          onChange={handleNewInputChange}
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
                          className="shadow appearance-none border rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                          id={`rate`}
                          name="rate"
                          type="number"
                          placeholder="Rate"
                          value={newItem.rate}
                          onChange={handleNewInputChange}
                        />
                      </div>
                    </div>
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
                        onClick={handleAddItem}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default ItemDetailForm;
