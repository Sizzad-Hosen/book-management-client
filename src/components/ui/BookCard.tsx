import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

export interface Book {
  title: string;
  author: string;
  price: string;
  description: string;
  coverImage: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, borderRadius: 10 }}
      cover={
        <img
          alt={book.title}
          src={book.coverImage}
          style={{ height: 200, objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
        />
      }
      actions={[
        <Button type="primary" size="small">Details</Button>,
        <Button type="default" size="small">Sell Now</Button>,
      ]}
    >
      <Meta
        title={book.title}
        description={
          <div>
            <div><strong>Author:</strong> {book.author}</div>
            <div><strong>Price:</strong> ${book.price}</div>
            <div className="mt-2 text-gray-600">{book.description}</div>
          </div>
        }
      />
    </Card>
  );
};

export default BookCard;
