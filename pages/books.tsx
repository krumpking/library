import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '../app/components/navbar';

export default function Books() {
  return (
    <div>
      <div className="mt-4">
        <Navbar />
      </div>
      <div>Books</div>
    </div>
  );
}
