import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  return (
    <div className="bg-black rounded-lg text-white flex flex-row  justify-between p-8 ">
      <h1 className="">KnowledgeBase </h1>
      <div className="">
        <Link href="/books" className="mx-2">
          Books
        </Link>
        <Link href="/editbooks" className="mx-2">
          Edit Books
        </Link>
      </div>
    </div>
  );
}
