"use client";

import React, { useState } from "react";
import BookFilters from "./BookFilters";
import BookData from "./BookData"; // Your data display component
import { Filters } from "@/app/types/bookManage.type";

const defaultFilters: Filters = {
  minPrice: "",
  maxPrice: "",
  releaseDate: "",
  author: "",
  isbn: "",
  genre: "",
  publisher: "",
  series: "",
  format: "",
};

const BookPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    // You can trigger API calls here if needed with newFilters
  };

  return (
    <div className="space-y-6 px-4 max-w-7xl mx-auto">
      <BookFilters filters={filters} onFilterChange={handleFilterChange} />
      <BookData filters={filters} />
    </div>
  );
};

export default BookPage;
