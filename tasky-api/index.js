import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT;

// Serve static files (optional for homepage)
app.use(express.static('public'));

// Mount tasks API routes
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
