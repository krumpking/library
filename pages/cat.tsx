import Link from 'next/link';
import React, { useEffect, useState, useCallback, useMemo } from 'react';

export default function Cat() {
  const [color, setColor] = useState('');
  const [breed, setBreed] = useState('');
  const [kittens, setKittens] = useState<any>();
  const [name, setName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setColor('brown');
      setBreed('House cat');
      setKittens(4);
      setName('Troy');
    }, 5000);

    return () => {};
  }, []);

  return (
    <div className="flex flex-col">
      <div>Name {name}</div>
      <div>Color {color}</div>
      <div>Breed {breed}</div>
      <div>Number of Kittens {kittens}</div>
    </div>
  );
}
