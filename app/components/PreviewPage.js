"use client"
import React, { useEffect } from "react";
// import Banner from "@/public/assets/banner.png";
import Banner from "@/public/assets/banner.png";
import Image from "next/image";
import { useMyContext } from "../Context/MyContext";


const PreviewPage = () => {
  const { Quotation } = useMyContext();
  console.log(Quotation,"quot Preview Page")

  useEffect(()=>{

  },[])

  return (
    <div className="flex justify-center  mx-auto min-h-screen bg-slate--200 ">
      <div className="box w-4/5  mb-4">
        <div className="banner w-full border  mt-4 relative">
          <Image
            src={Banner}
            alt="banner"
            objectFit="contain"
          ></Image>
        </div>
        {/* =========================== Table Start====================== */}
        <div className="content border-2 border-black mt">
          <h1 className="text-center font-bold">Quotation</h1>
          {/* =========================== Client Details====================== */}
          <div className="clientbox ">
            <table className="border-collapse w-full">
              <tbody>
                <tr>
                  <td className="border w-1/2 border-gray-400 px-2  py-2">
                    <p className="text-sm">Buyer (Bill to)</p>
                    <h1 className="font-bold">M/s aABDJ pvt ltd</h1>
                    <p>Address: hhkh kjh kjh k kjh khk</p>
                    <p className="font-semibold">GST NO: 09AHCPJO720B1z3</p>
                  </td>
                  <td className="border w-1/2 border-gray-400 px-2 text-center py-2">
                    <div className="float-right items-start">
                      <div className="">Serial:QUOT24/03/04</div>
                      <div className="">Date:01-Mar-2024</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* ================================Quotation Table ======================== */}
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border w-[16px] border-gray-400 px-2 py-2">
                  S.NO
                </th>
                <th className="border w-1/2 border-gray-400 px-2 text-center py-2">
                  Item Name
                </th>
                <th className="border border-gray-400 px-2 text-center py-2">
                  Brand
                </th>
                <th className="border w-[30px] border-gray-400 px-2 text-center py-2">
                  QTY
                </th>
                <th className="border border-gray-400 px-2 text-center py-2">
                  Unit
                </th>
                <th className="border border-gray-400 px-2 text-center py-2">
                  Rate
                </th>
                <th className="border border-gray-400 px-2 text-center py-2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 text-center py-2">
                  1
                </td>
                <td className="border border-gray-400 px-2  py-2"> item 2</td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  Ecocell
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  36
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  sqm
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  272
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  12000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 text-center py-2">
                  2
                </td>
                <td className="border border-gray-400 px-2  py-2"> item 1</td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  PolyLine
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  150
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  rm
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  177
                </td>
                <td className="border border-gray-400 px-2 text-center py-2">
                  1770
                </td>
              </tr>
            </tbody>
          </table>
          <div className="totalbox capitalize float-right w-1/4 leading-2 px-2">
  <table className="">
    <tbody>
      <tr >
        <td className="font-semibold">Taxable</td>
        <td className="float right">12000</td>
      </tr>
      <tr>
        <td className="font-semibold">GST 18%</td>
        <td>320</td>
      </tr>
      <tr>
        <td className="font-semibold">Handeling Fees</td>
        <td>500</td>
      </tr>
      <tr>
        <td className="font-semibold">Total</td>
        <td>12320</td>
      </tr>
    </tbody>
  </table>
</div>

          {/* ========================== Footer Table======================== */}
          <div className="FooterBox relative">
            <h1 className="border absolute">Note</h1>
            <table className="border-collapse w-full">
              <tbody>
                <tr>
                  <td className="border w-1/2 border-gray-400 px-2 pl-4 text-sm py-2">
                    <ul className="list-decimal leading-2">
                      <li>Freight Extra.</li>
                      <li>50% Advance & 50% Before Dispatch. SHEET DESIGN</li>
                      <li>Order Once Placed Cannot Be Cancelled. DOOR SIZE</li>
                      <li>
                        Handling Includes Only Packaging And Shipping to the
                        Transporter Office Only.
                      </li>
                      <li>100% (full payment) before delivery.</li>
                    </ul>
                  </td>
                  <td className="border w-1/2 border-gray-400 px-2 text-center py-2">
                    <div>
                      <div className="w-1/2"></div>
                      <div className="w-1/2"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="signatureBox my-2 float-right mr-8">
          <p className="font-semibold uppercase">Authorised Signatory</p>
          <div className="signImage w-44 h-16 bg-pink-600">
            <p className="my-2">Sign image</p>
          </div>
          <p className="font-semibold uppercase">Partner</p>
        </div>
      </div>
    </div>
  );
};
export default PreviewPage;
