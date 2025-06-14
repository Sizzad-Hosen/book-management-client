"use client";

import React, { useState, useEffect } from "react";
import { Filters } from "@/app/types/bookManage.type";

interface Props {
  filters?: Filters; // ✅ optional for flexibility
  onFilterChange: (filters: Filters) => void;
}

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

const inputStyle =
  "peer w-full rounded-xl border border-gray-300 bg-transparent px-4 pt-4 pb-2 text-sm text-gray-800 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

const labelStyle =
  "absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500";

const BookFilters: React.FC<Props> = ({ filters: initialFilters, onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>(initialFilters ?? defaultFilters);

  useEffect(() => {
    setFilters(initialFilters ?? defaultFilters);
  }, [initialFilters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  

  const applyFilters = () => {
    console.log(filters)
    onFilterChange(filters);
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white shadow-xl max-w-7xl mx-auto px-4 p-6 rounded-2xl space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Filter Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { name: "minPrice", label: "Min Price", type: "number" },
          { name: "maxPrice", label: "Max Price", type: "number" },
          { name: "author", label: "Author", type: "text" },
          { name: "isbn", label: "ISBN", type: "text" },
          { name: "genre", label: "Genre", type: "text" },
          { name: "publisher", label: "Publisher", type: "text" },
          { name: "series", label: "Series", type: "text" },
          { name: "releaseDate", label: "Release Date", type: "date" },
        ].map(({ name, label, type }) => (
          <div key={name} className="relative">
            <input
              id={name}
              name={name}
              type={type}
              value={(filters as any)[name]}
              onChange={handleChange}
              placeholder={label}
              className={inputStyle}
            />
            <label htmlFor={name} className={labelStyle}>
              {label}
            </label>
          </div>
        ))}

        <div className="relative">
          <select
            id="format"
            name="format"
            value={filters.format}
            onChange={handleChange}
            className="select select-bordered w-full rounded-xl text-sm"
          >
            <option value="">Select Format</option>
            <option value="hardcover">Hardcover</option>
            <option value="paperback">Paperback</option>
            <option value="ebook">E-Book</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={clearFilters}
          className="btn btn-secondary px-6 py-2 rounded-xl text-sm"
        >
          Clear Filters
        </button>
        <button
          onClick={applyFilters}
          className="btn btn-primary px-6 py-2 rounded-xl text-sm"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default BookFilters;
