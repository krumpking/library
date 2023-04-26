import React, { useEffect, useState } from 'react';
import Navbar from '../app/components/navbar';

const AddAuthor = () => {
  const [AuthorName, setAuthorName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Age, setAge] = useState('');

  useEffect(() => {
    alert(AuthorName);
    alert(LastName);
    alert(Age);
  }, []);

  return (
    <div>
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg mt-4 w-64">
          <h1 className="font-bold mt-2">Add Author</h1>
          <input
            type="text"
            placeholder="Enter Author Name"
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          />
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
          />
          <button className="mt-6 mb-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Add Author
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAuthor;
