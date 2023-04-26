import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '../app/components/navbar';

export default function EditBooks() {
  return (
    <div>
      <div className="mt-4">
        <Navbar />
      </div>
      <div>Edit Books</div>
    </div>
  );
}
