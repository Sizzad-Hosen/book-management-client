
import BookData from '@/components/books/BookData'
import BookFilters from '@/components/books/BookFilters'
import ExploreBooks from '@/components/books/SearchBar'
import React from 'react'

const BookPage = () => {

  return (
  <div className='bg-gray-50'>

    <ExploreBooks></ExploreBooks>
    <BookFilters></BookFilters>
     <BookData></BookData>

  </div>
  )
}

export default BookPage