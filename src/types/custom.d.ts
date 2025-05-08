// src/types/custom.d.ts
import { IUser } from '../models/userModel';

export {};
declare global {
  namespace Express {
    export interface Request {
      user?: IUser; 
    }
  }
}
