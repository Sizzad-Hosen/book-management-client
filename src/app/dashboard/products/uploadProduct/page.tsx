"use client";

import { useState, useRef, ChangeEvent } from "react";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: '',
    publisher: '',
    series: '',
    language: '',
    format: '',
    pageCount: '',
    releaseDate: '',
    price: '',
    quantity: '',
    imageFile: null as File | null,
    previewImage: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Set the file for upload
      setFormData(prev => ({
        ...prev,
        imageFile: file
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData(prev => ({
            ...prev,
            previewImage: event.target?.result as string
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData for file upload
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('author', formData.author);
    formDataToSend.append('isbn', formData.isbn);
    formDataToSend.append('genre', formData.genre);
    formDataToSend.append('publisher', formData.publisher);
    formDataToSend.append('series', formData.series);
    formDataToSend.append('language', formData.language);
    formDataToSend.append('format', formData.format);
    formDataToSend.append('pageCount', formData.pageCount);
    formDataToSend.append('releaseDate', formData.releaseDate);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('quantity', formData.quantity);
    if (formData.imageFile) {
      formDataToSend.append('image', formData.imageFile);
    }

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Book created successfully!', data);
        // Reset form
        setFormData({
          title: '',
          author: '',
          isbn: '',
          genre: '',
          publisher: '',
          series: '',
          language: '',
          format: '',
          pageCount: '',
          releaseDate: '',
          price: '',
          quantity: '',
          imageFile: null,
          previewImage: '',
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        console.error('Error creating book:', data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <Input label="Title" name="title" type="text" required onChange={handleChange} value={formData.title} />
          {/* Author */}
          <Input label="Author" name="author" type="text" required onChange={handleChange} value={formData.author} />
          {/* ISBN */}
          <Input label="ISBN (International Standard Book Number)" name="isbn" type="text" onChange={handleChange} value={formData.isbn} />
          {/* Genre */}
          <Input label="Genre (example: epic, tragedy, comedy, novel, and short story)" name="genre" type="text" onChange={handleChange} value={formData.genre} />
          {/* Publisher */}
          <Input label="Publisher" name="publisher" type="text" onChange={handleChange} value={formData.publisher} />
          {/* Series */}
          <Input label="Series (example: It is story book)" name="series" type="text" onChange={handleChange} value={formData.series} />
          {/* Language */}
          <Input label="Language (example: English, Bangla, Hindi)" name="language" type="text" onChange={handleChange} value={formData.language} />
          {/* Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
            <select
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="w-full px-3 py-2 border bg-white text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select format</option>
              <option value="hardcover">Hardcover</option>
              <option value="paperback">Paperback</option>
              <option value="ebook">eBook</option>
            </select>
          </div>
          {/* Page Count */}
          <Input label="Page Count" name="pageCount" type="number" onChange={handleChange} value={formData.pageCount} />
          {/* Release Date */}
          <Input label="Release Date" name="releaseDate" type="date" onChange={handleChange} value={formData.releaseDate} />
          {/* Price */}
          <Input label="Price" name="price" type="number" required onChange={handleChange} value={formData.price} />
          {/* Quantity */}
          <Input label="Quantity" name="quantity" type="number" required onChange={handleChange} value={formData.quantity} />
          
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Cover</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
            {formData.previewImage && (
              <div className="mt-2">
                <img 
                  src={formData.previewImage} 
                  alt="Preview" 
                  className="h-40 object-contain border rounded"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable Input component
const Input = ({ label, name, type, required = false, value, onChange }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

export default BookForm;