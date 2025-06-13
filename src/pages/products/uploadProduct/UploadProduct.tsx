"use client";

import { useAddBookMutation } from "@/redux/features/book/bookManagement.api";
import { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";

const BookForm = () => {

  const [addBook] = useAddBookMutation();

const [formData, setFormData] = useState({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isbn: '9780743273565',
  genre: 'Novel',
  publisher: 'Scribner',
  series: '',
  language: 'English',
  format: 'hardcover', // must match one of the select options
  pageCount: '180',
  releaseDate: '1925-04-10',
  price: '15.99',
  quantity: '100',
  image: null as File | null,
  previewImage: '',
});


  console.log('formdata',formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
   
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
 const preview = URL.createObjectURL(file);
      // Set the file for upload
      setFormData(prev => ({
        ...prev,
        image: file,
         previewImage: preview
      }));

    }

  };



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formdata = new FormData();

  // Create a data object with all text fields
  const bookData = {
    title: formData.title,
    author: formData.author,
    isbn: formData.isbn,
    genre: formData.genre,
    publisher: formData.publisher,
    series: formData.series,
    language: formData.language,
    format: formData.format,
    pageCount: Number(formData.pageCount),
    releaseDate: formData.releaseDate,
    price: Number(formData.price),
    quantity: Number(formData.quantity),
  };

  // Append the data as JSON string
  formdata.append("data", JSON.stringify(bookData));

  // Append file if exists
  if (formData.image) {
    formdata.append("file", formData.image);
  }

  try {
    const response = await addBook(formdata); 
    
    if (response.data?.success) {
      toast.success('Book created successfully!');
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
        image: null,
        previewImage: '',
      });
    } else {
      console.error('Error creating book:', response.error);
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
          <Input label="Publisher (give pushlisher name)" name="publisher" type="text" onChange={handleChange} value={formData.publisher} />
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
              name="image"
              accept="image/*"
              onChange={handleImageChange}
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