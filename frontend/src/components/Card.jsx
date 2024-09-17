import React from "react";

export default function Card({ title, publishedDate, author, isbn, price }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="pb-4 text-indigo-500">{author}</p>
        <p className="text-gray-700 text-base">{publishedDate}</p>
        <p>{isbn}</p>
        <p className="pt-3">{price}$</p>
      </div>
    </div>
  );
}
