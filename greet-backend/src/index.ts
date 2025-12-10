import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export const greet = (name: string) => `Hello, ${name}!`;
