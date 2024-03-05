"use client"
import { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [Quotation, setQuotation] = useState([]);
  const [clientDetail, setClientDetail] = useState([]);

  return (
    <MyContext.Provider value={{ Quotation, setQuotation,clientDetail, setClientDetail }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
