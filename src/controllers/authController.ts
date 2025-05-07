import { Request, Response } from 'express';

export const registerUser = (req: Request, res: Response) => {
    // 注册逻辑
    res.send('User Registered');
};

export const loginUser = (req: Request, res: Response) => {
    // 登录逻辑
    res.send('User Logged In');
};
