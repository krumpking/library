// import React from 'react';
// import Categories from '../components/categories';

// export const getStaticProps = async () => {
// const categories = [
//     {
//         id: 1,
//         genre: 'Romance',
//       },
//       {
//         id: 2,
//         genre: 'Comedy',
//       },
//       {
//         id: 3,
//         genre: 'Mystrey',
//       },
//       {
//         id: 4,
//         genre: 'Thriller',
//       },
//       {
//         id: 5,
//         genre: 'Mystrey',
//       },
//       {
//         id: 6,
//         genre: 'SciFi',
//       },
//       {
//         id: 7,
//         genre: 'Kids',
//       },
//       {
//         id: 8,
//         genre: 'Adventure',
//       },
//       {
//         id: 9,
//         genre: 'Comics',
//       },
//       {
//         id: 10,
//         genre: 'Fantasy',
//       },
//       {
//         id: 11,
//         genre: 'Classics',
//       },
//       {
//         id: 12,
//         genre: 'Fantasy',
//       },
// ];
// };

// const getCategoriesFrom = (url) => categories.filter((v) => v.url === url)[0];

// export async function getStaticPaths() {
//   const paths = categories.map((v) => ({
//     params: { id: v.url },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const categories = getCategoriesFrom(params.id);

//   return {
//     props: { categories },
//   };
// };

// const Categories = ({ categories: { id, genre } }) => {
//   return (
//     <div>
//       <button className="bg-transparent font-semibold hover:text-white py-2 px-4 border rounded-lg">
//         Romance
//       </button>
//     </div>
//   );
// };

// export default Categories;
