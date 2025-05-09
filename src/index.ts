// src/index.ts
import app from './app';
import connectDB from './config/database';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT||5000;


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const startServer = async () => {
  try {
    await connectDB(); // Database Connection
    // Start Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();