"use client";

import React, { useState } from "react";
import BookCard from "../ui/BookCard";
import { IBook } from "@/app/types/bookManage.type";
import { useGetAllBookQuery } from "@/redux/features/book/bookManagement.api";

const PAGE_SIZE = 10;

const BookData: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data:bookData, isLoading, error } = useGetAllBookQuery([
    { name: "page", value: page },
    { name: "limit", value: PAGE_SIZE },
  ]);

 const books: IBook[] = bookData?.data.result || [];


  const totalBooks = bookData?.data?.meta?.total || 0;
  const totalPages = bookData?.data?.meta?.totalPages || Math.ceil(totalBooks / PAGE_SIZE);

const handleNext = () => {
  if (page < totalPages) {
    console.log("Next clicked, old page:", page);
    setPage(page + 1);
  }
};
const handlePrev = () => {
  if (page > 1) {
    console.log("Prev clicked, old page:", page);
    setPage(page - 1);
  }
};


  if (isLoading) return <div>Loading books...</div>;
  if (error) return <div>Failed to load books.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 bg-gray-100 min-h-screen py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No books found.
          </div>
        ) : (
          books.map((book: IBook) => <BookCard key={book.isbn || book.id} book={book} />)
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="btn btn-secondary px-4 py-2 rounded"
        >
          Prev
        </button>
        <span className="text-gray-900">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
         
          className="btn btn-secondary px-4 py-2 rounded"
        >
          Next
        </button>
     

      </div>
    </div>
  );
};

export default BookData;
