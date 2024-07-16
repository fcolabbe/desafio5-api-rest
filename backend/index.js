import express from 'express';
import routes from './routes/router.js';
import cors from 'cors';
import 'dotenv/config';
import { middleware } from './middlewares/reporte.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(middleware); // Asegúrate de usar el middleware aquí

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
