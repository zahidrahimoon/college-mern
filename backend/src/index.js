import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import multer from 'multer';
import newsRoutes from './routes/newsRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import facultyRoutes from './routes/facultyRoutes.js';
import mailRoutes from './routes/mailRoutes.js';
import commerceRoutes from './routes/commercexiRoutes.js';
import commercexiiRoutes from './routes/commercexiiRoutes.js';
import engxiRoutes from './routes/engxiRoutes.js';
import engxiiRoutes from './routes/engxiiRoutes.js';
import medxiRoutes from './routes/medxiRoutes.js';
import medxiiRoutes from './routes/medxiiRoutes.js';
import genscixiRoutes from './routes/genscixiRoutes.js';
import genscixiiRoutes from './routes/genscixiiRoutes.js';
import upload from './middlewares/uploadmiddle.js';
import authRoutes from './routes/authRoutes.js';
import sheetRoutes from './routes/sheetRoutes.js';
import juniorOfficerRoutes from './routes/juniorOfficerRoutes.js';
import seniorOfficerRoutes from './routes/seniorOfficerRoutes.js';
import popupRoutes from './routes/popupRoutes.js'


const app = express();


// Load environment variables
config();

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true); 
  },
  credentials: true,
};

app.use(cors(corsOptions));
// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));


// Use routes
app.use('/api', newsRoutes);
app.use('/api', eventRoutes);
app.use('/api', facultyRoutes);
app.use('/api', mailRoutes);
app.use('/api', commerceRoutes);
app.use('/api', commercexiiRoutes);
app.use('/api', engxiRoutes);
app.use('/api', engxiiRoutes);
app.use('/api', medxiRoutes);
app.use('/api', medxiiRoutes);
app.use('/api', genscixiRoutes);
app.use('/api', genscixiiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', sheetRoutes);
app.use('/api/', juniorOfficerRoutes);
app.use('/api/', seniorOfficerRoutes);
app.use('/api', popupRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
