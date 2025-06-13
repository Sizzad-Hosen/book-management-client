
export interface IBook extends Document {
  id: Key | null | undefined;
  title: string;
  author: string;
  isbn?: string;
  genre?: string;
  publisher?: string;
  series?: string;
  language?: string;
  format?: "hardcover" | "paperback" | "ebook";
  pageCount?: number;
  releaseDate?: Date;
  price: number;
  quantity: number;
  image?:string;
  createdAt: Date;
  updatedAt: Date;
  
}

export interface Filters {
  author?: string;
  isbn?: string;
  genre?: string;
  publisher?: string;
  series?: string;
  minPrice?: string; // or number if you parse later
  maxPrice?: string;
  releaseDate?: string;
  format?: string;
}

export type MetaData ={
  total:number;
  page:number;
  limit:number;
  totalPages:number
}