import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Category } from './../types/types';

export default function Navbar() {
  return (
    <div className="bg-black rounded-lg text-white flex flex-row  justify-between p-8 ">
      <h1>KnowledgeBase </h1>
      <div>
        <Link href="/books" className="mx-2">
          Books
        </Link>
        <Link href="/addbook" className="mx-2">
          Add Book
        </Link>
        {/* <Link href="/editbooks" className="mx-2">
          Edit Books
        </Link> */}
        <Link href="/addgenre" className="mx-2">
          Add Genre
        </Link>
        <Link href="/addcategory" className="mx-2">
          Add Category
        </Link>
        <Link href="/addauthor" className="mx-2">
          Add Author
        </Link>
      </div>
    </div>
  );
}
