// src/controllers/book.controller.ts
import { Request, Response } from 'express';
import BookModel from '../models/bookModel';

// 添加图书（管理员）
export const createBook = async (req: Request, res: Response):Promise<void> => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: '添加图书失败', error });
  }
};

// 修改图书（管理员）
export const updateBook = async (req: Request, res: Response):Promise<void> => {
  const { id } = req.params;
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBook) {
      res.status(404).json({ message: '图书未找到' });
      return ;
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: '更新图书失败', error });
  }
};

// 删除图书（管理员）
export const deleteBook = async (req: Request, res: Response):Promise<void> => {
  const { id } = req.params;
  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).json({ message: 'Cant find book' });
      return ;
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Book deleted failed', error });
  }
};
