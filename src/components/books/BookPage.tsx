"use client";
import React, { useState } from "react";

import { Filters } from "@/app/types/bookManage.type";
import BookFilters from "./BookFilters";
import BookData from "./BookData";

const BookPage = () => {
  const [filters, setFilters] = useState<Filters>({
    minPrice: "",
    maxPrice: "",
    releaseDate: "",
    author: "",
    isbn: "",
    genre: "",
    publisher: "",
    series: "",
    format: "",
  });

  return (
    <div>
      <BookFilters filters={filters} onFilterChange={setFilters} />
      <BookData filters={filters} />
    </div>
  );
};

export default BookPage;
