import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="content pt-32 text-center">
        <h1 className=" my-10 text-6xl uppercase font-bold italic text-center ">create <br /> quotation <br />easily</h1>
      <div className="my-4">
        <Link
          href={"/dashboard/create"}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 md:text-6xl text-2xl rounded-full px-4 py-2 "
        >
          Create Quotation
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
