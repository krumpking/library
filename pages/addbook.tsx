import React, { useEffect, useState } from 'react';
import Navbar from '../app/components/navbar';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [GenreName, setGenreName] = useState('');
  const [AuthorName, setAuthorName] = useState('');
  const [DatePublished, setDatePublished] = useState('');
  const [NumberOfPages, setNumberOfPages] = useState('');

  useEffect(() => {
    alert(bookName);
    alert(GenreName);
    alert(AuthorName);
    alert(DatePublished);
    alert(NumberOfPages);
  }, []);

  return (
    <div>
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg mt-4 w-64">
          <h1 className="font-bold mt-2">Add Book</h1>
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => {
              setBookName(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          />
          <select
            onChange={(e) => {
              setGenreName(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          >
            <option>Genre Name</option>
            <option>comics</option>
            <option>romantic</option>
            <option>horror</option>
          </select>
          <select
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          >
            <option>Hi</option>
            <option>hello</option>
            <option>how</option>
            <option>where</option>
          </select>
          <select
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          >
            <option>Author Name</option>
            <option>pro</option>
            <option>mi</option>
            <option>promi</option>
            <option>mipro</option>
          </select>
          <input
            type="text"
            placeholder="Date Puplished"
            onChange={(e) => {
              setDatePublished(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          />
          <input
            type="number"
            placeholder="Number of Pages"
            onChange={(e) => {
              setNumberOfPages(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          />

          <button className="mt-6 mb-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
