import React, { useEffect, useState } from 'react';
import { Category } from './../app/types/types';
import Navbar from '../app/components/navbar';
import Loader from '../app/components/loader';
import { addCategory } from '../app/api/categoryApi';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);

  const submitCategory = () => {
    setLoading(true);

    addCategory(categoryName)
      .then((v) => {
        alert(JSON.stringify(v));
        setLoading(false);
      })
      .catch(console.error);
  };

  return (
    <div>
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="flex justify-center">
        {loading ? (
          <Loader />
        ) : (
          <div className="rounded-lg mt-4 w-64">
            <h1 className="font-bold mt-2">Add Category</h1>
            <input
              type="text"
              placeholder="Enter Category Name"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              className="mt-6 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:border-sky-500 focus:ring-sky-500"
            />
            <button
              onClick={() => {
                submitCategory();
              }}
              className="mt-6 mb-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Add Category
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCategory;
