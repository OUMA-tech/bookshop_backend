import mongoose, { Schema, Document } from 'mongoose';

export interface BookModel extends Document {
  title: string;
  author?: string;
  description?: string;
  category?: string;
  price: number;
  stock: number;
  coverImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BookSchema = new Schema<BookModel>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    coverImage: { type: String, required: false }, // URL
  },
  {
    timestamps: true, // 自动生成 createdAt 和 updatedAt
  }
);

BookSchema.index({ title: 'text', author: 'text' });

export default mongoose.model<BookModel>('Book', BookSchema);
