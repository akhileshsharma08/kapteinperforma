"use client"
import { useMyContext } from '@/app/Context/MyContext';
import PreviewPage from '@/app/components/PreviewPage';
import React from 'react'

const page = () => {
  const { Quotation } = useMyContext();
  return (
    <div>
      <PreviewPage Quotation={Quotation}/>
    </div>
  )
}

export default page