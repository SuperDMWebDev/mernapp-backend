const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const cors = require('cors');
const { addHeader } = require('./middleware/middleware');
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  if (file != null) {
    return res.status(200).json(file.filename);
  }
  return res.status(404).json('file does not exist');
});

app.get('/', (req, res) => {
  res.json('test');
});
app.use('/api/auth', addHeader, authRoutes);
app.use('/api/posts', postsRoutes);

app.listen(5000, () => {
  console.log('Server is running on: http://localhost:5000');
});
