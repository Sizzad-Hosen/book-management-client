"use client";

import React, { useEffect, useState, useMemo } from "react";
import BookCard from "../ui/BookCard";
import { IBook, Filters } from "@/app/types/bookManage.type";
import { useGetAllBookQuery } from "@/redux/features/book/bookManagement.api";

interface BookDataProps {
  filters?: Filters;
}

const PAGE_SIZE = 10;

const BookData: React.FC<BookDataProps> = ({ filters = {} }) => {

  console.log("filters bookdata",filters)

  const [page, setPage] = useState(1);
  
  const queryParams = useMemo(() => {
    return [
      
      { name: "page", value: page.toString() },
      { name: "limit", value: PAGE_SIZE.toString() },
      
      ...Object.entries(filters)
      .filter(([_, v]) => v !== "" && v !== null && v !== undefined)
      .map(([name, value]) => ({ name, value: String(value) })),
    ];
    
  }, [page, filters]);
  
  const { data: bookData, isLoading, error } = useGetAllBookQuery(queryParams);
  
useEffect(() => {

    console.log("Filters:", filters);
    console.log("query params",queryParams)

}, [page, queryParams,filters]);


  const books: IBook[] = Array.isArray(bookData?.data)
    ? bookData.data
    : Array.isArray(bookData?.data?.books)
    ? bookData.data.books
    : [];

  const totalBooks = bookData?.data?.total || 0;
  const totalPages = bookData?.data?.totalPages || Math.ceil(totalBooks / PAGE_SIZE);


  const handleNext = () => {
    console.log("clicking button", page)
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (isLoading) return <div>Loading books...</div>;
  if (error) return <div>Failed to load books.</div>;


  return (

    <div className="mt-6 mx-auto max-w-7xl px-4">
      {books.length === 0 ? (
        <div className="text-center text-gray-500">No books found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard key={book.isbn || book.id} book={book} />
          ))}
        </div>
      )}

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
          disabled={page === totalPages || totalPages === 0}
          className="btn btn-secondary px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookData;
