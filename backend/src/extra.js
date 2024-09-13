import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from "dotenv";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

// Load environment variables
config({ path: "./config.env" });

// CORS options
const corsOptions = {
  origin: 'http://localhost:5173', // Specify the exact origin
  credentials: true // Allow credentials
};
app.use(cors(corsOptions));

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zahid',
  database: 'gdbc_asifabad'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Email sending route
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: "idreesnawab78@gmail.com",
      subject: "GDBC ASIFABAD",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// News routes
app.post('/api/news', (req, res) => {
  const { title, content, initial_date, final_date } = req.body;
  const query = 'INSERT INTO news (title, content, initial_date, final_date) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, content, initial_date, final_date], (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, title, content, initial_date, final_date });
  });
});

app.get('/api/news', (req, res) => {
  const query = 'SELECT * FROM news';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Event routes
app.post('/api/events', upload.single('image'), (req, res) => {
  const { title, content, event_date } = req.body;
  const image = req.file ? req.file.filename : null;

  const query = 'INSERT INTO events (title, content, event_date, image) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, content, event_date, image], (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, title, content, event_date, image });
  });
});

app.get('/api/events', (req, res) => {
  const query = 'SELECT * FROM events';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Faculty routes
app.post('/api/faculty', upload.single('image'), (req, res) => {
  const { name, title, qualification, department_id } = req.body;
  const image = req.file ? req.file.filename : null;

  const query = 'INSERT INTO faculty (name, title, qualification, image, department_id) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [name, title, qualification, image, department_id], (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, name, title, qualification, image, department_id });
  });
});

app.get('/api/faculty', (req, res) => {
  const query = `
    SELECT 
      d.name AS department, 
      f.name, 
      f.title, 
      f.qualification, 
      f.image 
    FROM 
      faculty f
    JOIN 
      departments d ON f.department_id = d.id;
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }

    // Organize data by department
    const data = results.reduce((acc, row) => {
      const { department, name, title, qualification, image } = row;
      if (!acc[department]) {
        acc[department] = { department, members: [] };
      }
      acc[department].members.push({ name, title, qualification, image });
      return acc;
    }, {});

    res.json(Object.values(data));
  });
});

// Use the router for mail route
app.use(router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
